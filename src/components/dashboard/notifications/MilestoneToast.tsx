
import { Trophy } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export const showMilestone = (days: number, money: number, cigarettes: number) => {
  toast("🎉 You hit a milestone!", {
    description: `You've been smoke-free for ${days} days! You've saved $${money} and avoided ${cigarettes} cigarettes.`,
    action: {
      label: "View Progress",
      onClick: () => {
        window.location.href = "/dashboard/profile";  
      },
    },
    icon: <Trophy className="h-4 w-4" />,
    duration: 10000,
  });
};
