import { useState } from 'react';
import { Leaf, Heart, TreePine, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Group1 from '../imports/Group8';
import Group5 from '../imports/Group10';
import Group from '../imports/Group11';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: '작은 시도를 실천하는 앱',
      subtitle: '',
      description: '매일 작은 친절함으로\n세상을 더 따뜻하게 만들어요',
      icon: Leaf,
      illustration: (
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-sido-green-100 opacity-40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[185px] h-[185px]">
              <Group1 />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '매일 맞춤형 미션',
      subtitle: '',
      description: '작은 친절 미션을 완료하고\nSEED 🌱를 모아보세요',
      icon: Heart,
      illustration: (
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[185px] h-[185px]">
              <Group5 />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '나무 키우기',
      subtitle: '',
      description: 'SEED🌱로 나무를 키우고\n나만의 숲을 가꿔봐요',
      icon: TreePine,
      illustration: (
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[185px] h-[185px]">
              <Group />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-sido-warm-50 flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <button
          onClick={onComplete}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          건너뛰기
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Illustration */}
        <div className="mb-12">
          {slide.illustration}
        </div>

        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-sido-green-100 flex items-center justify-center">
            <Icon className="w-8 h-8 text-sido-green-600" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-8">
          <h2 className="text-sido-green-600 mb-2">{slide.title}</h2>
          <p className="text-gray-600 mb-4">{slide.subtitle}</p>
          <p className="text-gray-500 whitespace-pre-line leading-relaxed">
            {slide.description}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-sido-green-500' 
                  : 'w-2 bg-sido-green-200'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button
          onClick={handleNext}
          className="w-full max-w-sm bg-sido-green-500 hover:bg-sido-green-600 text-white rounded-full h-14 gap-2"
        >
          {currentSlide === slides.length - 1 ? '시작하기' : '다음'}
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}