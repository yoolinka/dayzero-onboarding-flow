
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface AchievementUnlockedProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onShare?: () => void;
}

export function AchievementUnlockedDialog({ 
  open, 
  onOpenChange, 
  title, 
  description,
  onShare 
}: AchievementUnlockedProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {onShare ? (
            <Button onClick={onShare} className="w-full">
              Share
            </Button>
          ) : (
            <Button onClick={() => onOpenChange(false)} className="w-full">
              Nice!
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
