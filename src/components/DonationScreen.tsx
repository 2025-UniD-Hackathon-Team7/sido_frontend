import { useState } from 'react';
import { ArrowLeft, Heart, TreePine, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface DonationScreenProps {
  onBack: () => void;
}

interface DonationProject {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ElementType;
  currentSeeds: number;
  goalSeeds: number;
  color: string;
}

export function DonationScreen({ onBack }: DonationScreenProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const projects: DonationProject[] = [
    {
      id: '1',
      title: '취약계층 급식 지원',
      organization: '사랑의 밥차',
      description: '따뜻한 식사로 이웃에게 희망을 전합니다',
      icon: Heart,
      currentSeeds: 450,
      goalSeeds: 1000,
      color: 'from-pink-100 to-pink-50',
    },
    {
      id: '2',
      title: '도시숲 조성 프로젝트',
      organization: '그린포레스트',
      description: '우리 동네에 작은 숲을 만들어요',
      icon: TreePine,
      currentSeeds: 720,
      goalSeeds: 1000,
      color: 'from-sido-green-100 to-sido-green-50',
    },
    {
      id: '3',
      title: '아동 교육 지원',
      organization: '미래를 키우는 손',
      description: '교육 기회가 필요한 아이들을 돕습니다',
      icon: Users,
      currentSeeds: 280,
      goalSeeds: 1000,
      color: 'from-blue-100 to-blue-50',
    },
  ];

  const handleDonate = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-sido-warm-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h3 className="text-gray-800">SEED 기부하기</h3>
            <p className="text-sm text-gray-500">내 SEED: 🌱 100</p>
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div className="px-6 pt-6 pb-4">
        <div className="bg-gradient-to-r from-sido-green-100 to-sido-sky rounded-2xl p-4">
          <p className="text-sm text-gray-700">
            💡 나무가 100% 자라면 기부할 수 있어요. SEED는 실제 기부금으로 전환됩니다.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="px-6">
        <h4 className="mb-4 text-gray-700">진행중인 프로젝트</h4>
        
        <div className="space-y-4">
          {projects.map((project) => {
            const Icon = project.icon;
            const progress = (project.currentSeeds / project.goalSeeds) * 100;
            const isSelected = selectedProject === project.id;

            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`w-full text-left transition-all duration-300 ${
                  isSelected ? 'scale-[1.02]' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-5 shadow-sido-card border-2 ${
                  isSelected ? 'border-sido-green-500' : 'border-transparent'
                }`}>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Icon className="w-6 h-6 text-sido-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.organization}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">달성률</span>
                      <span className="text-sido-green-600">
                        🌱 {project.currentSeeds} / {project.goalSeeds}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2 bg-white/60">
                      <div 
                        className="h-full bg-gradient-to-r from-sido-green-400 to-sido-green-600 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </Progress>
                    <p className="text-xs text-right text-gray-500">
                      {progress.toFixed(0)}% 달성
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Donate button */}
        <div className="mt-8">
          <Button
            onClick={handleDonate}
            disabled={!selectedProject}
            className="w-full bg-sido-green-500 hover:bg-sido-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full h-14 gap-2"
          >
            <Sparkles className="w-5 h-5" />
            나무 기부하기 (100 SEED)
          </Button>
          <p className="text-center text-sm text-gray-500 mt-3">
            프로젝트를 선택하고 기부해주세요
          </p>
        </div>
      </div>

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-in text-center">
            <div className="text-7xl mb-4 animate-bounce-once">🎉</div>
            <h2 className="text-sido-green-600 mb-2">기부 완료!</h2>
            <p className="text-gray-600 mb-4">
              따뜻한 마음이 세상을 바꿉니다
            </p>
            <div className="bg-sido-green-50 rounded-2xl p-4">
              <p className="text-sido-green-600">나무 1그루가 SIDO 숲에 심어졌어요 🌳</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-20px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-bounce-once {
          animation: bounce-once 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
