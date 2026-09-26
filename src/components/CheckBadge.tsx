import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckBadgeProps {
  className?: string;
  iconClassName?: string;
}

export function CheckBadge({ className, iconClassName }: CheckBadgeProps) {
  return (
    <div
      className={cn(
        "flex-shrink-0 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      <Check className={cn("text-white", iconClassName)} />
    </div>
  );
}
