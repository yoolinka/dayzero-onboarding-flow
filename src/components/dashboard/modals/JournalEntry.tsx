
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Pen } from "lucide-react";
import { MoodSelector } from "./MoodSelector";
import type { Mood } from "./MoodSelector";

interface JournalEntryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (entry: string, mood: Mood) => void;
}

export function JournalEntryDialog({ open, onOpenChange, onSave }: JournalEntryProps) {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState<Mood | null>(null);

  const handleSave = () => {
    if (mood && entry.trim()) {
      onSave(entry, mood);
      setEntry("");
      setMood(null);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pen className="h-5 w-5" />
            New Journal Entry
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <MoodSelector selected={mood} onSelect={setMood} />
          <Textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="How are you feeling today?"
            className="min-h-[100px]"
          />
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!mood || !entry.trim()}>
            Save Entry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
