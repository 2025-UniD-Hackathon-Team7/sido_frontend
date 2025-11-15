import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  reward: number;
  emoji: string;
}

interface MissionCompleteModalProps {
  mission: Mission | null;
  onClose: () => void;
}

export function MissionCompleteModal({ mission, onClose }: MissionCompleteModalProps) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-scale-in relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sido-green-50 to-white opacity-50" />

        <div className="relative z-10">
          {/* Success emoji */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-20 h-20 text-sido-green-500 animate-bounce-once" strokeWidth={2} />
            </div>
            <h2 className="text-sido-green-600 mb-2">미션 완료!</h2>
            <p className="text-gray-600">{mission.title}</p>
          </div>

          {/* Reward */}
          <div className="bg-gradient-to-br from-sido-green-100 to-sido-green-50 rounded-2xl p-6 mb-6 text-center">
            <p className="text-gray-600 mb-2">획득한 SEED</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl">🌱</span>
              <span className="text-4xl text-sido-green-600">+{mission.reward}</span>
            </div>
          </div>

          {/* Close button */}
          <Button
            onClick={onClose}
            className="w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-full h-12"
          >
            확인
          </Button>
        </div>
      </div>

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