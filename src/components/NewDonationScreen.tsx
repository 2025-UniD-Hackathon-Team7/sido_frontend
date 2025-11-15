import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import svgPaths from '../imports/svg-pfoln886r7';

interface DonationScreenProps {
  onBack: () => void;
  onSelectDonation: (organizationId: string) => void;
  currentTreeSeeds: number;
}

interface DonationOrganization {
  id: string;
  name: string;
  category: string;
  description: string;
  totalDonated: number;
  iconColor: string;
  iconBg: string;
  iconPath: string;
}

const organizations: DonationOrganization[] = [
  {
    id: 'unicef',
    name: '유니세프',
    category: '아동',
    description: '전 세계 어린이들에게 희망을',
    totalDonated: 12450,
    iconColor: '#FF4081',
    iconBg: '#ffe0ec',
    iconPath: svgPaths.p26066480,
  },
  {
    id: 'greenshield',
    name: '초록우산',
    category: '복지',
    description: '국내 취약계층 아동 지원',
    totalDonated: 8920,
    iconColor: '#4CAF50',
    iconBg: '#e8f5e9',
    iconPath: svgPaths.p39020cc0,
  },
  {
    id: 'goodneighbors',
    name: '굿네이버스',
    category: '교육',
    description: '교육 기회가 필요한 아이들에게',
    totalDonated: 6780,
    iconColor: '#2196F3',
    iconBg: '#e3f2fd',
    iconPath: svgPaths.p183b30fc,
  },
  {
    id: 'greenpeace',
    name: '그린피스',
    category: '환경',
    description: '지구를 지키는 작은 실천',
    totalDonated: 5340,
    iconColor: '#4CAF50',
    iconBg: '#e8f5e9',
    iconPath: svgPaths.p67b0e00,
  },
];

export function NewDonationScreen({ onBack, onSelectDonation, currentTreeSeeds }: DonationScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrganizations = organizations.filter(org =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    org.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-neutral-100 px-6 pt-5 pb-5">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-[20px] text-neutral-900 tracking-[0.7955px]">기부하기</h1>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pt-6">
        <p className="text-[#4a5565] text-[16px] tracking-[-0.6225px] mb-8">
          모든 SEED로 세상에 따뜻함을 나눠요
        </p>

        {/* Section Title */}
        <h2 className="text-[16px] text-neutral-900 tracking-[-0.6225px] mb-5">기부처 선택</h2>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="기부처 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-[16px] text-[14px] focus:outline-none focus:border-[#5fa895] transition-colors"
          />
        </div>

        {/* Organizations List */}
        <div className="space-y-4 pb-6">
          {filteredOrganizations.map((org) => (
            <button
              key={org.id}
              onClick={() => onSelectDonation(org.id)}
              className="w-full bg-white border border-neutral-200 rounded-[16px] p-5 hover:border-[#5fa895] transition-all text-left"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: org.iconBg }}
                >
                  <div className="w-6 h-6">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path 
                        d={org.iconPath} 
                        stroke={org.iconColor} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.99984" 
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[16px] text-neutral-900 tracking-[-0.6225px] font-semibold">
                      {org.name}
                    </h3>
                    <span className="bg-neutral-100 text-neutral-600 text-[12px] px-2 py-0.5 rounded-full">
                      {org.category}
                    </span>
                  </div>
                  <p className="text-[14px] text-neutral-600 tracking-[-0.3004px] mb-1">
                    {org.description}
                  </p>
                  <p className="text-[#a1a1a1] text-[12px]">
                    누적 기부: {org.totalDonated.toLocaleString()} SEED
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#e3f2fd] rounded-[16px] p-4 mb-6">
          <div className="flex items-start gap-2">
            <div className="text-[20px]">💡</div>
            <div>
              <p className="text-[14px] text-[#1976d2] mb-1 font-semibold">기부 안내</p>
              <p className="text-[12px] text-[#1976d2]">
                1,000 SEED = 1,000원 기부금으로 전환됩니다.<br />
                여러분의 작은 선행이 큰 변화를 만듭니다!
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          className="w-full bg-neutral-200 text-neutral-400 rounded-[16px] py-4 text-[16px] font-semibold mb-6 cursor-not-allowed"
          disabled
        >
          <div className="flex items-center justify-center gap-2">
            <span>❤️</span>
            <span>기부하기</span>
          </div>
        </button>
      </div>
    </div>
  );
}