
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

export const showDailyCheckIn = () => {
  toast("How are you doing today?", {
    description: "Take a moment to log your mood and reflect on your progress.",
    action: {
      label: "Open Journal",
      onClick: () => {
        window.location.href = "/dashboard/journal";
      },
    },
    icon: <Calendar className="h-4 w-4" />,
    duration: 10000,
  });
};
