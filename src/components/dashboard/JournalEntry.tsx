
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Smile, Meh, Frown, AlertTriangle, Heart } from 'lucide-react';
import type { Mood } from './modals/MoodSelector';

interface JournalEntryProps {
  date: Date;
  mood: Mood;
  text: string;
  onClick?: () => void;
}

const moodIcons = {
  happy: Smile,
  calm: Heart,
  neutral: Meh,
  anxious: AlertTriangle,
  sad: Frown,
};

export function JournalEntry({ date, mood, text, onClick }: JournalEntryProps) {
  const Icon = moodIcons[mood];
  
  return (
    <Card 
      className="p-4 mb-4 cursor-pointer hover:bg-accent/50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full p-2 bg-background">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(date, { addSuffix: true })}
          </p>
          <p className="text-sm line-clamp-2 mt-1">{text}</p>
        </div>
      </div>
    </Card>
  );
}
