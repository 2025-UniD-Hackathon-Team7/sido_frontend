import SidoMobileAppUi from '../imports/SidoMobileAppUi-66-1593';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div className="min-h-screen w-full">
      <SidoMobileAppUi onClick={onComplete} />
    </div>
  );
}