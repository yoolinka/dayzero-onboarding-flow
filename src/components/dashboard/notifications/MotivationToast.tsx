
import { Star } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export const showMotivation = () => {
  toast("Today's Motivation", {
    description: "Your lungs are already starting to heal.",
    action: {
      label: "Read More",
      onClick: () => {
        window.location.href = "/dashboard";
      },
    },
    icon: <Star className="h-4 w-4" />,
    duration: 10000,
  });
};
