
import { useOnboarding } from '../contexts/OnboardingContext';

export function ProgressBar() {
  const { step } = useOnboarding();
  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
