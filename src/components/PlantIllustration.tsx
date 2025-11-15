import { TreeType } from './TreeSelectionModal';

interface PlantIllustrationProps {
  stage: 'empty' | 'seed' | 'sprout' | 'small' | 'medium' | 'grown';
  size?: number;
  treeEmoji?: string;
  treeType?: TreeType | null;
  seeds?: number;
}

import potImage from 'figma:asset/98cc15018ee8e0c2b9773392fefa8edf451b258d.png';

// 벚나무 이미지
import blossom1 from '../assets/blossom_1.png';
import blossom2 from '../assets/blossom_2.png';
import blossom3 from '../assets/blossom_3.png';
import blossom4 from '../assets/blossom_4.png';
import blossom5 from '../assets/blossom_5.png';

// 참나무 이미지
import oak1 from '../assets/oak_1.png';
import oak2 from '../assets/oak_2.png';
import oak3 from '../assets/oak_3.png';
import oak4 from '../assets/oak_4.png';
import oak5 from '../assets/oak_5.png';

// seed 양에 따라 1~5 단계 결정 (requiredSeeds 기준)
const getTreeStage = (seeds: number, requiredSeeds: number): number => {
  if (seeds <= 0) return 1;
  const progress = seeds / requiredSeeds;
  if (progress < 0.2) return 1;
  if (progress < 0.4) return 2;
  if (progress < 0.6) return 3;
  if (progress < 0.8) return 4;
  return 5;
};

// 나무 종류와 단계에 따라 이미지 반환
const getTreeImage = (treeType: TreeType | null | undefined, seeds: number): string | null => {
  if (!treeType) return null;
  
  const stage = getTreeStage(seeds, treeType.requiredSeeds);
  
  if (treeType.id === 'cherry') {
    // 벚나무
    switch (stage) {
      case 1: return blossom1;
      case 2: return blossom2;
      case 3: return blossom3;
      case 4: return blossom4;
      case 5: return blossom5;
      default: return blossom1;
    }
  } else if (treeType.id === 'oak') {
    // 참나무
    switch (stage) {
      case 1: return oak1;
      case 2: return oak2;
      case 3: return oak3;
      case 4: return oak4;
      case 5: return oak5;
      default: return oak1;
    }
  }
  
  return null; // 다른 나무 종류는 null 반환 (기존 SVG 사용)
};

export function PlantIllustration({ stage, size = 200, treeEmoji = '🌳', treeType, seeds = 0 }: PlantIllustrationProps) {
  const treeImage = getTreeImage(treeType, seeds);
  
  // 벚나무나 참나무인 경우 이미지 사용
  if (treeImage && (treeType?.id === 'cherry' || treeType?.id === 'oak')) {
    return (
      <div className="flex items-center justify-center">
        <img 
          src={treeImage} 
          alt={treeType.name}
          style={{ width: size, height: size, objectFit: 'contain' }}
        />
      </div>
    );
  }
  
  // 다른 나무 종류나 empty 상태는 기존 SVG 사용
  const renderPlant = () => {
    switch (stage) {
      case 'empty':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Dotted outline where seed will be */}
            <circle cx="100" cy="140" r="8" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5"/>
          </svg>
        );
      
      case 'seed':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Small seed barely visible */}
            <circle cx="100" cy="140" r="4" fill="#86efac" opacity="0.6"/>
          </svg>
        );
      
      case 'sprout':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Small sprout */}
            <path d="M100 140 Q95 120, 90 110 Q85 100, 88 95" 
              stroke="#4ade80" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="88" cy="95" rx="8" ry="12" fill="#86efac"/>
            <path d="M100 140 Q105 125, 108 115" 
              stroke="#4ade80" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="108" cy="110" rx="6" ry="10" fill="#86efac" opacity="0.8"/>
          </svg>
        );
      
      case 'small':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Trunk */}
            <rect x="95" y="90" width="10" height="50" fill="#a0826d" rx="2"/>
            {/* Small tree crown */}
            <circle cx="100" cy="80" r="35" fill="#86efac"/>
            <circle cx="85" cy="90" r="25" fill="#86efac"/>
            <circle cx="115" cy="90" r="25" fill="#86efac"/>
            <circle cx="100" cy="65" r="20" fill="#4ade80"/>
          </svg>
        );
      
      case 'medium':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Trunk */}
            <rect x="93" y="60" width="14" height="80" fill="#a0826d" rx="3"/>
            {/* Medium tree crown */}
            <circle cx="100" cy="55" r="45" fill="#86efac"/>
            <circle cx="75" cy="65" r="30" fill="#86efac"/>
            <circle cx="125" cy="65" r="30" fill="#86efac"/>
            <circle cx="100" cy="35" r="28" fill="#4ade80"/>
            <circle cx="85" cy="50" r="22" fill="#4ade80" opacity="0.8"/>
            <circle cx="115" cy="50" r="22" fill="#4ade80" opacity="0.8"/>
            {/* Fruits/flowers */}
            <circle cx="80" cy="60" r="6" fill="#fca5a5"/>
            <circle cx="120" cy="65" r="6" fill="#fca5a5"/>
            <circle cx="100" cy="45" r="6" fill="#fca5a5"/>
          </svg>
        );
      
      case 'grown':
        return (
          <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
            {/* Pot image */}
            <image href={potImage} x="50" y="110" width="100" height="80" />
            {/* Trunk */}
            <rect x="91" y="40" width="18" height="100" fill="#a0826d" rx="4"/>
            {/* Full grown tree crown */}
            <circle cx="100" cy="40" r="55" fill="#86efac"/>
            <circle cx="65" cy="55" r="38" fill="#86efac"/>
            <circle cx="135" cy="55" r="38" fill="#86efac"/>
            <circle cx="100" cy="18" r="35" fill="#4ade80"/>
            <circle cx="75" cy="35" r="28" fill="#4ade80"/>
            <circle cx="125" cy="35" r="28" fill="#4ade80"/>
            <circle cx="85" cy="55" r="24" fill="#22c55e"/>
            <circle cx="115" cy="55" r="24" fill="#22c55e"/>
            {/* Many fruits */}
            <circle cx="70" cy="50" r="7" fill="#fca5a5"/>
            <circle cx="130" cy="55" r="7" fill="#fca5a5"/>
            <circle cx="95" cy="35" r="7" fill="#fca5a5"/>
            <circle cx="110" cy="42" r="7" fill="#fca5a5"/>
            <circle cx="85" cy="65" r="7" fill="#fca5a5"/>
            <circle cx="115" cy="62" r="7" fill="#fca5a5"/>
          </svg>
        );
    }
  };

  return <div className="flex items-center justify-center">{renderPlant()}</div>;
}