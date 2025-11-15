import { useState } from 'react';
import { ArrowLeft, Info, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { TreeType } from './TreeSelectionModal';

interface DonatedTree {
  id: string;
  treeType: TreeType;
  donatedDate: string;
  seeds: number;
}

interface MyFieldScreenProps {
  onBack: () => void;
  donatedTrees: DonatedTree[];
  pendingTree: { treeType: TreeType; seeds: number } | null;
  onDonate: () => void;
}

export function MyFieldScreen({ onBack, donatedTrees, pendingTree, onDonate }: MyFieldScreenProps) {
  const [selectedTree, setSelectedTree] = useState<DonatedTree | null>(null);
  
  const TreeSvg = ({ treeType, donated, onClick }: { treeType: TreeType; donated: boolean; onClick: () => void }) => (
    <button onClick={onClick} className="relative hover:scale-110 transition-transform">
      <div className="text-6xl">{treeType.emoji}</div>
      {donated && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
            기부완료
          </div>
        </div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-sido-warm-50 pb-20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h3 className="text-gray-800">나의 숲</h3>
            <p className="text-sm text-gray-500">My SIDO Forest</p>
          </div>
        </div>
      </div>

      {/* Pending tree section */}
      {pendingTree && (
        <div className="px-6 pt-6 pb-4">
          <div className="bg-gradient-to-br from-sido-yellow to-sido-peach rounded-2xl p-5 shadow-sido-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎉</span>
              <h4 className="text-gray-800">기부 준비 완료!</h4>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              {pendingTree.treeType.name}가 다 자랐어요. 이제 SIDO 숲에 기부할 수 있어요!
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{pendingTree.treeType.emoji}</div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{pendingTree.treeType.description}</p>
                <p className="text-xs text-gray-500">🌱 {pendingTree.seeds} SEED 사용</p>
              </div>
            </div>
            <Button
              onClick={onDonate}
              className="w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-2xl h-12 gap-2"
            >
              <Gift className="w-5 h-5" />
              숲에 기부하기
            </Button>
          </div>
        </div>
      )}

      {/* Info banner */}
      {!pendingTree && donatedTrees.length === 0 && (
        <div className="px-6 pt-6 pb-4">
          <div className="bg-sido-green-100 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">🌱</div>
            <h4 className="text-gray-800 mb-2">아직 나무가 없어요</h4>
            <p className="text-sm text-gray-600">
              홈에서 나무를 심고 SEED를 모아<br />
              첫 나무를 기부해보세요!
            </p>
          </div>
        </div>
      )}

      {donatedTrees.length > 0 && (
        <>
          {/* Stats */}
          <div className="px-6 pt-6 pb-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sido-card">
                <p className="text-gray-500 text-sm mb-1">기부한 나무</p>
                <p className="text-2xl text-sido-green-600">{donatedTrees.length}그루</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sido-card">
                <p className="text-gray-500 text-sm mb-1">누적 SEED</p>
                <p className="text-2xl text-sido-green-600">
                  {donatedTrees.reduce((sum, t) => sum + t.seeds, 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Forest view */}
          <div className="px-6">
            <h4 className="mb-4 text-gray-700">🌳 SIDO 숲</h4>
            
            <div className="bg-gradient-to-b from-sido-green-100 to-sido-green-50 rounded-3xl p-8 shadow-sido-soft min-h-[400px] relative overflow-hidden">
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sido-green-200/50 to-transparent" />
              
              {/* Trees grid */}
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {donatedTrees.map((tree) => (
                  <div key={tree.id} className="flex flex-col items-center">
                    <TreeSvg
                      treeType={tree.treeType}
                      donated={true}
                      onClick={() => setSelectedTree(tree)}
                    />
                  </div>
                ))}
                
                {/* Empty slots */}
                {Array.from({ length: Math.max(0, 6 - donatedTrees.length) }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex flex-col items-center opacity-30">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="50" r="3" fill="#d1d5db" />
                      <circle cx="40" cy="50" r="8" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-4xl opacity-20">☁️</div>
              <div className="absolute top-12 left-8 text-3xl opacity-20">☁️</div>
              <div className="absolute bottom-4 left-4 text-2xl">🌼</div>
              <div className="absolute bottom-6 right-6 text-2xl">🌸</div>
            </div>
          </div>
        </>
      )}

      {/* Tree info modal */}
      {selectedTree && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setSelectedTree(null)}
        >
          <div 
            className="bg-white rounded-t-3xl p-6 w-full max-w-lg shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedTree.treeType.emoji}</div>
              <h3 className="text-gray-800 mb-2">{selectedTree.treeType.name}</h3>
              <p className="text-gray-500">이 나무는 SIDO 숲에 기부되었어요</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">기부일</span>
                <span className="text-gray-800">{selectedTree.donatedDate}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">기부 위치</span>
                <span className="text-gray-800">{selectedTree.treeType.description}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">사용한 SEED</span>
                <span className="text-sido-green-600">🌱 {selectedTree.seeds}</span>
              </div>
            </div>

            <Button
              onClick={() => setSelectedTree(null)}
              className="w-full bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-full h-12"
            >
              닫기
            </Button>
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