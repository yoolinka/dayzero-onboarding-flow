
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { JournalEntryDialog } from './modals/JournalEntry';
import { JournalEntry } from './JournalEntry';
import type { Mood } from './modals/MoodSelector';

interface Entry {
  id: number;
  date: Date;
  mood: Mood;
  text: string;
}

export function Journal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: 1,
      date: new Date(),
      mood: 'happy',
      text: "Today was a great day! I managed to resist several cravings by going for walks instead.",
    },
    {
      id: 2,
      date: new Date(Date.now() - 86400000), // Yesterday
      mood: 'neutral',
      text: "Had some cravings but stayed strong. Taking it one day at a time.",
    },
  ]);

  const handleSaveEntry = (text: string, mood: Mood) => {
    setEntries((prev) => [
      {
        id: prev.length + 1,
        date: new Date(),
        mood,
        text,
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Journal</h1>
          <p className="text-muted-foreground mt-1">
            Track your thoughts, moods, and progress daily
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2" />
          New Entry
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {entries.map((entry) => (
            <JournalEntry
              key={entry.id}
              date={entry.date}
              mood={entry.mood}
              text={entry.text}
            />
          ))}
        </div>
      </ScrollArea>

      <JournalEntryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSaveEntry}
      />
    </div>
  );
}
