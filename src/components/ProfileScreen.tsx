import { ArrowLeft, Leaf, Settings, Award, Heart, Share2, Bell } from 'lucide-react';
import { Button } from './ui/button';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-sido-warm-50 pb-24">
      {/* Header */}
      <div className="bg-sido-green-500 text-white px-6 pt-6 pb-12">
        <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-colors mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Profile info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Leaf className="w-10 h-10 text-sido-green-600" />
          </div>
          <div>
            <h3 className="mb-1">친절한 시도러</h3>
            <p className="text-sido-green-50 text-sm">Level 3 🌱</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">12</p>
            <p className="text-xs text-sido-green-50">완료 미션</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">5</p>
            <p className="text-xs text-sido-green-50">기부한 나무</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <p className="text-2xl mb-1">7</p>
            <p className="text-xs text-sido-green-50">연속 참여</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6">
        {/* Achievements */}
        <div className="bg-white rounded-2xl p-5 shadow-sido-card mb-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-gray-800">내 배지</h4>
            <Award className="w-5 h-5 text-sido-green-600" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {['🌱', '🌿', '🌳', '🎖️'].map((emoji, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center text-3xl ${
                  i < 2 ? 'bg-sido-green-50' : 'bg-gray-100 opacity-40'
                }`}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-2xl p-5 shadow-sido-card mb-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-gray-800">최근 활동</h4>
            <Heart className="w-5 h-5 text-sido-green-600" />
          </div>
          <div className="space-y-3">
            {[
              { emoji: '🌳', text: '나무를 숲에 기부했어요', date: '2일 전' },
              { emoji: '💬', text: '동료에게 칭찬하기 완료', date: '3일 전' },
              { emoji: '🚶', text: '계단 이용하기 완료', date: '3일 전' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-full bg-sido-green-50 flex items-center justify-center text-xl">
                  {activity.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-2">
          <button className="w-full bg-white rounded-xl p-4 shadow-sido-card flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">설정</span>
            </div>
          </button>
          
          <button className="w-full bg-white rounded-xl p-4 shadow-sido-card flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">알림 설정</span>
            </div>
          </button>

          <button className="w-full bg-white rounded-xl p-4 shadow-sido-card flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">친구 초대하기</span>
            </div>
          </button>
        </div>

        {/* App info */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>SIDO v1.0.0</p>
          <p className="mt-1">작은 시도로 만드는 변화</p>
        </div>
      </div>
    </div>
  );
}