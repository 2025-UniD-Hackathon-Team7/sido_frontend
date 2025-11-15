import { Settings, TrendingUp } from 'lucide-react';

interface SimpleHomeScreenProps {
  onNavigate: (screen: string) => void;
  seeds: number;
  level: number;
  xp: number;
  completedMissionsCount: number;
  donatedTreesCount: number;
  currentMonthSeeds: number;
  giftedSeeds: number;
  rank: number;
}

export function SimpleHomeScreen({
  onNavigate,
  seeds,
  level,
  xp,
  completedMissionsCount,
  donatedTreesCount,
  currentMonthSeeds,
  giftedSeeds,
  rank,
}: SimpleHomeScreenProps) {
  const maxXP = 100;
  const xpProgress = (xp / maxXP) * 100;

  return (
    <div className="min-h-screen bg-sido-green-500 pb-24">
      {/* Header Card */}
      <div className="px-6 pt-6 pb-8">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 relative">
          {/* Settings Icon */}
          <button 
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-colors"
            onClick={() => onNavigate('profile')}
          >
            <Settings className="w-5 h-5 text-white" />
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div>
              <h2 className="text-white mb-1">친절한 시도러</h2>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Level {level}</span>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-white text-xs mb-2">
              <span>경험 컬렉터</span>
              <span>{xp} / {maxXP} XP</span>
            </div>
            <div className="bg-white/20 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 grid grid-cols-2 gap-4 mb-6">
        {/* Total Seeds */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🌱</span>
            <span className="text-xs text-gray-600">보유 SEED</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{seeds}개</p>
        </div>

        {/* Gifted Seeds */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💝</span>
            <span className="text-xs text-gray-600">누 기부 SEED</span>
          </div>
          <p className="text-2xl font-semibold text-pink-500">{giftedSeeds}개</p>
        </div>

        {/* Completed Missions */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">✅</span>
            <span className="text-xs text-gray-600">완료한 미션</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{completedMissionsCount}개</p>
        </div>

        {/* Ranking */}
        <button
          onClick={() => onNavigate('ranking')}
          className="bg-white rounded-2xl p-5 text-left transition-all hover:scale-105"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🏆</span>
            <span className="text-xs text-gray-600">내 랭킹</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{rank}위</p>
        </button>
      </div>

      {/* Achievements Section */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">🔥 업적</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Achievement 1 */}
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs text-gray-700 font-semibold mb-1">첫 선행</p>
            <p className="text-[10px] text-gray-500">첫 미션 완료</p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs text-gray-700 font-semibold mb-1">연속 7일</p>
            <p className="text-[10px] text-gray-500">7일 연속 미션 완료</p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">🌳</div>
            <p className="text-xs text-gray-700 font-semibold mb-1">선행왕</p>
            <p className="text-[10px] text-gray-500">100개 미션 완료</p>
          </div>

          {/* Achievement 4 */}
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs text-gray-700 font-semibold mb-1">나눔의 달인</p>
            <p className="text-[10px] text-gray-500">1000 SEED 기부</p>
          </div>

          {/* Locked Achievement */}
          <div className="bg-gray-100 rounded-2xl p-4 text-center opacity-50">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs text-gray-500 font-semibold mb-1">연속 30일</p>
            <p className="text-[10px] text-gray-400">30일 미션 하나 남았어요!</p>
          </div>

          {/* Locked Achievement */}
          <div className="bg-gray-100 rounded-2xl p-4 text-center opacity-50">
            <div className="text-3xl mb-2">🌟</div>
            <p className="text-xs text-gray-500 font-semibold mb-1">슈퍼 10</p>
            <p className="text-[10px] text-gray-400">레벨 10 달성</p>
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="px-6 mt-6">
        <h3 className="text-white mb-4">이번 달 활동</h3>
        <div className="bg-white rounded-2xl p-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">완료한 미션</span>
              <span className="text-sido-green-600 font-semibold">{completedMissionsCount}개</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">획득한 SEED</span>
              <span className="text-yellow-600 font-semibold">+{currentMonthSeeds}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">기부한 SEED</span>
              <span className="text-blue-600 font-semibold">-{giftedSeeds}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 mt-6 text-center">
        <p className="text-white/80 text-xs mb-1">SIDO v1.0.0</p>
        <p className="text-white/60 text-xs">작은 시도로 만드는 변화</p>
      </div>
    </div>
  );
}