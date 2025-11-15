import { useState } from 'react';
import { Leaf, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { login, signup } from '../utils/supabase/client';
import { toast } from 'sonner@2.0.3';
import logoImage from 'figma:asset/1f49c02ffce451fc6d7bfe3b1bf43f700238b869.png';

interface LoginScreenProps {
  onLogin: (userData: any) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignupMode) {
        // Sign up
        if (!nickname.trim()) {
          toast.error('닉네임을 입력해주세요.');
          setIsLoading(false);
          return;
        }
        console.log('[LOGIN_SCREEN] Starting signup...');
        const result = await signup(email, password, nickname);
        console.log('[LOGIN_SCREEN] Signup successful:', result);
        toast.success(`${result.user.nickname}님, 환영합니다! 회원가입이 완료되었습니다.`);
        // Auto-login after signup
        onLogin(result.user);
      } else {
        // Login
        console.log('[LOGIN_SCREEN] Starting login...');
        const result = await login(email, password);
        console.log('[LOGIN_SCREEN] Login successful:', result);
        toast.success(`${result.user.nickname}님, 환영합니다!`);
        onLogin(result.user);
      }
    } catch (error: any) {
      console.error('[LOGIN_SCREEN] Authentication error:', error);
      const errorMessage = error.message || '로그인에 실패했습니다.';
      console.error('[LOGIN_SCREEN] Error message:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would trigger OAuth flow
    toast.info('소셜 로그인은 곧 추가될 예정입니다.');
    console.log(`Login with ${provider}`);
  };

  const handleTestLogin = async () => {
    setIsLoading(true);
    try {
      console.log('[LOGIN_SCREEN] Using test account credentials');
      
      // First try to login with test account
      try {
        const result = await login('test@sido.com', 'test1234');
        console.log('[LOGIN_SCREEN] Test login successful');
        toast.success('테스트 계정으로 로그인했습니다!');
        onLogin(result.user);
      } catch (loginError) {
        // If login fails, create the test account
        console.log('[LOGIN_SCREEN] Test account not found, creating...');
        const result = await signup('test@sido.com', 'test1234', '시도 테스터');
        console.log('[LOGIN_SCREEN] Test account created and logged in');
        toast.success('테스트 계정을 생성했습니다!');
        onLogin(result.user);
      }
    } catch (error: any) {
      console.error('[LOGIN_SCREEN] Test login error:', error);
      toast.error('테스트 계정 로그인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sido-warm-50 flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-8 opacity-10">
        <Leaf className="w-24 h-24 text-sido-green-400 animate-float" />
      </div>
      <div className="absolute top-40 right-12 opacity-10">
        <Leaf className="w-16 h-16 text-sido-green-300 animate-float-delayed" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10">
        <Leaf className="w-20 h-20 text-sido-green-400 animate-float-slow" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 relative z-10">
        {/* Logo section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={logoImage} alt="SIDO Logo" className="w-20 h-20 object-contain" />
              </div>
            </div>
          </div>
          <h1 className="text-sido-green-600 mb-2">SIDO</h1>
          <p className="text-gray-600">작은 시도로 변하는 도시</p>
        </div>

        {/* Login form */}
        <div className="max-w-sm w-full mx-auto">
          <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
            {/* Nickname input (signup only) */}
            {isSignupMode && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-white rounded-2xl border-gray-200 focus:border-sido-green-400 focus:ring-sido-green-400"
                  required
                />
              </div>
            )}

            {/* Email input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-white rounded-2xl border-gray-200 focus:border-sido-green-400 focus:ring-sido-green-400"
                required
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 pl-12 pr-12 bg-white rounded-2xl border-gray-200 focus:border-sido-green-400 focus:ring-sido-green-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Forgot password (login only) */}
            {!isSignupMode && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-sido-green-600 transition-colors"
                >
                  비밀번호를 잊으셨나요?
                </button>
              </div>
            )}

            {/* Login/Signup button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl disabled:opacity-50"
            >
              {isLoading ? '처리 중...' : (isSignupMode ? '회원가입' : '로그인')}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">또는</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social login buttons */}
          <div className="space-y-3 mb-8">
            {/* Kakao */}
            <button
              onClick={() => handleSocialLogin('kakao')}
              className="w-full h-14 bg-[#FEE500] hover:bg-[#FDD835] text-[#000000] rounded-2xl flex items-center justify-center gap-3 transition-colors"
            >
              <div className="w-6 h-6 bg-[#000000] rounded-full flex items-center justify-center">
                <span className="text-[#FEE500] text-xs">💬</span>
              </div>
              <span>카카오로 계속하기</span>
            </button>

            {/* Google */}
            <button
              onClick={() => handleSocialLogin('google')}
              className="w-full h-14 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center gap-3 border border-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google로 계속하기</span>
            </button>

            {/* Apple */}
            <button
              onClick={() => handleSocialLogin('apple')}
              className="w-full h-14 bg-black hover:bg-gray-900 text-white rounded-2xl flex items-center justify-center gap-3 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Apple로 계속하기</span>
            </button>
          </div>

          {/* Test Login Button (Development) */}
          <div className="text-center mb-4">
            <button
              type="button"
              onClick={handleTestLogin}
              disabled={isLoading}
              className="text-sm text-gray-400 hover:text-sido-green-600 transition-colors disabled:opacity-50"
            >
              🧪 테스트 계정으로 로그인
            </button>
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-gray-600">
              {isSignupMode ? '이미 회원이신가요?' : '아직 회원이 아니신가요?'}{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSignupMode(!isSignupMode);
                  setPassword('');
                  setNickname('');
                }}
                className="text-sido-green-600 hover:text-sido-green-700 transition-colors"
              >
                {isSignupMode ? '로그인' : '회원가입'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 text-sm text-gray-400">
        <p>작은 친절이 세상을 바꿉니다</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite 1.5s;
        }
        .animate-float-slow {
          animation: float 5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
}