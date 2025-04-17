
import { Smile, Meh, Frown, AlertTriangle, Heart } from 'lucide-react';

export type Mood = 'happy' | 'calm' | 'neutral' | 'anxious' | 'sad';

interface MoodSelectorProps {
  selected: Mood | null;
  onSelect: (mood: Mood) => void;
}

export function MoodSelector({ selected, onSelect }: MoodSelectorProps) {
  const moods = [
    { icon: Smile, value: 'happy', label: 'Happy' },
    { icon: Heart, value: 'calm', label: 'Calm' },
    { icon: Meh, value: 'neutral', label: 'Neutral' },
    { icon: AlertTriangle, value: 'anxious', label: 'Anxious' },
    { icon: Frown, value: 'sad', label: 'Sad' },
  ] as const;

  return (
    <div className="flex justify-between gap-2 p-4">
      {moods.map(({ icon: Icon, value, label }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            selected === value
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent'
          }`}
          title={label}
        >
          <Icon className="w-8 h-8" />
          <span className="text-xs mt-1">{label}</span>
        </button>
      ))}
    </div>
  );
}
