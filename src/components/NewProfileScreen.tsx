import svgPaths from "../imports/svg-21oztof5ti";
import trophySvgPaths from "../imports/svg-ur6hsdal2r";
import { Settings } from "lucide-react";

interface NewProfileScreenProps {
  onNavigate: (screen: string) => void;
  seeds: number;
  level: number;
  xp: number;
  completedMissionsCount: number;
  donatedTreesCount: number;
  currentMonthSeeds: number;
  giftedSeeds: number;
  rank: number;
}

export function NewProfileScreen({
  onNavigate,
  seeds,
  level,
  xp,
  completedMissionsCount,
  donatedTreesCount,
  currentMonthSeeds,
  giftedSeeds,
  rank,
}: NewProfileScreenProps) {
  const maxXP = 100;
  const xpProgress = (xp / maxXP) * 100;

  return (
    <div className="min-h-screen bg-[#FEFDFB] pb-24">
      {/* Header Card */}
      <div className="relative bg-[#5fa895] h-[230px] px-6 pt-12 mb-6">
        {/* Settings Icon */}
        <button
          className="absolute top-4 right-6 p-2 hover:bg-black/10 rounded-xl transition-colors"
          onClick={() => {}}
        >
          <Settings className="w-5 h-5 text-[#4A5565]" />
        </button>

        {/* Profile Avatar and Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-white rounded-full shadow-lg w-20 h-20 flex items-center justify-center">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                d={svgPaths.p2d658b00}
                stroke="#5FA895"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.33272"
              />
              <path
                d={svgPaths.pb760280}
                stroke="#5FA895"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.33272"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white text-[20px] mb-1">
              친절한 시도러
            </h3>
            <p className="text-green-50 text-[16px]">
              Level {level}
            </p>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-white text-[14px]">
            <span>레벨 진행도</span>
            <span className="text-[#4a5565]">
              {xp} / {maxXP} XP
            </span>
          </div>
          <div className="bg-[rgba(3,2,19,0.2)] rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#030213] h-full rounded-full transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 grid grid-cols-2 gap-4 mb-6">
        {/* Row 1 */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🌱</span>
            <span className="text-[#4a5565] text-[14px]">
              보유 SEED
            </span>
          </div>
          <p className="text-[#101828] text-[24px]">
            {seeds}개
          </p>
        </div>

        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d={svgPaths.p1f5a3440}
                stroke="#E60076"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33293"
              />
            </svg>
            <span className="text-[#4a5565] text-[14px]">
              누적 기부 SEED
            </span>
          </div>
          <p className="text-[#101828] text-[24px]">
            {giftedSeeds.toLocaleString()}개
          </p>
        </div>

        {/* Row 2 */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d={svgPaths.p45e1100}
                stroke="#00A63E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33293"
              />
              <path
                d={svgPaths.p12393600}
                stroke="#00A63E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33293"
              />
            </svg>
            <span className="text-[#4a5565] text-[14px]">
              완료한 미션
            </span>
          </div>
          <p className="text-[#101828] text-[24px]">
            {completedMissionsCount}개
          </p>
        </div>

        <button
          onClick={() => onNavigate("ranking")}
          className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 text-left transition-all hover:scale-105"
        >
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 17 18"
            >
              <g clipPath="url(#clip0_trophy)">
                <path 
                  d={trophySvgPaths.p28dcd000} 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
                <path 
                  d={trophySvgPaths.p36114fe0} 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
                <path 
                  d={trophySvgPaths.p3792cc00} 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
                <path 
                  d="M2.83333 16.5H14.1667" 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
                <path 
                  d={trophySvgPaths.p3d879a00} 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
                <path 
                  d={trophySvgPaths.p3992a700} 
                  stroke="#FFD700" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.99984" 
                />
              </g>
              <defs>
                <clipPath id="clip0_trophy">
                  <rect fill="white" height="18" width="17" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#4a5565] text-[14px]">
              내 랭킹
            </span>
          </div>
          <p className="text-[#101828] text-[24px]">{rank}위</p>
        </button>
      </div>

      {/* Achievements Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d={svgPaths.p20ca3f00}
              stroke="#364153"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.66639"
            />
            <path
              d={svgPaths.p13785500}
              stroke="#364153"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.66639"
            />
          </svg>
          <h4 className="text-neutral-950 text-[20px]">업적</h4>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Achievement 1 */}
          <div className="bg-[#FFF9E6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px]">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#101828] text-[12px] text-center mb-1">
              첫 선행
            </p>
            <p className="text-[#6a7282] text-[12px] text-center">
              첫 미션 완료
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-[#FFF9E6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px]">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#101828] text-[12px] text-center mb-1">
              연속 7일
            </p>
            <p className="text-[#6a7282] text-[12px] text-center">
              7일 연속 미션 완료
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-[#FFF9E6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px]">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#101828] text-[12px] text-center mb-1">
              선행왕
            </p>
            <p className="text-[#6a7282] text-[12px] text-center">
              100개 미션 완료
            </p>
          </div>

          {/* Achievement 4 */}
          <div className="bg-[#FFF9E6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px]">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#101828] text-[12px] text-center mb-1">
              나눔의 달인
            </p>
            <p className="text-[#6a7282] text-[12px] text-center">
              1000 SEED 기부
            </p>
          </div>

          {/* Locked Achievement 5 */}
          <div className="bg-gray-100 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px] opacity-50">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#6a7282] text-[12px] text-center mb-1">
              연속 30일
            </p>
            <p className="text-[#9ca3af] text-[12px] text-center">
              30일 연속 미션 완료
            </p>
          </div>

          {/* Locked Achievement 6 */}
          <div className="bg-gray-100 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center justify-center min-h-[112px] opacity-50">
            <div className="text-[30px] mb-2">🏆</div>
            <p className="text-[#6a7282] text-[12px] text-center mb-1">
              레벨 10 달성
            </p>
            <p className="text-[#9ca3af] text-[12px] text-center">
              레벨 10 달성
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Activity Section */}
      <div className="px-6 mb-6">
        <h4 className="text-[#101828] text-[16px] mb-3">
          이번 달 활동
        </h4>
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#4a5565] text-[14px]">
              완료한 미션
            </span>
            <span className="text-[#16A34A] text-[16px] font-semibold">
              32개
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#4a5565] text-[14px]">
              획득한 SEED
            </span>
            <span className="text-[#F59E0B] text-[16px] font-semibold">
              +480
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#4a5565] text-[14px]">
              기부한 SEED
            </span>
            <span className="text-[#3B82F6] text-[16px] font-semibold">
              -250
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 text-center mt-6 pb-4">
        <p className="text-[#99a1af] text-[16px] mb-1">
          SIDO v1.0.0
        </p>
        <p className="text-[#99a1af] text-[16px]">
          작은 시도로 만드는 변화
        </p>
      </div>
    </div>
  );
}