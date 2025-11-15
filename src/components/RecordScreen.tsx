import { ArrowLeft, Sprout } from 'lucide-react';

interface RecordScreenProps {
  onBack: () => void;
  activityHistory: ActivityRecord[];
}

export interface ActivityRecord {
  id: string;
  type: 'mission' | 'donation' | 'abandon';
  title: string;
  date: string;
  time: string;
  seeds: number;
  location?: string;
  emoji?: string;
}

export function RecordScreen({ onBack, activityHistory }: RecordScreenProps) {
  const stats = {
    completedMissions: activityHistory.filter(a => a.type === 'mission' && a.seeds > 0).length,
    donations: activityHistory.filter(a => a.type === 'donation').length,
    totalSeeds: activityHistory.reduce((sum, a) => sum + (a.seeds || 0), 0),
  };

  // Group by date
  const groupedByDate = activityHistory.reduce((groups, activity) => {
    const date = activity.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {} as Record<string, ActivityRecord[]>);

  const formatDate = (dateStr: string) => {
    const today = new Date();
    const activityDate = new Date(dateStr);
    const diffTime = today.getTime() - activityDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    return dateStr;
  };

  return (
    <div className="min-h-screen bg-sido-warm-50 pb-24">
      {/* Header */}
      <div className="bg-sido-green-500 text-white px-6 pt-6 pb-8">
        <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-colors mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="mb-2">활동 기록</h2>
        <p className="text-sido-green-50 text-sm">내가 만들어온 변화의 순간들</p>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sido-card">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl text-sido-green-600 mb-1">{stats.completedMissions}</p>
              <p className="text-xs text-gray-600">완료 미션</p>
            </div>
            <div className="text-center border-l border-r border-gray-100">
              <p className="text-2xl text-sido-green-600 mb-1">{stats.donations}</p>
              <p className="text-xs text-gray-600">기부 횟수</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-sido-green-600 mb-1">{stats.totalSeeds}</p>
              <p className="text-xs text-gray-600">획득 SEED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6">
        <h4 className="text-gray-700 mb-4">타임라인</h4>

        {Object.keys(groupedByDate).length === 0 ? (
          <div className="bg-white rounded-2xl p-8 shadow-sido-card text-center">
            <div className="text-5xl mb-4">📝</div>
            <p className="text-gray-500">아직 활동 기록이 없어요</p>
            <p className="text-sm text-gray-400 mt-2">미션을 완료하고 첫 기록을 만들어보세요!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedByDate).map(([date, activities]) => (
              <div key={date}>
                {/* Date header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-sido-green-400" />
                  <span className="text-sm text-gray-600">{formatDate(date)}</span>
                </div>

                {/* Activities */}
                <div className="space-y-2 ml-4 border-l-2 border-gray-100 pl-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {activity.type === 'mission' && activity.seeds > 0 && (
                            <span className="text-sm text-sido-green-600 bg-sido-green-50 px-2 py-0.5 rounded-full">
                              미션
                            </span>
                          )}
                          {activity.type === 'donation' && (
                            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                              기부
                            </span>
                          )}
                          {activity.type === 'abandon' && (
                            <span className="text-sm text-gray-600 bg-gray-50 px-2 py-0.5 rounded-full">
                              포기
                            </span>
                          )}
                          <span className="text-xs text-gray-400">{activity.time}</span>
                        </div>
                        {activity.seeds !== 0 && (
                          <div className={`flex items-center gap-1 ${activity.seeds > 0 ? 'text-sido-green-600' : 'text-red-500'}`}>
                            <Sprout className="w-4 h-4" />
                            <span className="text-sm">
                              {activity.seeds > 0 ? '+' : ''}{activity.seeds}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <p className="text-gray-800 mb-1">{activity.title}</p>
                          {activity.location && (
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <span>📍</span>
                              <span>{activity.location}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}