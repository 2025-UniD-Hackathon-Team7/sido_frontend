import { ArrowLeft } from 'lucide-react';
import svgPaths from '../imports/svg-ys5ec999dj';
import imgImage12 from "figma:asset/f57e80cbd7532dd393b47ef1e13ca6bc324ea24b.png";
import imgImage16 from "figma:asset/52c4d8b1c03f8770a96dfeeee948c17c65a9603f.png";
import { TreeType } from './TreeSelectionModal';

interface DonatedTree {
  id: string;
  treeType: TreeType;
  donatedDate: string;
  seeds: number;
  organizationName?: string;
}

interface DonatedTreesScreenProps {
  onBack: () => void;
  donatedTrees: DonatedTree[];
  onTreeClick: (tree: DonatedTree) => void;
}

export function DonatedTreesScreen({ 
  onBack, 
  donatedTrees,
  onTreeClick 
}: DonatedTreesScreenProps) {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.8)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] px-6 py-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#4A5565]" />
          </button>
          <h1 className="text-[20px] text-[#1e2939]">심은 나무</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6">
        {/* Info Box */}
        <div className="bg-green-100 rounded-[16px] p-4 mb-6 flex items-start gap-3">
          <div className="shrink-0 w-5 h-5">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip0_info)">
                <path 
                  d={svgPaths.p22f45f80} 
                  stroke="#16A34A" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.66636" 
                />
                <path 
                  d="M9.99817 13.3309V9.99817" 
                  stroke="#16A34A" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.66636" 
                />
                <path 
                  d="M9.99817 6.66545H10.0065" 
                  stroke="#16A34A" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.66636" 
                />
              </g>
              <defs>
                <clipPath id="clip0_info">
                  <rect fill="white" height="19.9963" width="19.9963" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-[16px] text-neutral-950 leading-[25.6px]">
            기부한 나무에는 리본이 달려있어요. 나무를 탭하면 기부 정보를 볼 수 있어요.
          </p>
        </div>

        {/* SIDO 숲 Title */}
        <h2 className="text-[18px] text-[#364153] text-center mb-4">
          SIDO 숲
        </h2>

        {/* Forest Container */}
        <div 
          className="relative bg-gradient-to-b from-[#9cc9e8] to-[#58b678] rounded-[24px] shadow-[0px_4px_20px_0px_rgba(34,197,94,0.08)] overflow-hidden"
          style={{ height: '412px' }}
        >
          {/* Clouds */}
          <div className="absolute left-[75px] top-4 opacity-20">
            <p className="text-[36px] leading-[40px]">☁️</p>
          </div>
          <div className="absolute left-8 top-12 opacity-20">
            <p className="text-[30px] leading-[36px]">☁️</p>
          </div>

          {/* Trees - Interactive */}
          {donatedTrees.length > 0 && (
            <>
              {/* Tree 1 - Top Right */}
              {donatedTrees[0] && (
                <button
                  onClick={() => onTreeClick(donatedTrees[0])}
                  className="absolute left-[209px] top-[109px] w-[139px] h-[171px] transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    alt={donatedTrees[0].treeType.name}
                    className="w-full h-full object-contain" 
                    src={imgImage12} 
                  />
                  {/* Ribbon indicator */}
                  <div className="absolute top-2 right-2 text-2xl">🎀</div>
                </button>
              )}

              {/* Tree 2 - Left */}
              {donatedTrees[1] && (
                <button
                  onClick={() => onTreeClick(donatedTrees[1])}
                  className="absolute left-[43px] top-[128px] w-[139px] h-[171px] transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    alt={donatedTrees[1].treeType.name}
                    className="w-full h-full object-contain" 
                    src={imgImage12} 
                  />
                  <div className="absolute top-2 right-2 text-2xl">🎀</div>
                </button>
              )}

              {/* Tree 3 - Center Bottom */}
              {donatedTrees[2] && (
                <button
                  onClick={() => onTreeClick(donatedTrees[2])}
                  className="absolute left-[153px] top-[189px] w-[126px] h-[165px] transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    alt={donatedTrees[2].treeType.name}
                    className="w-full h-full object-contain" 
                    src={imgImage16} 
                  />
                  <div className="absolute top-2 right-2 text-2xl">🎀</div>
                </button>
              )}

              {/* Tree 4 - Right Bottom */}
              {donatedTrees[3] && (
                <button
                  onClick={() => onTreeClick(donatedTrees[3])}
                  className="absolute left-[235px] top-[222px] w-[126px] h-[165px] transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    alt={donatedTrees[3].treeType.name}
                    className="w-full h-full object-contain" 
                    src={imgImage16} 
                  />
                  <div className="absolute top-2 right-2 text-2xl">🎀</div>
                </button>
              )}

              {/* Tree 5 - Bottom Left */}
              {donatedTrees[4] && (
                <button
                  onClick={() => onTreeClick(donatedTrees[4])}
                  className="absolute left-[4px] top-[228px] w-[139px] h-[171px] transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    alt={donatedTrees[4].treeType.name}
                    className="w-full h-full object-contain" 
                    src={imgImage12} 
                  />
                  <div className="absolute top-2 right-2 text-2xl">🎀</div>
                </button>
              )}
            </>
          )}

          {/* Empty state */}
          {donatedTrees.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-[20px] mb-2">🌱</p>
                <p className="text-white text-[16px]">아직 기부한 나무가 없어요</p>
                <p className="text-white/70 text-[14px] mt-2">나무를 키워서 기부해보세요!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
