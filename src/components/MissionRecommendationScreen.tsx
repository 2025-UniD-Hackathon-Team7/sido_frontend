import { useState, useEffect } from 'react';
import { ArrowLeft, Sun, Sunset, Moon, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { SurveyData } from './MissionSurveyScreen';
import { getRecommendedMissions } from '../utils/supabase/client';
import { toast } from 'sonner@2.0.3';
import AfternoonIcon from '../imports/Icon-66-406';

interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number;
  xp: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  emoji: string;
  category: string;
}

interface MissionRecommendationScreenProps {
  surveyData: SurveyData;
  onComplete: (selectedMissions: Mission[]) => void;
  onBack: () => void;
  onViewDetail: (mission: Mission) => void;
}


export function MissionRecommendationScreen({
  surveyData,
  onComplete,
  onBack,
  onViewDetail,
}: MissionRecommendationScreenProps) {
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [selectedMissions, setSelectedMissions] = useState<Set<string>>(new Set());
  const [recommendedMissions, setRecommendedMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const timeOfDayOptions = [
    { value: 'morning' as const, label: '아침', icon: 'sun', emoji: '☀️' },
    { value: 'afternoon' as const, label: '점심', icon: 'afternoon', emoji: '🌤️' },
    { value: 'evening' as const, label: '저녁', icon: 'moon', emoji: '🌙' },
  ];

  // Map survey data to API parameters
  const getMoodsFromSurvey = (mood: string): string[] => {
    const moodMap: Record<string, string[]> = {
      'energetic': ['happy', 'energetic'],
      'tired': ['tired', 'calm'],
      'excited': ['happy', 'energetic', 'excited'],
      'anxious': ['anxious', 'stressed'],
      'stressed': ['stressed', 'anxious'],
    };
    return moodMap[mood] || ['neutral'];
  };

  const getEnvironmentsFromSurvey = (location: string): string[] => {
    const envMap: Record<string, string[]> = {
      'office': ['office', 'workplace', 'building'],
      'home': ['home', 'indoor'],
      'outdoor': ['outdoor', 'street', 'park'],
      'cafe': ['cafe', 'restaurant'],
      'travel': ['public_transport', 'commute', 'anywhere'],
    };
    return envMap[location] || ['anywhere'];
  };

  const getGoalsFromSurvey = (goal: string): string[] => {
    const goalMap: Record<string, string[]> = {
      'active': ['connection', 'interaction'],
      'peaceful': ['self_care', 'reflection'],
      'warm': ['connection', 'empathy', 'appreciation'],
      'productive': ['achievement', 'productivity'],
    };
    return goalMap[goal] || ['small_acts'];
  };

  // Load recommended missions
  useEffect(() => {
    const loadRecommendations = async () => {
      setIsLoading(true);
      try {
        console.log('[RECOMMENDATIONS] Loading with survey data:', surveyData);
        
        const moods = getMoodsFromSurvey(surveyData.mood);
        const environments = getEnvironmentsFromSurvey(surveyData.location);
        const goals = getGoalsFromSurvey(surveyData.goal);

        console.log('[RECOMMENDATIONS] API params:', { moods, environments, goals });

        const missions = await getRecommendedMissions(moods, environments, goals, 20);
        console.log('[RECOMMENDATIONS] Received missions:', missions);
        console.log('[RECOMMENDATIONS] Missions count:', missions?.length || 0);
        console.log('[RECOMMENDATIONS] Morning missions:', missions?.filter((m: any) => m.timeOfDay === 'morning').length || 0);
        console.log('[RECOMMENDATIONS] Afternoon missions:', missions?.filter((m: any) => m.timeOfDay === 'afternoon').length || 0);
        console.log('[RECOMMENDATIONS] Evening missions:', missions?.filter((m: any) => m.timeOfDay === 'evening').length || 0);
        
        // Use missions from server
        if (missions && missions.length > 0) {
          setRecommendedMissions(missions);
        } else {
          console.log('[RECOMMENDATIONS] No missions from server');
          setRecommendedMissions([]);
          toast.info('추천할 미션이 없습니다.');
        }
      } catch (error) {
        console.error('[RECOMMENDATIONS] Failed to load:', error);
        toast.error('미션을 불러오는데 실패했습니다.');
        setRecommendedMissions([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecommendations();
  }, [surveyData]);

  const filteredMissions = recommendedMissions.filter(m => m.timeOfDay === selectedTimeOfDay);

  const toggleMission = (missionId: string) => {
    const newSelected = new Set(selectedMissions);
    if (newSelected.has(missionId)) {
      newSelected.delete(missionId);
    } else {
      newSelected.add(missionId);
    }
    setSelectedMissions(newSelected);
  };

  const handleComplete = () => {
    const selected = recommendedMissions.filter(m => selectedMissions.has(m.id));
    onComplete(selected);
  };

  const getTimeTagStyle = (time: string) => {
    switch (time) {
      case '아침':
        return 'text-blue-600 bg-blue-50';
      case '점심':
        return 'text-green-600 bg-green-50';
      case '저녁':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      {/* Header */}
      <div className="px-8 pt-16 pb-6">
        <button onClick={onBack} className="mb-8 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-2xl transition-colors">
          <ArrowLeft className="w-5 h-5 text-neutral-700" />
        </button>
        <h1 className="text-neutral-900 mb-2">오늘의 미션</h1>
        <p className="text-gray-600">
          시간대별로 원하는 미션을 선택하세요
        </p>
      </div>

      {/* Time of day selector */}
      <div className="px-8 pb-6">
        <div className="bg-white rounded-3xl p-2 flex gap-2 shadow-sm border border-neutral-200">
          {timeOfDayOptions.map((option) => {
            return (
              <button
                key={option.value}
                onClick={() => setSelectedTimeOfDay(option.value)}
                className={`flex-1 py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  selectedTimeOfDay === option.value
                    ? 'bg-sido-green-500 text-white shadow-md'
                    : 'text-neutral-600'
                }`}
              >
                {option.icon === 'sun' && <Sun className="w-5 h-5" />}
                {option.icon === 'afternoon' && (
                  <div className="w-5 h-5">
                    <AfternoonIcon />
                  </div>
                )}
                {option.icon === 'moon' && <Moon className="w-5 h-5" />}
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mission list */}
      <div className="px-8 space-y-4 mb-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-sido-green-200 border-t-sido-green-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">맞춤 미션을 찾고 있어요...</p>
          </div>
        ) : filteredMissions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-2">이 시간대에 추천할 미션이 없어요</p>
            <p className="text-gray-400 text-sm">다른 시간대를 선택해보세요</p>
          </div>
        ) : (
          filteredMissions.map((mission) => {
          const isSelected = selectedMissions.has(mission.id);
          const timeLabel = timeOfDayOptions.find(opt => opt.value === mission.timeOfDay)?.label || '';

          return (
            <button
              key={mission.id}
              onClick={() => toggleMission(mission.id)}
              className={`w-full bg-white rounded-3xl p-6 shadow-sm border transition-all duration-300 text-left ${
                isSelected ? 'border-sido-green-500 ring-2 ring-sido-green-500' : 'border-neutral-200'
              }`}
            >
              {/* Content */}
              <div className="mb-6">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${getTimeTagStyle(timeLabel)}`}>
                    <span>{timeOfDayOptions.find(opt => opt.label === timeLabel)?.emoji}</span>
                    <span>{timeLabel}</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetail(mission);
                    }}
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Title and description */}
                <h4 className="text-neutral-900 mb-2">{mission.title}</h4>
                <p className="text-neutral-600 leading-relaxed">
                  {mission.description}
                </p>
              </div>

              {/* Bottom section */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                {/* Progress bar */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`w-12 h-2 rounded-full ${
                        level <= (mission.difficulty === 'easy' ? 1 : mission.difficulty === 'medium' ? 2 : 3)
                          ? 'bg-sido-green-500'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#FFF8E1] rounded-full px-2.5 py-1">
                    <span className="text-[#F57C00] text-xs font-medium">+{mission.reward} 🌱</span>
                  </div>
                  {mission.xp && (
                      <div className="bg-[#F3E5F5] rounded-full px-2.5 py-1">
                        <span className="text-[#7B1FA2] text-xs font-medium">+{mission.xp} XP</span>
                      </div>
                  )}
                </div>
              </div>
            </button>
          );
        })
        )}
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-20">
        <div className="max-w-lg mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">선택한 미션</span>
            <span className="text-sido-green-600">{selectedMissions.size}개</span>
          </div>
          <Button
            onClick={handleComplete}
            disabled={selectedMissions.size === 0}
            className="w-full bg-sido-green-500 hover:bg-sido-green-600 disabled:bg-gray-300 text-white rounded-2xl h-12"
          >
            미션 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}