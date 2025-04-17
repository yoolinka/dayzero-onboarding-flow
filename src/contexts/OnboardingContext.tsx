
import React, { createContext, useContext, useState } from 'react';

interface OnboardingData {
  email: string;
  password: string;
  quitDate: Date | null;
  cigarettesPerDay: number;
  yearsSmoked: number;
  triggers: string[];
  motivation: string;
}

interface OnboardingContextType {
  step: number;
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    email: '',
    password: '',
    quitDate: null,
    cigarettesPerDay: 0,
    yearsSmoked: 0,
    triggers: [],
    motivation: '',
  });

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 6));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <OnboardingContext.Provider value={{ step, data, updateData, nextStep, prevStep }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
}
