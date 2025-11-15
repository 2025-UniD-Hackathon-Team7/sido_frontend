import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import RankingIcon from '../imports/Icon';
import { GoldTrophy } from './GoldTrophy';
import { SilverTrophy } from './SilverTrophy';
import { BronzeTrophy } from './BronzeTrophy';
import { getRanking } from '../utils/supabase/client';

interface RankingScreenProps {
  onBack: () => void;
  currentUserSeeds: number;
  currentUserRank: number;
  currentUserId?: string;
}

interface RankingUser {
  rank: number;
  id: string;
  nickname: string;
  seeds: number;
  level: number;
  donatedTreesCount: number;
}

export function RankingScreen({ onBack, currentUserSeeds, currentUserRank, currentUserId }: RankingScreenProps) {
  const [rankings, setRankings] = useState<RankingUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const data = await getRanking();
        setRankings(data);
      } catch (error) {
        console.error('Failed to fetch ranking:', error);
        // Use fallback data if API fails
        setRankings([
          { rank: 1, id: '1', nickname: '선명아옹', seeds: 3420, level: 8, donatedTreesCount: 12 },
          { rank: 2, id: '2', nickname: '띠주띠아옹', seeds: 3180, level: 7, donatedTreesCount: 10 },
          { rank: 3, id: '3', nickname: '착한친구', seeds: 2850, level: 7, donatedTreesCount: 9 },
          { rank: 4, id: '4', nickname: '진짱', seeds: 2780, level: 8, donatedTreesCount: 8 },
          { rank: 5, id: '5', nickname: '미소천사', seeds: 2650, level: 6, donatedTreesCount: 7 },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, []);

  // Emoji mapping based on rank
  const getEmojiForRank = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '🌱';
  };

  // Color mapping for top 3
  const getColorForRank = (rank: number) => {
    if (rank === 1) return 'bg-[#FFF9E6]';
    if (rank === 2) return 'bg-[#FFF0F5]';
    if (rank === 3) return 'bg-[#FFE8E0]';
    return 'bg-white';
  };

  return (
    <div className="min-h-screen bg-[#FEFDFB] pb-24">
      {/* Header */}
      <div className="relative bg-sido-green-500 px-6 pt-6 pb-20 mb-[-35px]">
        <button onClick={onBack} className="mb-6 p-2 bg-sido-green-600 hover:bg-sido-green-700 rounded-2xl transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 text-white mb-2">
          <div className="w-8 h-8">
            <RankingIcon />
          </div>
          <h1 className="text-white">랭킹</h1>
        </div>
        <p className="text-white/90 text-sm">이번 달 선행 랭킹을 확인하세요</p>
      </div>

      {/* Current User Card - Overlapping with header */}
      <div className="px-6 mb-6 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sido-green-500 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-600">내 순위</span>
                  <span className="text-sido-green-600 font-semibold">{currentUserRank}위</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-sido-green-600" />
                  <span className="text-xs text-gray-500">누적 SEED</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-semibold text-sido-green-600">{currentUserSeeds}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="px-6 space-y-3">
        {isLoading ? (
          <div className="text-center py-8 text-gray-500">랭킹을 불러오는 중...</div>
        ) : rankings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">아직 랭킹 데이터가 없습니다.</div>
        ) : (
          rankings.map((user) => {
            const isCurrentUser = currentUserId && user.id === currentUserId;
            const emoji = getEmojiForRank(user.rank);
            const color = getColorForRank(user.rank);
            
            return (
              <div
                key={user.id}
                className={`${color} ${isCurrentUser ? 'ring-2 ring-sido-green-500' : ''} rounded-2xl p-4 shadow-sm transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 flex justify-center items-center">
                      {user.rank === 1 ? (
                        <GoldTrophy />
                      ) : user.rank === 2 ? (
                        <SilverTrophy />
                      ) : user.rank === 3 ? (
                        <BronzeTrophy />
                      ) : (
                        <span className="text-gray-600 font-semibold">{user.rank}</span>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-2xl">{emoji}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800">
                          {user.nickname}
                          {isCurrentUser && <span className="text-xs text-sido-green-600 ml-1">(나)</span>}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          Lv.{user.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-sido-green-600" />
                        <span className="text-sm text-sido-green-600 font-semibold">
                          {user.seeds.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Info Banner */}
      <div className="px-6 mt-6">
        <div className="bg-sido-green-100 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sido-green-500 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">ℹ️</span>
            </div>
            <div>
              <p className="text-sido-green-900 text-sm font-semibold mb-1">랭킹 업데이트 안내</p>
              <p className="text-sido-green-700 text-xs">
                랭킹은 매일 자정에 업데이트되며,<br />
                이번 달 누적 SEED 기준으로 산정됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}