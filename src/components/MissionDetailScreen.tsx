import { ArrowLeft, Info, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import AfternoonIcon from '../imports/Icon-66-406';
import RewardContainer from '../imports/Container-66-484';

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  xp: number;
  difficulty: 'easy' | 'medium' | 'hard';
  emoji: string;
  category?: string;
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
}

interface MissionDetailScreenProps {
  mission: Mission;
  onBack: () => void;
  onAddMission?: () => void;
  onComplete?: () => void;
  onAbandon?: (missionId: string) => void;
}

export function MissionDetailScreen({ mission, onBack, onAddMission, onComplete, onAbandon }: MissionDetailScreenProps) {
  const guides = [
    { title: '상황 찾기', desc: '자연스러운 타이밍을 찾아보세요' },
    { title: '미션 실천', desc: '진심을 담아 행동으로 옮기기' },
    { title: '완료 확인', desc: '미션 완료 버튼을 눌러주세요' },
  ];

  const tip = '상대방이 거절해도 괜찮아요. 용기를 낸 당신이 이미 멋져요!';

  const difficultyInfo = {
    easy: { label: '쉬움', bars: 1 },
    medium: { label: '보통', bars: 2 },
    hard: { label: '어려움', bars: 3 },
  };

  const diff = difficultyInfo[mission.difficulty];

  const getTimeTagStyle = (timeOfDay: string | undefined) => {
    switch (timeOfDay) {
      case 'morning':
        return { text: '☀️ 아침', bg: 'bg-blue-50', color: 'text-blue-600', showIcon: false };
      case 'afternoon':
        return { text: '점심', bg: 'bg-green-50', color: 'text-green-600', showIcon: true };
      case 'evening':
        return { text: '🌙 저녁', bg: 'bg-purple-50', color: 'text-purple-600', showIcon: false };
      default:
        return null;
    }
  };

  const timeTag = getTimeTagStyle(mission.timeOfDay);
  const isFromHome = onComplete && onAbandon; // If these props exist, we're coming from home

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="px-6 pt-14 pb-6">
        <button onClick={onBack} className="mb-6 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-2xl transition-colors">
          <ArrowLeft className="w-5 h-5 text-neutral-700" />
        </button>

        {timeTag && (
          <div className="mb-4">
            <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1.5 inline-flex ${timeTag.bg} ${timeTag.color}`}>
              {timeTag.showIcon ? (
                <div className="w-3.5 h-3.5">
                  <AfternoonIcon />
                </div>
              ) : null}
              {timeTag.text}
            </span>
          </div>
        )}

        <h2 className="text-neutral-900 mb-3">{mission.title}</h2>
        <p className="text-neutral-600 leading-relaxed">
          {mission.description}
        </p>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4">
        {/* Reward section */}
        <div className="h-[165px]">
          <RewardContainer reward={mission.reward} xp={mission.xp} />
        </div>

        {/* Mission guide */}
        <div>
          <h4 className="text-neutral-900 mb-4">미션 가이드</h4>
          <div className="space-y-4">
            {guides.map((guide, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-2xl bg-sido-green-500 flex items-center justify-center text-white text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm text-neutral-900 mb-0.5">{guide.title}</p>
                  <p className="text-sm text-neutral-600">{guide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-neutral-900 mb-1">도움말</p>
            <p className="text-sm text-neutral-700">{tip}</p>
          </div>
        </div>

        {/* Difficulty */}
        <div className="bg-white rounded-2xl p-5 border border-neutral-200">
          <p className="text-sm text-neutral-600 mb-4">난이도</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-20 h-2 rounded-full ${
                    level <= diff.bars ? 'bg-sido-green-500' : 'bg-neutral-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600">{diff.label}</span>
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-20">
        <div className="max-w-lg mx-auto px-6 py-6">
          {isFromHome ? (
            // Home screen - show complete and abandon buttons
            <div className="flex gap-3">
              <button
                onClick={() => onAbandon && onAbandon(mission.id)}
                className="flex-shrink-0 bg-[#41655c] hover:bg-[#365249] text-white px-5 py-4 rounded-2xl transition-colors"
              >
                포기할래요
              </button>
              <button
                onClick={onComplete}
                className="flex-1 bg-sido-green-500 hover:bg-sido-green-600 text-white px-5 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                미션 완료하기
              </button>
            </div>
          ) : (
            // Recommendation screen - show add mission button
            <Button
              onClick={onAddMission}
              className="w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl h-14"
            >
              미션 수령하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}