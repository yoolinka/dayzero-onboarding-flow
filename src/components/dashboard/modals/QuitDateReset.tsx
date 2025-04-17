
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

interface QuitDateResetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (date: Date) => void;
}

export function QuitDateResetDialog({ open, onOpenChange, onConfirm }: QuitDateResetProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset Your Quit Date?</AlertDialogTitle>
          <AlertDialogDescription>
            This will reset your progress. Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => date && onConfirm(date)}>
            Reset Anyway
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
