import { X } from 'lucide-react';
import { Button } from './ui/button';

interface TreeType {
  id: string;
  name: string;
  emoji: string;
  description: string;
  location: string;
  requiredSeeds: number;
}

interface TreeSelectionModalProps {
  onSelect: (tree: TreeType) => void;
  onClose: () => void;
}

const treeTypes: TreeType[] = [
  {
    id: 'pine',
    name: '소나무',
    emoji: '🌲',
    description: '강원도 산불 피해 지역',
    location: '강원도',
햣     requiredSeeds: 10000,
  },
  {
    id: 'oak',
    name: '참나무',
    emoji: '🌳',
    description: '서울 둘레길',
    location: '서울',
    requiredSeeds: 30000,
  },
  {
    id: 'bamboo',
    name: '대나무',
    emoji: '🎋',
    description: '담양 죽녹원',
    location: '담양',
    requiredSeeds: 50000,
  },
  {
    id: 'ginkgo',
    name: '은행나무',
    emoji: '🍂',
    description: '경상북도 학교숲',
    location: '경상북도',
    requiredSeeds: 100000,
  },
  {
    id: 'maple',
    name: '단풍나무',
    emoji: '🍁',
    description: '내장산 국립공원',
    location: '내장산',
    requiredSeeds: 300000,
  },
  {
    id: 'cherry',
    name: '벚나무',
    emoji: '🌸',
    description: '제주도 환상로',
    location: '제주도',
    requiredSeeds: 1000000,
  },
];

export function TreeSelectionModal({ onSelect, onClose }: TreeSelectionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-t-3xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col animate-slide-up">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <h3 className="text-gray-800">나무 선택하기</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <p className="text-sm text-gray-500">심고 싶은 나무를 선택해주세요</p>
        </div>

        {/* Tree list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="space-y-3">
            {treeTypes.map((tree) => (
              <button
                key={tree.id}
                onClick={() => onSelect(tree)}
                className="w-full bg-sido-warm-50 hover:bg-sido-green-50 rounded-2xl p-4 transition-all duration-200 text-left border-2 border-transparent hover:border-sido-green-400"
              >
                <div className="flex items-center gap-4">
                  {/* Tree emoji */}
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm">
                    {tree.emoji}
                  </div>

                  {/* Tree info */}
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{tree.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <span>📍</span>
                      <span>{tree.description}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm">🌱</span>
                      <span className="text-sm text-sido-green-600">
                        {tree.requiredSeeds} SEED
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

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

export type { TreeType };
