import { useState } from 'react';
import { Leaf, ChevronRight, Plus, Sprout } from 'lucide-react';
import { PlantIllustration } from './PlantIllustration';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import AfternoonIcon from '../imports/Icon-66-406';
import { TreeType } from './TreeSelectionModal';

export interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  emoji: string;
  xp?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
}

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onMissionComplete: (mission: Mission) => void;
  onCreateMission: () => void;
  myMissions: Mission[];
  onAbandonMission: (missionId: string) => void;
  currentTree: TreeType | null;
  seeds: number;
  onPlantTree: () => void;
  level: number;
  onViewMissionDetail: (mission: Mission) => void;
}

export function HomeScreen({ 
  onNavigate, 
  onMissionComplete, 
  onCreateMission, 
  myMissions, 
  onAbandonMission,
  currentTree,
  seeds,
  onPlantTree,
  level,
  onViewMissionDetail,
}: HomeScreenProps) {
  // Calculate plant stage based on seeds (10-100 range for tree growth)
  const getPlantStage = (): 'empty' | 'seed' | 'sprout' | 'small' | 'medium' | 'grown' => {
    if (!currentTree) return 'empty';
    if (seeds < 10) return 'seed';
    if (seeds < 30) return 'sprout';
    if (seeds < 60) return 'small';
    if (seeds < 90) return 'medium';
    return 'grown';
  };

  const plantStage = getPlantStage();
  const progress = currentTree ? Math.min(100, (seeds / currentTree.requiredSeeds) * 100) : 0;
  const isTreeFullyGrown = currentTree && seeds >= currentTree.requiredSeeds;

  // Only show incomplete missions
  const activeMissions = myMissions.filter(m => !m.completed);

  const getTimeTagStyle = (timeOfDay: string | undefined) => {
    switch (timeOfDay) {
      case 'morning':
        return { text: '☀️ 아침', bg: 'bg-blue-50', color: 'text-blue-600', showIcon: false };
      case 'afternoon':
        return { text: '점심', bg: 'bg-green-50', color: 'text-green-600', showIcon: true };
      case 'evening':
        return { text: '🌙 저녁', bg: 'bg-purple-50', color: 'text-purple-600', showIcon: false };
      default:
        return { text: '미션', bg: 'bg-gray-50', color: 'text-gray-600', showIcon: false };
    }
  };

  return (
    <div className="min-h-screen bg-sido-warm-50 pb-24">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-sido-green-600" />
            <h3 className="text-sido-green-600">SIDO</h3>
          </div>
          <div>
            <span className="text-sm text-gray-800">Lv. {level}</span>
          </div>
        </div>

        {/* Seed count */}
        <div className="bg-white rounded-2xl p-4 shadow-sido-card mb-4 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">내 SEED</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="text-3xl text-sido-green-600">{seeds}</span>
            </div>
          </div>
          {currentTree && (
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">목표</p>
              <p className="text-sm text-sido-green-600">{currentTree.requiredSeeds} SEED</p>
            </div>
          )}
        </div>
      </div>

      {/* Plant section */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-b from-white to-sido-green-50 rounded-3xl p-6 shadow-sido-soft relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-30">
            <Leaf className="w-8 h-8 text-sido-green-400" />
          </div>
          <div className="absolute bottom-6 left-6 opacity-20">
            <Leaf className="w-6 h-6 text-sido-green-400" />
          </div>
          
          {/* Progress info */}
          <div className="text-center mb-4">
            {currentTree ? (
              <>
                <p className="text-gray-600 mb-1">{currentTree.name} 키우는 중</p>
                <p className="text-sido-green-600">{currentTree.emoji}</p>
              </>
            ) : (
              <p className="text-gray-500">아직 나무가 없어요</p>
            )}
          </div>

          {/* Plant illustration */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-sido-green-100 opacity-50 blur-2xl" />
            </div>
            <PlantIllustration stage={plantStage} size={280} treeEmoji={currentTree?.emoji} treeType={currentTree} seeds={seeds} />
          </div>

          {currentTree ? (
            <>
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">성장률</span>
                  <span className="text-sido-green-600">{progress.toFixed(0)}%</span>
                </div>
                <Progress value={progress} className="h-3 bg-sido-green-100">
                  <div 
                    className="h-full bg-gradient-to-r from-sido-green-400 to-sido-green-600 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </Progress>
                <p className="text-xs text-gray-500 text-center">
                  {seeds} / {currentTree.requiredSeeds} SEED
                </p>
              </div>

              {/* Grown tree action */}
              {isTreeFullyGrown && (
                <button
                  onClick={() => onNavigate('myfield')}
                  className="mt-4 w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl py-3 transition-colors"
                >
                  🎉 나무가 다 자랐어요! 기부하러 가기
                </button>
              )}
            </>
          ) : (
            // No tree - Plant button
            <div className="text-center">
              <Button
                onClick={onPlantTree}
                className="bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl h-12 px-8 gap-2"
              >
                <Sprout className="w-5 h-5" />
                나무 심기
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                원하는 나무를 선택해서 키워보세요
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Today's missions */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">오늘의 미션</h3>
          <span className="text-sm text-gray-500">
            {activeMissions.length}개 남음
          </span>
        </div>

        {activeMissions.length === 0 ? (
          // Empty state - Create mission button
          <div className="bg-white rounded-2xl p-8 shadow-sido-card text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-gray-800 mb-2">오늘의 미션을 만들어보세요</h4>
            <p className="text-sm text-gray-500 mb-6">
              나만의 맞춤형 친절 미션으로<br />
              하루를 시작해보세요
            </p>
            <Button
              onClick={onCreateMission}
              className="bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl h-12 px-6 gap-2"
            >
              <Plus className="w-5 h-5" />
              미션 생성하기
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {activeMissions.map((mission) => {
              const timeTag = getTimeTagStyle(mission.timeOfDay);

              return (
                <button
                  key={mission.id}
                  onClick={() => onViewMissionDetail(mission)}
                  className="w-full bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 text-left transition-all hover:border-sido-green-400"
                >
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1.5 ${timeTag.bg} ${timeTag.color}`}>
                      {timeTag.showIcon ? (
                        <div className="w-3.5 h-3.5">
                          <AfternoonIcon />
                        </div>
                      ) : null}
                      {timeTag.text}
                    </span>
                    <ChevronRight className="w-6 h-6 text-neutral-400" />
                  </div>

                  {/* Title and description */}
                  <h4 className="text-neutral-900 mb-2">{mission.title}</h4>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {mission.description}
                  </p>

                  {/* Bottom section */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    {/* Progress bar */}
                    <div className="flex gap-2">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-12 h-2 rounded-full ${
                            level <= ((mission.difficulty === 'easy' ? 1 : mission.difficulty === 'medium' ? 2 : 3) || 1)
                              ? 'bg-sido-green-500'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Rewards */}
                    <div className="flex items-center gap-2">
                      <div className="bg-[#FFF8E1] rounded-full px-2.5 py-1.5">
                        <span className="text-[#F57C00] text-xs">+{mission.reward} 🌱</span>
                      </div>
                      {mission.xp && (
                        <div className="bg-[#F3E5F5] rounded-full px-2.5 py-1.5">
                          <span className="text-[#7B1FA2] text-xs">+{mission.xp} XP</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-8" />
    </div>
  );
}