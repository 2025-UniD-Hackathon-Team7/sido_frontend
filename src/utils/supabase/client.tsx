import { projectId, publicAnonKey } from './info.tsx';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-30914540`;

// Store access token in memory
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
  if (token) {
    localStorage.setItem('sido_access_token', token);
  } else {
    localStorage.removeItem('sido_access_token');
  }
};

export const getAccessToken = (): string | null => {
  if (accessToken) return accessToken;
  
  // Try to get from localStorage
  const stored = localStorage.getItem('sido_access_token');
  if (stored) {
    accessToken = stored;
    return stored;
  }
  
  return null;
};

// Helper function to make API calls
const apiCall = async (
  endpoint: string,
  method: string = 'GET',
  body?: any,
  requiresAuth: boolean = false
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Always use publicAnonKey for Supabase authorization
  headers['Authorization'] = `Bearer ${publicAnonKey}`;
  
  // For authenticated requests, send our custom token in a separate header
  if (requiresAuth) {
    const token = getAccessToken();
    console.log(`[API] ${method} ${endpoint} - Requires auth: YES`);
    console.log(`[API] Token present:`, token ? 'YES' : 'NO');
    if (token) {
      console.log(`[API] Full token:`, token);
    }
    if (!token) {
      console.error('[API] ✗ No access token found!');
      throw new Error('No access token found. Please login.');
    }
    // Use custom header instead of Authorization to avoid Supabase JWT validation
    headers['X-User-Token'] = token;
    console.log(`[API] X-User-Token header:`, token);
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(body);
  }

  console.log(`[API] Calling ${method} ${API_BASE_URL}${endpoint}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    console.log(`[API] Response status: ${response.status} ${response.statusText}`);
    
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
      console.log(`[API] Response data:`, data);
    } else {
      const text = await response.text();
      console.error(`[API] Non-JSON response:`, text);
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
    }

    if (!response.ok) {
      const errorMessage = data.error || data.message || 'API request failed';
      console.error(`[API] Error on ${endpoint}:`, errorMessage);
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[API] Exception on ${endpoint}:`, error.message);
      throw error;
    }
    console.error(`[API] Unknown error on ${endpoint}:`, error);
    throw new Error('Unknown API error');
  }
};

// Auth APIs
export const signup = async (email: string, password: string, nickname: string) => {
  try {
    console.log('[CLIENT] signup() - Starting signup for:', email);
    const data = await apiCall('/signup', 'POST', { email, password, nickname });
    console.log('[CLIENT] signup() - Response received:', data);
    
    if (data.success && data.accessToken) {
      console.log('[CLIENT] signup() - Setting access token');
      setAccessToken(data.accessToken);
      
      // Verify token was set
      const verifyToken = getAccessToken();
      console.log('[CLIENT] signup() - Token verification:', verifyToken ? 'SUCCESS' : 'FAILED');
    } else {
      console.warn('[CLIENT] signup() - No access token in response');
    }
    
    return data;
  } catch (error) {
    console.error('[CLIENT] Signup error:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    console.log('[CLIENT] login() - Starting login for:', email);
    const data = await apiCall('/login', 'POST', { email, password });
    console.log('[CLIENT] login() - Response received:', data);
    
    if (data.success && data.accessToken) {
      console.log('[CLIENT] login() - Setting access token');
      setAccessToken(data.accessToken);
      
      // Verify token was set
      const verifyToken = getAccessToken();
      console.log('[CLIENT] login() - Token verification:', verifyToken ? 'SUCCESS' : 'FAILED');
    } else {
      console.warn('[CLIENT] login() - No access token in response');
    }
    
    return data;
  } catch (error) {
    console.error('[CLIENT] Login error:', error);
    throw error;
  }
};

export const logout = () => {
  setAccessToken(null);
};

// User APIs
export const getUser = async () => {
  try {
    console.log('[CLIENT] getUser() called');
    const data = await apiCall('/user', 'GET', undefined, true);
    console.log('[CLIENT] getUser() response:', data);
    if (!data.user) {
      throw new Error('No user data in response');
    }
    return data.user;
  } catch (error) {
    console.error('[CLIENT] Get user error:', error);
    throw error;
  }
};

export const updateUser = async (updates: any) => {
  try {
    const data = await apiCall('/user', 'PUT', updates, true);
    return data.user;
  } catch (error) {
    console.error('Update user error:', error);
    throw error;
  }
};

// Mission APIs
export const getMissions = async () => {
  try {
    const data = await apiCall('/missions', 'GET');
    return data.missions;
  } catch (error) {
    console.error('Get missions error:', error);
    throw error;
  }
};

export const getRecommendedMissions = async (
  moods?: string[],
  environments?: string[],
  goals?: string[],
  limit?: number
) => {
  try {
    console.log('[CLIENT] ========== getRecommendedMissions ==========');
    console.log('[CLIENT] Parameters:', { moods, environments, goals, limit });
    
    const token = getAccessToken();
    console.log('[CLIENT] Current access token:', token);
    console.log('[CLIENT] Token from localStorage:', localStorage.getItem('sido_access_token'));
    
    const data = await apiCall(
      '/missions/recommended',
      'POST',
      { moods, environments, goals, limit },
      true
    );
    console.log('[CLIENT] getRecommendedMissions() response:', data);
    return data.missions;
  } catch (error) {
    console.error('[CLIENT] Get recommended missions error:', error);
    throw error;
  }
};

export const completeMission = async (
  missionId: string,
  reward: number,
  activityRecord?: any
) => {
  try {
    const data = await apiCall(
      '/missions/complete',
      'POST',
      { missionId, reward, activityRecord },
      true
    );
    return data.user;
  } catch (error) {
    console.error('Complete mission error:', error);
    throw error;
  }
};

// Tree APIs
export const donateTree = async (tree: any, organizationId: string, seeds: number) => {
  try {
    const data = await apiCall(
      '/trees/donate',
      'POST',
      { tree, organizationId, seeds },
      true
    );
    return data;
  } catch (error) {
    console.error('Donate tree error:', error);
    throw error;
  }
};

// Ranking API
export const getRanking = async () => {
  try {
    const data = await apiCall('/ranking', 'GET');
    return data.ranking;
  } catch (error) {
    console.error('Get ranking error:', error);
    throw error;
  }
};
