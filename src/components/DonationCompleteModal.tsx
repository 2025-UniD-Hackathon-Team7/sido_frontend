import { TreeType } from './TreeSelectionModal';

interface DonationCompleteModalProps {
  onClose: () => void;
  tree: TreeType;
  organizationName: string;
  seeds: number;
}

export function DonationCompleteModal({ 
  onClose, 
  tree, 
  organizationName,
  seeds
}: DonationCompleteModalProps) {
  const treeCount = 1; // Always 1 tree per donation
  const monetaryValue = seeds; // 1 SEED = 1 원

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[363px] p-8 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tree Illustration */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-5xl">
            {tree.emoji}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[24px] text-neutral-900 text-center leading-[32px] tracking-[-0.4297px] mb-4">
          기부 완료!
        </h2>

        {/* Organization and tree info */}
        <p className="text-[18px] text-neutral-700 text-center leading-[28px] tracking-[-0.4395px] mb-1">
          <span className="text-[#66bb9a] font-semibold">{organizationName}</span>에
        </p>
        <p className="text-[18px] text-neutral-700 text-center leading-[28px] tracking-[-0.4395px] mb-6">
          나무 <span className="text-[#66bb9a] font-semibold">{treeCount}그루</span>가 기부되었습니다
        </p>

        {/* Monetary value box */}
        <div className="bg-[#f0f7f4] rounded-[16px] py-3 mb-6">
          <p className="text-[#66bb9a] text-[14px] text-center tracking-[-0.1504px] leading-[20px]">
            {monetaryValue.toLocaleString()}원의 가치
          </p>
        </div>

        {/* Thank you message */}
        <p className="text-[14px] text-neutral-500 text-center tracking-[-0.1504px] leading-[20px]">
          따뜻한 마음에 감사드립니다.
        </p>
      </div>

      <style jsx>{`
        @keyframes scale-up {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}