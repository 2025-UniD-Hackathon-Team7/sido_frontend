import svgPaths from '../imports/svg-v35p6ydagm';
import { TreeType } from './TreeSelectionModal';
import { ArrowLeft } from 'lucide-react';

interface DonatedTree {
  id: string;
  treeType: TreeType;
  donatedDate: string;
  seeds: number;
}

interface MyFieldScreenProps {
  onBack: () => void;
  donatedTrees: DonatedTree[];
  currentTree: TreeType | null;
  seeds: number;
  onDonateClick: () => void;
  onViewDonatedTrees?: () => void;
  growingTrees?: Array<{ tree: TreeType; progress: number }>;
}

export function NewMyFieldScreen({ 
  onBack, 
  donatedTrees, 
  currentTree, 
  seeds,
  onDonateClick,
  onViewDonatedTrees,
  growingTrees = []
}: MyFieldScreenProps) {
  const targetSeeds = currentTree ? currentTree.requiredSeeds : 100;
  const progress = currentTree ? Math.min((seeds / targetSeeds) * 100, 100) : 0;
  const isTreeComplete = currentTree && progress >= 100;

  const totalGiftedSeeds = donatedTrees.reduce((sum, tree) => sum + tree.seeds, 0);

  return (
    <div className="bg-[#fefdfb] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-sido-green-500 text-white px-6 pt-6 pb-8">
        <button 
          onClick={onBack} 
          className="p-2 hover:bg-white/20 rounded-full transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="mb-2">나무 심기</h2>
        <p className="text-sido-green-50 text-sm">다양한 나무를 심어보세요.</p>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 space-y-5">
        {/* Stats Card - Now clickable */}
        <button 
          onClick={onViewDonatedTrees}
          className="w-full bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 hover:bg-white hover:border-[#5fa895] transition-all"
        >
          <div className="flex gap-3">
            {/* 심은 나무 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-5 h-5 mb-2">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_tree)">
                    <path 
                      d={svgPaths.p1a256a00} 
                      stroke="#5FA895" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66652" 
                    />
                    <path 
                      d="M9.99909 15.8319V18.3317" 
                      stroke="#5FA895" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66652" 
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_tree">
                      <rect fill="white" height="19.9982" width="19.9982" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[#4a5565] text-[11px] leading-[14px] text-center mb-1 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif]">
                심은 나무
              </p>
              <p className="text-[#5fa895] text-[15px] leading-[20px] text-center font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif]">
                {donatedTrees.length}그루
              </p>
            </div>

            {/* 기여 SEED */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-5 h-5 mb-2">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_heart)">
                    <path 
                      d={svgPaths.p33db6600} 
                      stroke="#FB2C36" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66652" 
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_heart">
                      <rect fill="white" height="19.9982" width="19.9982" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[#4a5565] text-[11px] leading-[14px] text-center mb-1 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif]">
                기여 SEED
              </p>
              <p className="text-[#fb2c36] text-[15px] leading-[20px] text-center font-['Arimo:Regular',sans-serif]">
                {totalGiftedSeeds}
              </p>
            </div>
          </div>
        </button>

        {/* Growing Trees - Example: 참나무 (0%) */}
        {growingTrees.map((item, index) => (
          <div 
            key={index} 
            className="bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4"
          >
            <div className="flex items-center gap-4">
              {/* Tree emoji illustration */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-2xl shrink-0">
                {item.tree.emoji}
              </div>

              {/* Tree info and progress */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-neutral-950 leading-[18px] font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] mb-2">
                  {item.tree.name}
                </p>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[#6a7282] text-[12px] leading-[16px] font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif]">
                      성장률
                    </p>
                    <p className="text-[#5fa895] text-[12px] leading-[16px] font-['ABeeZee:Regular',sans-serif]">
                      {Math.round(item.progress)}%
                    </p>
                  </div>
                  
                  <div className="bg-green-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-neutral-900 h-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Current Tree - Not Complete */}
        {currentTree && !isTreeComplete && (
          <div className="bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
            <div className="flex items-center gap-4">
              {/* Tree emoji illustration */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-2xl shrink-0">
                {currentTree.emoji}
              </div>

              {/* Tree info and progress */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-neutral-950 leading-[18px] font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] mb-2">
                  {currentTree.name}
                </p>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[#6a7282] text-[12px] leading-[16px] font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif]">
                      성장률
                    </p>
                    <p className="text-[#5fa895] text-[12px] leading-[16px] font-['ABeeZee:Regular',sans-serif]">
                      {Math.round(progress)}%
                    </p>
                  </div>
                  
                  <div className="bg-green-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-neutral-900 h-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completed Tree - 100% with 기부하기 button */}
        {currentTree && isTreeComplete && (
          <div className="bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4">
            <div className="flex items-center gap-4">
              {/* Tree emoji illustration */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-2xl shrink-0 animate-pulse">
                {currentTree.emoji}
              </div>

              {/* Tree info and progress */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-neutral-950 leading-[18px] font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] mb-2">
                  {currentTree.name}
                </p>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[#6a7282] text-[12px] leading-[16px] font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif]">
                      성장률
                    </p>
                    <p className="text-[#5fa895] text-[12px] leading-[16px] font-['ABeeZee:Regular',sans-serif]">
                      100%
                    </p>
                  </div>
                  
                  <div className="bg-[#00a63e] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#5fa895] h-full w-full" />
                  </div>
                </div>
              </div>

              {/* Donate button */}
              <button
                onClick={onDonateClick}
                className="bg-[#5fa895] hover:bg-[#4d897a] rounded-[8px] px-4 py-2 transition-colors shrink-0"
              >
                <p className="text-white text-[12px] leading-[16px] font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] whitespace-nowrap">
                  기부하기
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}