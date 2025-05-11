
import React from "react";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface ProfileMilestoneProps {
  title: string;
  icon: string;
  description: string;
  unlocked: boolean;
  onShare: () => void;
}

export function ProfileMilestone({ title, icon, description, unlocked, onShare }: ProfileMilestoneProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={`flex flex-col items-center p-3 rounded-lg border cursor-pointer ${
            unlocked ? "bg-card" : "bg-muted/50 opacity-60"
          }`}
        >
          <div className="text-3xl mb-1">{icon}</div>
          <div className="text-xs text-center font-medium">{title}</div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h4 className="font-semibold">{title}</h4>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {unlocked && (
            <Button size="sm" variant="outline" className="w-full" onClick={onShare}>
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
          )}
          {!unlocked && (
            <div className="text-xs text-muted-foreground">
              Continue your journey to unlock this achievement!
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
