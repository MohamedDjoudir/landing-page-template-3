import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckBadgeProps {
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
}

export function CheckBadge({ className, iconClassName, children }: CheckBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      {children ?? <Check className={cn("text-white", iconClassName)} />}
    </div>
  );
}
