import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

/**
 * SIDO Backend Server - Updated v2.0
 * 
 * This server implements a simple authentication system using:
 * - Password hashing with SHA-256
 * - Simple token = userId (no JWT encryption)
 * - KV store for user data persistence
 * 
 * Note: This is a simplified auth system for prototyping.
 * For production, consider using OAuth 2.0 or more robust solutions.
 */

const app = new Hono();

// Initialize Supabase client
const supabaseClient = () => createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "X-User-Token"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Simple password hashing using Web Crypto API
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Generate a simple token (just use userId directly - no encryption needed)
function generateToken(userId: string): string {
  console.log('[GENERATE_TOKEN] Creating token for userId:', userId);
  return userId;
}

// Verify token (just return the userId directly)
function verifyToken(token: string): string | null {
  try {
    if (!token) {
      console.log('[VERIFY_TOKEN] No token provided');
      return null;
    }
    
    console.log('[VERIFY_TOKEN] ✓ Token is valid userId:', token);
    return token;
  } catch (error) {
    console.log('[VERIFY_TOKEN] ✗ Error verifying token:', error.message);
    return null;
  }
}

// Health check endpoint
app.get("/make-server-30914540/health", (c) => {
  return c.json({ status: "ok" });
});

// Sign up endpoint
app.post("/make-server-30914540/signup", async (c) => {
  try {
    const { email, password, nickname } = await c.req.json();
    console.log(`[SIGNUP] Starting signup for email: ${email}`);

    if (!email || !password || !nickname) {
      console.log(`[SIGNUP] Missing required fields`);
      return c.json({ error: "Email, password, and nickname are required" }, 400);
    }

    // Check if user already exists
    const existingUser = await kv.get(`user_email:${email}`);
    console.log(`[SIGNUP] Checking existing user:`, existingUser ? "Found" : "Not found");
    if (existingUser) {
      return c.json({ error: "User with this email already exists" }, 400);
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    console.log(`[SIGNUP] Password hashed successfully`);

    // Generate user ID
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log(`[SIGNUP] Generated userId: ${userId}`);

    // Initialize user data in KV store
    const userData = {
      id: userId,
      email,
      nickname,
      passwordHash: hashedPassword,
      seeds: 0,
      currentTree: null,
      completedMissions: [],
      skippedMissions: [],
      donatedTrees: [],
      level: 1,
      xp: 0,
      activityHistory: [],
      personality: null, // Will be set later: 'EXTROVERT' or 'INTROVERT'
      preferredKinds: [], // Categories user prefers
      createdAt: new Date().toISOString(),
    };

    // Store user data with two keys: by ID and by email
    console.log(`[SIGNUP] Storing user data with key: user:${userId}`);
    await kv.set(`user:${userId}`, userData);
    console.log(`[SIGNUP] Storing email mapping with key: user_email:${email}`);
    await kv.set(`user_email:${email}`, userId);

    // Verify data was stored
    const verifyUser = await kv.get(`user:${userId}`);
    const verifyEmail = await kv.get(`user_email:${email}`);
    console.log(`[SIGNUP] Verification - User data stored:`, verifyUser ? "YES" : "NO");
    console.log(`[SIGNUP] Verification - Email mapping stored:`, verifyEmail ? "YES" : "NO");

    // Generate access token
    const accessToken = generateToken(userId);
    console.log(`[SIGNUP] ✓ User created successfully: ${email} (${userId})`);
    
    return c.json({ 
      success: true,
      accessToken,
      user: {
        id: userId,
        email,
        nickname,
        seeds: 0,
        level: 1,
        xp: 0,
        currentTree: null,
        completedMissions: [],
        donatedTrees: [],
        activityHistory: [],
      }
    });
  } catch (error) {
    console.log(`[SIGNUP] ✗ Server error during signup: ${error.message}`);
    console.log(`[SIGNUP] Error stack:`, error.stack);
    return c.json({ error: `Database error creating new user: ${error.message}` }, 500);
  }
});

// Login endpoint
app.post("/make-server-30914540/login", async (c) => {
  try {
    const { email, password } = await c.req.json();
    console.log(`[LOGIN] Starting login for email: ${email}`);

    if (!email || !password) {
      console.log(`[LOGIN] Missing email or password`);
      return c.json({ error: "Email and password are required" }, 400);
    }

    // Get user ID by email
    console.log(`[LOGIN] Looking up user by email: user_email:${email}`);
    const userId = await kv.get(`user_email:${email}`);
    console.log(`[LOGIN] User ID lookup result:`, userId ? userId : "NOT FOUND");
    
    if (!userId) {
      console.log(`[LOGIN] ✗ No user found with email: ${email}`);
      return c.json({ error: "Invalid login credentials - email not found" }, 400);
    }

    // Get user data from KV store
    console.log(`[LOGIN] Fetching user data with key: user:${userId}`);
    const userData = await kv.get(`user:${userId}`);
    console.log(`[LOGIN] User data lookup result:`, userData ? "FOUND" : "NOT FOUND");
    
    if (!userData) {
      console.log(`[LOGIN] ✗ User data not found for userId: ${userId}`);
      return c.json({ error: "Invalid login credentials - user data not found" }, 400);
    }

    // Verify password
    const hashedPassword = await hashPassword(password);
    console.log(`[LOGIN] Entered password hash: ${hashedPassword.substring(0, 20)}...`);
    console.log(`[LOGIN] Stored password hash: ${userData.passwordHash.substring(0, 20)}...`);
    console.log(`[LOGIN] Password hash comparison - Match:`, hashedPassword === userData.passwordHash);
    
    if (hashedPassword !== userData.passwordHash) {
      console.log(`[LOGIN] ✗ Password mismatch for email: ${email}`);
      console.log(`[LOGIN] Full entered hash: ${hashedPassword}`);
      console.log(`[LOGIN] Full stored hash: ${userData.passwordHash}`);
      return c.json({ error: "Invalid login credentials - incorrect password" }, 400);
    }

    // Generate access token
    const accessToken = generateToken(userId);

    // Remove password hash from response
    const { passwordHash, ...userWithoutPassword } = userData;

    console.log(`[LOGIN] ✓ User logged in successfully: ${email} (${userId})`);

    return c.json({ 
      success: true,
      accessToken,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log(`[LOGIN] ✗ Server error during login: ${error.message}`);
    console.log(`[LOGIN] Error stack:`, error.stack);
    return c.json({ error: `Login error: ${error.message}` }, 500);
  }
});

// Get user data endpoint (requires auth)
app.get("/make-server-30914540/user", async (c) => {
  try {
    console.log(`[GET_USER] Request received`);
    
    // Get custom token from X-User-Token header
    const accessToken = c.req.header('X-User-Token');
    console.log(`[GET_USER] X-User-Token header:`, accessToken ? accessToken : "MISSING");
    
    if (!accessToken) {
      console.log(`[GET_USER] ✗ No X-User-Token provided`);
      return c.json({ error: "User token required" }, 401);
    }

    const userId = verifyToken(accessToken);
    console.log(`[GET_USER] Token verification result:`, userId ? userId : "INVALID");
    
    if (!userId) {
      console.log(`[GET_USER] ✗ Invalid or expired token`);
      return c.json({ error: "Unauthorized - invalid or expired token" }, 401);
    }

    console.log(`[GET_USER] Fetching user data with key: user:${userId}`);
    const userData = await kv.get(`user:${userId}`);
    console.log(`[GET_USER] User data found:`, userData ? "YES" : "NO");

    if (!userData) {
      console.log(`[GET_USER] ✗ User data not found for userId: ${userId}`);
      return c.json({ error: "User data not found in database" }, 404);
    }

    // Remove password hash from response
    const { passwordHash, ...userWithoutPassword } = userData;

    console.log(`[GET_USER] ✓ Successfully retrieved user data for: ${userId}`);
    return c.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    console.log(`[GET_USER] ✗ Server error while getting user data: ${error.message}`);
    console.log(`[GET_USER] Error stack:`, error.stack);
    return c.json({ error: `Server error: ${error.message}` }, 500);
  }
});

// Update user data endpoint (requires auth)
app.put("/make-server-30914540/user", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const userId = verifyToken(accessToken);
    if (!userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const updates = await c.req.json();
    const existingData = await kv.get(`user:${userId}`);

    if (!existingData) {
      return c.json({ error: "User data not found" }, 404);
    }

    const updatedData = {
      ...existingData,
      ...updates,
      id: userId, // Ensure ID doesn't change
      email: existingData.email, // Ensure email doesn't change
      passwordHash: existingData.passwordHash, // Ensure password hash doesn't change
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedData);

    // Remove password hash from response
    const { passwordHash, ...userWithoutPassword } = updatedData;

    return c.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    console.log(`Server error while updating user data: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Complete mission endpoint (requires auth)
app.post("/make-server-30914540/missions/complete", async (c) => {
  try {
    // Get custom token from X-User-Token header
    const accessToken = c.req.header('X-User-Token');
    
    if (!accessToken) {
      return c.json({ error: "User token required" }, 401);
    }

    const userId = verifyToken(accessToken);
    if (!userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const { missionId, reward, activityRecord } = await c.req.json();

    if (!missionId || !reward) {
      return c.json({ error: "Mission ID and reward are required" }, 400);
    }

    const userData = await kv.get(`user:${userId}`);

    if (!userData) {
      return c.json({ error: "User data not found" }, 404);
    }

    // Update user data
    const updatedData = {
      ...userData,
      seeds: userData.seeds + reward,
      completedMissions: [...(userData.completedMissions || []), missionId],
      activityHistory: activityRecord 
        ? [activityRecord, ...(userData.activityHistory || [])]
        : userData.activityHistory,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedData);

    // Remove password hash from response
    const { passwordHash, ...userWithoutPassword } = updatedData;

    return c.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    console.log(`Server error while completing mission: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Donate tree endpoint (requires auth)
app.post("/make-server-30914540/trees/donate", async (c) => {
  try {
    // Get custom token from X-User-Token header
    const accessToken = c.req.header('X-User-Token');
    
    if (!accessToken) {
      return c.json({ error: "User token required" }, 401);
    }

    const userId = verifyToken(accessToken);
    if (!userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const { tree, organizationId, seeds } = await c.req.json();

    if (!tree || !organizationId || !seeds) {
      return c.json({ error: "Tree, organization ID, and seeds are required" }, 400);
    }

    const userData = await kv.get(`user:${userId}`);

    if (!userData) {
      return c.json({ error: "User data not found" }, 404);
    }

    // Create donated tree record
    const donatedTree = {
      id: Date.now().toString(),
      treeType: tree,
      donatedDate: new Date().toISOString(),
      seeds,
      organizationId,
    };

    // Update user data
    const updatedData = {
      ...userData,
      currentTree: null, // Reset current tree after donation
      donatedTrees: [...(userData.donatedTrees || []), donatedTree],
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, updatedData);

    // Remove password hash from response
    const { passwordHash, ...userWithoutPassword } = updatedData;

    return c.json({ success: true, user: userWithoutPassword, donatedTree });
  } catch (error) {
    console.log(`Server error while donating tree: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Get ranking endpoint
app.get("/make-server-30914540/ranking", async (c) => {
  try {
    // Get all users with prefix "user:"
    const allUsers = await kv.getByPrefix("user:");

    if (!allUsers || allUsers.length === 0) {
      return c.json({ success: true, ranking: [] });
    }

    // Sort by seeds (descending)
    const sortedUsers = allUsers
      .map(user => ({
        id: user.id,
        nickname: user.nickname,
        seeds: user.seeds || 0,
        level: user.level || 1,
        donatedTreesCount: (user.donatedTrees || []).length,
      }))
      .sort((a, b) => b.seeds - a.seeds)
      .map((user, index) => ({
        ...user,
        rank: index + 1,
      }));

    return c.json({ success: true, ranking: sortedUsers });
  } catch (error) {
    console.log(`Server error while getting ranking: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Get missions (sample data)
app.get("/make-server-30914540/missions", async (c) => {
  try {
    // Check if missions are already stored
    let missions = await kv.get("missions");

    // If not, initialize with sample missions (with extended fields for weighted recommendations)
    if (!missions) {
      missions = [
        {
          id: "m1",
          title: "엘리베이터에서 문 잡아주기",
          reward: 10,
          emoji: "🚪",
          description: "엘리베이터를 탈 때 뒤따라오는 사람을 위해 문을 잡아주세요.",
          timeOfDay: "morning",
          category: "일상",
          difficulty: "easy",
          missionType: "INTERACTION",
          moods: ["happy", "neutral", "tired"],
          environments: ["building", "office"],
          goals: ["connection", "small_acts"],
        },
        {
          id: "m2",
          title: "지하철에서 자리 양보하기",
          reward: 15,
          emoji: "🚇",
          description: "힘들어 보이는 분께 자리를 양보해보세요.",
          timeOfDay: "morning",
          category: "교통",
          difficulty: "medium",
          missionType: "INTERACTION",
          moods: ["happy", "neutral", "energetic"],
          environments: ["public_transport", "commute"],
          goals: ["connection", "empathy"],
        },
        {
          id: "m3",
          title: "동료에게 커피 사주기",
          reward: 20,
          emoji: "☕",
          description: "오늘 함께 일하는 동료에게 커피를 사주며 감사 인사를 전하세요.",
          timeOfDay: "afternoon",
          category: "직장",
          difficulty: "medium",
          missionType: "INTERACTION",
          moods: ["happy", "neutral", "grateful"],
          environments: ["office", "workplace"],
          goals: ["connection", "appreciation"],
        },
        {
          id: "m4",
          title: "길에서 쓰레기 줍기",
          reward: 10,
          emoji: "🗑️",
          description: "길을 걷다가 보이는 쓰레기를 하나 주워 쓰레기통에 버려주세요.",
          timeOfDay: "afternoon",
          category: "환경",
          difficulty: "easy",
          missionType: "SELF_PRACTICE",
          moods: ["happy", "neutral", "calm"],
          environments: ["outdoor", "street"],
          goals: ["environment", "small_acts"],
        },
        {
          id: "m5",
          title: "가족에게 전화하기",
          reward: 15,
          emoji: "📱",
          description: "오랜만에 연락하지 못한 가족에게 전화해서 안부를 물어보세요.",
          timeOfDay: "evening",
          category: "가족",
          difficulty: "easy",
          missionType: "INTERACTION",
          moods: ["happy", "lonely", "grateful"],
          environments: ["home", "anywhere"],
          goals: ["connection", "family"],
        },
        {
          id: "m6",
          title: "이웃에게 인사하기",
          reward: 10,
          emoji: "👋",
          description: "오늘 만나는 이웃에게 밝은 미소로 인사해보세요.",
          timeOfDay: "evening",
          category: "이웃",
          difficulty: "easy",
          missionType: "INTERACTION",
          moods: ["happy", "neutral", "friendly"],
          environments: ["home", "neighborhood"],
          goals: ["connection", "community"],
        },
        {
          id: "m7",
          title: "감사 편지 쓰기",
          reward: 25,
          emoji: "✉️",
          description: "도움을 받았던 사람에게 감사 편지를 써보세요.",
          timeOfDay: "evening",
          category: "감사",
          difficulty: "hard",
          missionType: "SELF_PRACTICE",
          moods: ["grateful", "calm", "reflective"],
          environments: ["home", "quiet"],
          goals: ["appreciation", "reflection"],
        },
        {
          id: "m8",
          title: "음식점 직원에게 감사 인사하기",
          reward: 10,
          emoji: "🙏",
          description: "식사 후 음식점을 나가며 직원에게 감사 인사를 전하세요.",
          timeOfDay: "afternoon",
          category: "일상",
          difficulty: "easy",
          missionType: "INTERACTION",
          moods: ["happy", "neutral", "grateful"],
          environments: ["restaurant", "cafe"],
          goals: ["appreciation", "small_acts"],
        },
      ];
      await kv.set("missions", missions);
    }

    return c.json({ success: true, missions });
  } catch (error) {
    console.log(`Server error while getting missions: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Get weighted mission recommendations (requires auth)
app.post("/make-server-30914540/missions/recommended", async (c) => {
  try {
    console.log(`[RECOMMENDED] ========== NEW REQUEST ==========`);
    console.log(`[RECOMMENDED] Request received`);
    
    // Get custom token from X-User-Token header (not Authorization)
    const accessToken = c.req.header('X-User-Token');
    console.log(`[RECOMMENDED] X-User-Token header:`, accessToken ? accessToken : 'MISSING');
    
    if (!accessToken) {
      console.log(`[RECOMMENDED] ✗ No X-User-Token header`);
      return c.json({ error: "User token required" }, 401);
    }

    console.log(`[RECOMMENDED] Token received: ${accessToken}`);
    const userId = verifyToken(accessToken);
    console.log(`[RECOMMENDED] verifyToken returned:`, userId);
    
    if (!userId) {
      console.log(`[RECOMMENDED] ✗ Token verification returned null/empty`);
      return c.json({ error: "Token verification failed" }, 401);
    }
    
    console.log(`[RECOMMENDED] ✓ Authenticated as userId: ${userId}`);

    // Get request parameters
    const { moods, environments, goals, limit = 20 } = await c.req.json();
    console.log(`[RECOMMENDED] Parameters:`, { moods, environments, goals, limit });

    // Get user data
    console.log(`[RECOMMENDED] Looking up user with key: user:${userId}`);
    const userData = await kv.get(`user:${userId}`);
    console.log(`[RECOMMENDED] User data found:`, userData ? 'YES' : 'NO');
    
    if (!userData) {
      console.log(`[RECOMMENDED] ✗ User data not found for userId: ${userId}`);
      return c.json({ error: "User data not found" }, 404);
    }
    
    console.log(`[RECOMMENDED] User data loaded:`, { 
      id: userData.id, 
      email: userData.email, 
      nickname: userData.nickname 
    });

    // Get all missions from Supabase
    console.log(`[RECOMMENDED] Fetching missions from Supabase...`);
    const supabase = supabaseClient();
    const { data: missionsData, error: missionsError } = await supabase
      .from("missions")
      .select("*")
      .eq("is_active", true);
    
    if (missionsError) {
      console.log(`[RECOMMENDED] ✗ Error fetching missions: ${missionsError.message}`);
      return c.json({ error: `Failed to fetch missions: ${missionsError.message}` }, 500);
    }
    
    if (!missionsData || missionsData.length === 0) {
      console.log(`[RECOMMENDED] No active missions found in database`);
      return c.json({ success: true, missions: [] });
    }
    
    console.log(`[RECOMMENDED] ✓ Fetched ${missionsData.length} missions from Supabase`);
    console.log(`[RECOMMENDED] Sample mission IDs:`, missionsData.slice(0, 3).map((m: any) => m.id));

    // Map database fields to client-expected format
    const missions = missionsData.map((dbMission: any) => {
      // Map difficulty: EASY/NORMAL/HARD -> easy/medium/hard
      let difficulty = 'easy';
      if (dbMission.difficulty === 'NORMAL') difficulty = 'medium';
      else if (dbMission.difficulty === 'HARD') difficulty = 'hard';
      
      // Map time slot: MORNING/NOON/EVENING -> morning/afternoon/evening
      let timeOfDay = 'morning';
      if (dbMission.default_time_slot === 'NOON') timeOfDay = 'afternoon';
      else if (dbMission.default_time_slot === 'EVENING') timeOfDay = 'evening';
      
      // Map moods: convert to lowercase and map values
      const moodMap: Record<string, string> = {
        'GOOD': 'happy',
        'NEUTRAL': 'neutral',
        'ENERGETIC': 'energetic',
        'TIRED': 'tired',
        'STRESS': 'stressed'
      };
      const mappedMoods = (dbMission.moods || []).map((m: string) => 
        moodMap[m] || m.toLowerCase()
      );
      
      // Map environments: convert to lowercase and map values
      const envMap: Record<string, string> = {
        'SCHOOL_OFFICE': 'office',
        'HOME': 'home',
        'OUTDOOR': 'outdoor',
        'CAFE': 'cafe',
        'COMMUTE': 'public_transport'
      };
      const mappedEnvironments = (dbMission.environments || []).map((e: string) => 
        envMap[e] || e.toLowerCase()
      );
      
      // Map goals: convert to lowercase and map values
      const goalMap: Record<string, string> = {
        'SOCIAL': 'connection',
        'CONFIDENCE': 'achievement',
        'KINDNESS': 'empathy',
        'PEACE': 'self_care'
      };
      const mappedGoals = (dbMission.goals || []).map((g: string) => 
        goalMap[g] || g.toLowerCase()
      );
      
      return {
        id: String(dbMission.id),
        title: dbMission.title,
        description: dbMission.description || '',
        reward: dbMission.seed || 0,
        xp: dbMission.exp || 0,
        difficulty: difficulty,
        timeOfDay: timeOfDay,
        emoji: '🌱', // Default emoji (can be added to DB later)
        category: dbMission.category || 'OTHER',
        missionType: dbMission.mission_type,
        moods: mappedMoods,
        environments: mappedEnvironments,
        goals: mappedGoals,
      };
    });

    console.log(`[RECOMMENDED] User personality: ${userData.personality || 'none'}`);
    console.log(`[RECOMMENDED] User preferred kinds: ${userData.preferredKinds?.join(', ') || 'none'}`);

    // Calculate weights for each mission
    const weightedMissions = missions.map((mission: any) => {
      // Skip if already completed
      if (userData.completedMissions?.includes(mission.id)) {
        return { ...mission, weight: 0 };
      }

      // 1. Base weight by difficulty (easy:3, medium:2, hard:1)
      let weight = 1.0;
      if (mission.difficulty === 'easy') weight = 3.0;
      else if (mission.difficulty === 'medium') weight = 2.0;
      else if (mission.difficulty === 'hard') weight = 1.0;

      // 2. EXP correction (0.01 ~ 0.25)
      weight += (mission.reward / 100.0);

      // 3. User completion history
      const userCompletedCount = userData.completedMissions?.filter((id: string) => id === mission.id).length || 0;
      if (userCompletedCount === 0) {
        weight *= 1.0; // Never completed
      } else if (userCompletedCount <= 2) {
        weight *= 0.7; // Completed a few times
      } else {
        weight *= 0.4; // Completed many times
      }

      // 4. User skip history
      const userSkippedCount = userData.skippedMissions?.filter((id: string) => id === mission.id).length || 0;
      if (userSkippedCount > 0) {
        weight *= 0.6;
      }

      // 5. Preferred category bonus
      if (userData.preferredKinds && userData.preferredKinds.includes(mission.category)) {
        weight *= 1.3;
      }

      // 6. Personality and mission type matching
      if (userData.personality === 'EXTROVERT' && mission.missionType === 'INTERACTION') {
        weight *= 1.2;
      } else if (userData.personality === 'INTROVERT' && mission.missionType === 'SELF_PRACTICE') {
        weight *= 1.2;
      }

      // 7. Filter by moods, environments, goals (softer penalties)
      let matchScore = 1.0;
      
      if (moods && moods.length > 0 && mission.moods) {
        const moodMatch = moods.some((mood: string) => mission.moods.includes(mood));
        if (moodMatch) {
          matchScore += 0.5; // Bonus for match
        } else {
          weight *= 0.7; // Light penalty if mood doesn't match
        }
      }

      if (environments && environments.length > 0 && mission.environments) {
        const envMatch = environments.some((env: string) => mission.environments.includes(env));
        if (envMatch) {
          matchScore += 0.3; // Bonus for match
        } else {
          weight *= 0.8; // Light penalty if environment doesn't match
        }
      }

      if (goals && goals.length > 0 && mission.goals) {
        const goalMatch = goals.some((goal: string) => mission.goals.includes(goal));
        if (goalMatch) {
          matchScore += 0.3; // Bonus for match
        } else {
          weight *= 0.8; // Light penalty if goal doesn't match
        }
      }

      weight *= matchScore;

      // 8. Random factor (0.8 ~ 1.2)
      weight *= (0.8 + Math.random() * 0.4);

      return {
        ...mission,
        weight: parseFloat(weight.toFixed(2))
      };
    });

    console.log(`[RECOMMENDED] Total weighted missions: ${weightedMissions.length}`);
    console.log(`[RECOMMENDED] Missions with weight > 0: ${weightedMissions.filter((m: any) => m.weight > 0).length}`);
    
    // Group missions by timeOfDay (가중치 0인 것도 포함)
    const missionsByTime: Record<string, any[]> = {
      morning: [],
      afternoon: [],
      evening: []
    };
    
    const allMissionsByTime: Record<string, any[]> = {
      morning: [],
      afternoon: [],
      evening: []
    };
    
    // Separate missions by timeOfDay
    weightedMissions.forEach((mission: any) => {
      const time = mission.timeOfDay;
      if (missionsByTime[time]) {
        allMissionsByTime[time].push(mission);
        // 가중치가 0보다 큰 것만 우선 리스트에 추가
        if (mission.weight > 0) {
          missionsByTime[time].push(mission);
        }
      }
    });
    
    console.log(`[RECOMMENDED] Missions by time - Morning: ${allMissionsByTime.morning.length} (weighted: ${missionsByTime.morning.length}), Afternoon: ${allMissionsByTime.afternoon.length} (weighted: ${missionsByTime.afternoon.length}), Evening: ${allMissionsByTime.evening.length} (weighted: ${missionsByTime.evening.length})`);
    
    // Sort each time group by weight (descending)
    Object.keys(missionsByTime).forEach((time: string) => {
      missionsByTime[time].sort((a: any, b: any) => b.weight - a.weight);
      // allMissionsByTime도 가중치 순서로 정렬 (가중치가 0인 것도 포함)
      allMissionsByTime[time].sort((a: any, b: any) => b.weight - a.weight);
    });
    
    // Select missions: 각 시간대별로 무조건 3개씩 보장
    const selectedMissions: any[] = [];
    const requiredPerTime = 3;
    
    ['morning', 'afternoon', 'evening'].forEach((time: string) => {
      const weightedMissions = missionsByTime[time];
      const allTimeMissions = allMissionsByTime[time];
      
      if (allTimeMissions.length === 0) {
        console.log(`[RECOMMENDED] ⚠ No missions available for ${time}`);
        return;
      }
      
      // 가중치가 높은 순서로 최대 3개 선택 (가중치 0인 것도 포함)
      // allTimeMissions를 사용하여 가중치가 0인 미션도 선택 가능하도록 함
      let timeSelected = allTimeMissions.slice(0, requiredPerTime);
      
      // 가중치가 높은 미션이 3개 이상이면 그것만 사용
      if (weightedMissions.length >= requiredPerTime) {
        timeSelected = weightedMissions.slice(0, requiredPerTime);
        console.log(`[RECOMMENDED] ${time}: ${timeSelected.length} weighted missions selected`);
      } else if (weightedMissions.length > 0) {
        // 가중치가 높은 미션이 부족하면 가중치가 낮은 것도 포함
        const needed = requiredPerTime - weightedMissions.length;
        const lowWeightMissions = allTimeMissions
          .filter((m: any) => !weightedMissions.some((wm: any) => wm.id === m.id))
          .slice(0, needed);
        timeSelected = [...weightedMissions, ...lowWeightMissions].slice(0, requiredPerTime);
        console.log(`[RECOMMENDED] ${time}: ${weightedMissions.length} weighted + ${lowWeightMissions.length} low-weight = ${timeSelected.length} total`);
      } else {
        // 가중치가 높은 미션이 없으면 모든 미션 중에서 랜덤으로 선택
        const shuffled = [...allTimeMissions].sort(() => Math.random() - 0.5);
        timeSelected = shuffled.slice(0, Math.min(requiredPerTime, shuffled.length));
        console.log(`[RECOMMENDED] ${time}: ${timeSelected.length} random missions selected (no weighted missions)`);
      }
      
      selectedMissions.push(...timeSelected);
    });
    
    // 최종 결과: 각 시간대별로 정확히 3개씩 (총 9개)
    const finalMissions = selectedMissions.slice(0, 9);
    
    console.log(`[RECOMMENDED] Selected missions before final slice: ${selectedMissions.length}`);
    console.log(`[RECOMMENDED] ✓ Returning ${finalMissions.length} recommended missions (target: 9)`);
    console.log(`[RECOMMENDED] Sample mission IDs in response:`, finalMissions.slice(0, 3).map((m: any) => ({ id: m.id, title: m.title, timeOfDay: m.timeOfDay })));
    
    // Log distribution by timeOfDay
    const morningCount = finalMissions.filter((m: any) => m.timeOfDay === 'morning').length;
    const afternoonCount = finalMissions.filter((m: any) => m.timeOfDay === 'afternoon').length;
    const eveningCount = finalMissions.filter((m: any) => m.timeOfDay === 'evening').length;
    console.log(`[RECOMMENDED] Time distribution - Morning: ${morningCount}, Afternoon: ${afternoonCount}, Evening: ${eveningCount}`);
    
    if (finalMissions.length < 9) {
      console.log(`[RECOMMENDED] ⚠ WARNING: Only ${finalMissions.length} missions returned, expected 9!`);
      console.log(`[RECOMMENDED] Selected missions by time:`, {
        morning: selectedMissions.filter((m: any) => m.timeOfDay === 'morning').length,
        afternoon: selectedMissions.filter((m: any) => m.timeOfDay === 'afternoon').length,
        evening: selectedMissions.filter((m: any) => m.timeOfDay === 'evening').length
      });
    }

    return c.json({ success: true, missions: finalMissions });
  } catch (error) {
    console.log(`[RECOMMENDED] ✗ Server error: ${error.message}`);
    console.log(`[RECOMMENDED] Error stack:`, error.stack);
    return c.json({ error: error.message }, 500);
  }
});

// Set active missions for user
app.post('/make-server-30914540/missions/active', async (c) => {
  try {
    console.log('[ACTIVE_MISSIONS] POST request received');
    
    const customToken = c.req.header('X-User-Token');
    console.log('[ACTIVE_MISSIONS] X-User-Token header:', customToken ? 'PRESENT' : 'MISSING');
    
    if (!customToken) {
      console.log('[ACTIVE_MISSIONS] ✗ No X-User-Token header found');
      return c.json({ error: 'User token required' }, 401);
    }

    const userId = verifyToken(customToken);
    console.log('[ACTIVE_MISSIONS] Token verification result:', userId ? userId : 'INVALID');
    
    if (!userId) {
      console.log('[ACTIVE_MISSIONS] ✗ Invalid token');
      return c.json({ error: 'Unauthorized - invalid token' }, 401);
    }

    const { missions } = await c.req.json();
    console.log(`[ACTIVE_MISSIONS] Setting active missions for user ${userId}:`, missions?.length || 0);

    // Save active missions to user's data
    const userKey = `user:${userId}`;
    const userData = await kv.get(userKey);
    
    if (!userData) {
      console.log(`[ACTIVE_MISSIONS] ✗ User data not found for userId: ${userId}`);
      return c.json({ error: 'User data not found' }, 404);
    }
    
    userData.activeMissions = missions;
    await kv.set(userKey, userData);

    console.log(`[ACTIVE_MISSIONS] ✓ Saved ${missions?.length || 0} active missions`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`[ACTIVE_MISSIONS] ✗ Error saving: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

// Get active missions for user
app.get('/make-server-30914540/missions/active', async (c) => {
  try {
    console.log('[ACTIVE_MISSIONS] GET request received');
    
    const customToken = c.req.header('X-User-Token');
    console.log('[ACTIVE_MISSIONS] X-User-Token header:', customToken ? 'PRESENT' : 'MISSING');
    
    if (!customToken) {
      console.log('[ACTIVE_MISSIONS] ✗ No X-User-Token header found');
      return c.json({ error: 'User token required' }, 401);
    }

    const userId = verifyToken(customToken);
    console.log('[ACTIVE_MISSIONS] Token verification result:', userId ? userId : 'INVALID');
    
    if (!userId) {
      console.log('[ACTIVE_MISSIONS] ✗ Invalid token');
      return c.json({ error: 'Unauthorized - invalid token' }, 401);
    }

    console.log(`[ACTIVE_MISSIONS] Getting active missions for user ${userId}`);

    const userKey = `user:${userId}`;
    const userData = await kv.get(userKey);
    
    if (!userData) {
      console.log(`[ACTIVE_MISSIONS] ✗ User data not found for userId: ${userId}`);
      return c.json({ error: 'User data not found' }, 404);
    }
    
    const activeMissions = userData.activeMissions || [];

    console.log(`[ACTIVE_MISSIONS] ✓ Retrieved ${activeMissions.length} active missions`);
    return c.json({ success: true, missions: activeMissions });
  } catch (error) {
    console.log(`[ACTIVE_MISSIONS] ✗ Error retrieving: ${error.message}`);
    return c.json({ error: error.message }, 500);
  }
});

Deno.serve(app.fetch);