
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Pen } from "lucide-react";

interface JournalEntryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (entry: string) => void;
}

export function JournalEntryDialog({ open, onOpenChange, onSave }: JournalEntryProps) {
  const [entry, setEntry] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Pen className="h-5 w-5" />
            New Journal Entry
          </DialogTitle>
        </DialogHeader>
        <Textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How are you feeling today?"
          className="min-h-[100px]"
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={() => {
            onSave(entry);
            onOpenChange(false);
          }}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
