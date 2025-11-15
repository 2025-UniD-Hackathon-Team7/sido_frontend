import { useState } from 'react';
import { ArrowLeft, MapPin, Heart } from 'lucide-react';

interface SidoMapScreenProps {
  onBack: () => void;
}

interface KindnessActivity {
  id: string;
  location: { x: number; y: number };
  count: number;
  area: string;
}

export function SidoMapScreen({ onBack }: SidoMapScreenProps) {
  const [selectedArea, setSelectedArea] = useState<KindnessActivity | null>(null);

  // Mock data for kindness activity hotspots
  const activities: KindnessActivity[] = [
    { id: '1', location: { x: 30, y: 25 }, count: 45, area: '강남구' },
    { id: '2', location: { x: 50, y: 40 }, count: 32, area: '서초구' },
    { id: '3', location: { x: 70, y: 30 }, count: 58, area: '송파구' },
    { id: '4', location: { x: 45, y: 60 }, count: 28, area: '관악구' },
    { id: '5', location: { x: 60, y: 70 }, count: 41, area: '동작구' },
    { id: '6', location: { x: 35, y: 50 }, count: 36, area: '용산구' },
    { id: '7', location: { x: 55, y: 20 }, count: 52, area: '성동구' },
    { id: '8', location: { x: 25, y: 45 }, count: 25, area: '마포구' },
  ];

  const getActivitySize = (count: number) => {
    if (count > 50) return { size: 40, opacity: 1 };
    if (count > 35) return { size: 32, opacity: 0.8 };
    return { size: 24, opacity: 0.6 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sido-warm-50 to-sido-green-50 pb-20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h3 className="text-gray-800">SIDO 지도</h3>
            <p className="text-sm text-gray-500">Kindness Activity Map</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pt-6 pb-4">
        <div className="bg-gradient-to-r from-sido-green-100 to-sido-sky rounded-2xl p-4 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-sido-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700 mb-1">
              오늘 하루 동안 여러 지역에서 친절 미션이 완료되었어요!
            </p>
            <p className="text-xs text-gray-600">
              빛나는 지점을 탭하면 자세한 정보를 볼 수 있어요
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 shadow-sido-card text-center">
            <p className="text-2xl text-sido-green-600 mb-1">328</p>
            <p className="text-xs text-gray-600">오늘의 미션</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sido-card text-center">
            <p className="text-2xl text-sido-green-600 mb-1">8</p>
            <p className="text-xs text-gray-600">활동 지역</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sido-card text-center">
            <p className="text-2xl text-sido-green-600 mb-1">1.2K</p>
            <p className="text-xs text-gray-600">참여자</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="px-6">
        <div className="bg-white rounded-3xl p-6 shadow-sido-soft">
          <div className="relative w-full aspect-square bg-gradient-to-br from-sido-green-50 to-sido-sky rounded-2xl overflow-hidden">
            {/* Abstract map background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              {/* Abstract road/path lines */}
              <path d="M 0 30 Q 30 25, 50 30 T 100 30" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
              <path d="M 20 0 Q 20 30, 25 50 T 30 100" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
              <path d="M 0 60 Q 40 55, 60 60 T 100 65" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
              <path d="M 60 0 Q 65 40, 70 60 T 75 100" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
              
              {/* Area shapes */}
              <circle cx="30" cy="25" r="15" fill="#e0f2fe" opacity="0.3" />
              <circle cx="70" cy="30" r="18" fill="#bbf7d0" opacity="0.3" />
              <circle cx="50" cy="60" r="20" fill="#fef3c7" opacity="0.3" />
            </svg>

            {/* Kindness activity points */}
            {activities.map((activity) => {
              const { size, opacity } = getActivitySize(activity.count);
              
              return (
                <button
                  key={activity.id}
                  onClick={() => setSelectedArea(activity)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                  style={{
                    left: `${activity.location.x}%`,
                    top: `${activity.location.y}%`,
                  }}
                >
                  {/* Pulsing glow */}
                  <div 
                    className="absolute inset-0 rounded-full bg-sido-green-400 animate-ping"
                    style={{ 
                      width: `${size}px`, 
                      height: `${size}px`,
                      opacity: opacity * 0.4,
                    }}
                  />
                  
                  {/* Main light */}
                  <div 
                    className="relative rounded-full bg-gradient-to-br from-sido-green-300 to-sido-green-500 shadow-lg flex items-center justify-center"
                    style={{ 
                      width: `${size}px`, 
                      height: `${size}px`,
                      opacity,
                      boxShadow: `0 0 ${size/2}px ${size/4}px rgba(74, 222, 128, 0.3)`,
                    }}
                  >
                    <Heart className="text-white" style={{ width: `${size/2}px`, height: `${size/2}px` }} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sido-green-500" />
              <span>활발</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sido-green-400 opacity-70" />
              <span>보통</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sido-green-300 opacity-50" />
              <span>적음</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular areas */}
      <div className="px-6 mt-6">
        <h4 className="mb-3 text-gray-700">🔥 활발한 지역 TOP 3</h4>
        <div className="space-y-2">
          {activities
            .sort((a, b) => b.count - a.count)
            .slice(0, 3)
            .map((activity, index) => (
              <div key={activity.id} className="bg-white rounded-xl p-4 shadow-sido-card flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-sido-yellow' : index === 1 ? 'bg-gray-200' : 'bg-sido-peach'
                }`}>
                  <span className="font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{activity.area}</p>
                  <p className="text-sm text-gray-500">오늘 {activity.count}개 미션 완료</p>
                </div>
                <Heart className="w-5 h-5 text-sido-green-500" />
              </div>
            ))}
        </div>
      </div>

      {/* Area detail modal */}
      {selectedArea && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setSelectedArea(null)}
        >
          <div 
            className="bg-white rounded-t-3xl p-6 w-full max-w-lg shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">📍</div>
              <h3 className="text-gray-800 mb-2">{selectedArea.area}</h3>
              <p className="text-gray-500">오늘의 친절 활동</p>
            </div>

            <div className="bg-sido-green-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">완료된 미션</span>
                <span className="text-2xl text-sido-green-600">{selectedArea.count}개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">획득한 SEED</span>
                <span className="text-sido-green-600">🌱 {selectedArea.count * 8}</span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mb-6">
              이 지역에서 많은 분들이 작은 친절을 실천하고 있어요 💚
            </p>

            <button
              onClick={() => setSelectedArea(null)}
              className="w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-full h-12 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
