
import { useOnboarding } from '../contexts/OnboardingContext';
import { Button } from './ui/button';
import { ProgressBar } from './ProgressBar';
import { Card } from './ui/card';
import { Input } from './ui/input';
import {
  Calendar,
  CircleCheck,
  LogIn,
  CalendarIcon,
  Cigarette,
  Target,
  Heart
} from 'lucide-react';

export function Onboarding() {
  const { step, nextStep } = useOnboarding();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeScreen />;
      case 2:
        return <AccountSetup />;
      case 3:
        return <QuitDateSelection />;
      case 4:
        return <SmokingHabits />;
      case 5:
        return <MotivationSelection />;
      case 6:
        return <Summary />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <ProgressBar />
      <div className="mt-8 animate-fade-in">
        {renderStep()}
      </div>
    </div>
  );
}

function WelcomeScreen() {
  const { nextStep } = useOnboarding();

  return (
    <Card className="p-8 text-center space-y-6">
      <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
        <CircleCheck className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to DayZero
      </h1>
      <p className="text-gray-600">
        Your smoke-free journey starts today
      </p>
      <Button onClick={nextStep} className="w-full">
        Get Started
      </Button>
      <div className="space-x-4 text-sm">
        <button className="text-primary hover:underline">Log In</button>
        <span className="text-gray-400">or</span>
        <button className="text-primary hover:underline">Continue as Guest</button>
      </div>
    </Card>
  );
}

function AccountSetup() {
  const { nextStep, updateData, data } = useOnboarding();

  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">Create your account</h2>
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => updateData({ password: e.target.value })}
        />
      </div>
      <Button onClick={nextStep} className="w-full">
        Continue
      </Button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button className="text-primary hover:underline">Log in</button>
      </p>
    </Card>
  );
}

function QuitDateSelection() {
  const { nextStep, updateData, data } = useOnboarding();

  const setDate = (date: Date) => {
    updateData({ quitDate: date });
    nextStep();
  };

  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">When is your quit day?</h2>
      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setDate(new Date())}
        >
          <CalendarIcon className="mr-2 h-4 w-4" /> Today
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            setDate(tomorrow);
          }}
        >
          <CalendarIcon className="mr-2 h-4 w-4" /> Tomorrow
        </Button>
      </div>
    </Card>
  );
}

function SmokingHabits() {
  const { nextStep, updateData, data } = useOnboarding();

  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">Tell us about your habit</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cigarettes per day
          </label>
          <Input
            type="number"
            value={data.cigarettesPerDay}
            onChange={(e) => updateData({ cigarettesPerDay: Number(e.target.value) })}
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years smoking
          </label>
          <Input
            type="number"
            value={data.yearsSmoked}
            onChange={(e) => updateData({ yearsSmoked: Number(e.target.value) })}
            min="0"
          />
        </div>
      </div>
      <Button onClick={nextStep} className="w-full">
        Next
      </Button>
    </Card>
  );
}

function MotivationSelection() {
  const { nextStep, updateData, data } = useOnboarding();

  const motivations = [
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'family', label: 'Family', icon: Heart },
    { id: 'money', label: 'Money', icon: Target },
  ];

  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">What motivates you to quit?</h2>
      <div className="grid grid-cols-2 gap-4">
        {motivations.map((motivation) => (
          <Button
            key={motivation.id}
            variant="outline"
            className={`h-24 flex flex-col items-center justify-center ${
              data.motivation === motivation.id ? 'border-primary' : ''
            }`}
            onClick={() => updateData({ motivation: motivation.id })}
          >
            <motivation.icon className="h-6 w-6 mb-2" />
            {motivation.label}
          </Button>
        ))}
      </div>
      <Button onClick={nextStep} className="w-full">
        Next
      </Button>
    </Card>
  );
}

function Summary() {
  const { data } = useOnboarding();

  return (
    <Card className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">You're ready!</h2>
      <div className="space-y-4 text-center">
        <p className="text-gray-600">
          Your journey begins{' '}
          {data.quitDate ? new Date(data.quitDate).toLocaleDateString() : 'today'}
        </p>
        <p className="text-gray-600">
          You'll be saving {data.cigarettesPerDay} cigarettes per day
        </p>
        <p className="font-medium text-primary">Your journey starts now.</p>
      </div>
      <Button className="w-full">Start My DayZero</Button>
    </Card>
  );
}
