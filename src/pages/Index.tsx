
import { OnboardingProvider } from '../contexts/OnboardingContext';
import { Onboarding } from '../components/Onboarding';

const Index = () => {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-white">
        <Onboarding />
      </div>
    </OnboardingProvider>
  );
};

export default Index;
