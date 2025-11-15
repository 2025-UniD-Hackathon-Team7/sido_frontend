import { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface MissionSurveyScreenProps {
  onComplete: (surveyData: SurveyData) => void;
  onBack: () => void;
}

export interface SurveyData {
  mood: string;
  location: string;
  goal: string;
}

const surveys = [
  {
    id: 'mood',
    step: '1/3',
    question: '오늘 기분은\n어떠세요?',
    subtitle: '당신의 감정을 표현해주세요',
    options: [
      { value: 'energetic', emoji: '😊', label: '기분 좋아요' },
      { value: 'tired', emoji: '😮‍💨', label: '피곤해요' },
      { value: 'excited', emoji: '🤩', label: '들떠있어요' },
      { value: 'anxious', emoji: '😰', label: '불안해요' },
      { value: 'stressed', emoji: '😣', label: '스트레스' },
    ],
  },
  {
    id: 'location',
    step: '2/3',
    question: '주로 어디서\n활동하시나요?',
    subtitle: '오늘 하루 대부분 머무는 장소',
    options: [
      { value: 'office', emoji: '🏢', label: '회사/학교' },
      { value: 'home', emoji: '🏠', label: '집' },
      { value: 'outdoor', emoji: '🌳', label: '야외' },
      { value: 'cafe', emoji: '☕', label: '카페' },
      { value: 'travel', emoji: '✈️', label: '이동중' },
    ],
  },
  {
    id: 'goal',
    step: '3/3',
    question: '어떤 하루를\n보내고 싶으세요?',
    subtitle: '오늘의 목표나 원하는 기분',
    options: [
      { value: 'active', emoji: '👨‍👩‍👧', label: '활동적인' },
      { value: 'peaceful', emoji: '🧘', label: '평온한 하루' },
      { value: 'warm', emoji: '❤️', label: '따뜻한 마음' },
      { value: 'productive', emoji: '💼', label: '생산적인' },
    ],
  },
];

export function MissionSurveyScreen({ onComplete, onBack }: MissionSurveyScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState<Partial<SurveyData>>({});

  const currentSurvey = surveys[currentStep];
  const selectedValue = surveyData[currentSurvey.id as keyof SurveyData];

  const handleSelect = (value: string) => {
    const newData = { ...surveyData, [currentSurvey.id]: value };
    setSurveyData(newData);

    // Auto advance after a short delay
    setTimeout(() => {
      if (currentStep < surveys.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(newData as SurveyData);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-sido-warm-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Progress */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-sido-green-600">{currentSurvey.step}</span>
          <span className="text-sm text-gray-400">설문조사 진행 중</span>
        </div>
        <div className="h-2 bg-sido-green-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-sido-green-500 transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep + 1) / surveys.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-12">
        <div className="mb-12">
          <h2 className="text-gray-800 mb-3 whitespace-pre-line">
            {currentSurvey.question}
          </h2>
          <p className="text-gray-500">{currentSurvey.subtitle}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          {currentSurvey.options.map((option) => {
            const isSelected = selectedValue === option.value;

            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`p-6 rounded-3xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-sido-green-500 text-white shadow-sido-soft scale-105'
                    : 'bg-white text-gray-700 hover:bg-sido-green-50'
                }`}
              >
                <div className="text-5xl mb-3">{option.emoji}</div>
                <p className="text-sm">{option.label}</p>
              </button>
            );
          })}
        </div>

        {/* Skip button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              if (currentStep < surveys.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                onComplete(surveyData as SurveyData);
              }
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            건너뛰기
          </button>
        </div>
      </div>
    </div>
  );
}
