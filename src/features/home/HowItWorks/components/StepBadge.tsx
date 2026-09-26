import { cn } from "@/lib/utils";

interface StepBadgeProps {
  number: string;
  className?: string;
}

export function StepBadge({ number, className }: StepBadgeProps) {
  return (
    <div
      className={cn(
        "absolute bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-lg flex items-center justify-center font-bold",
        className
      )}
    >
      {number}
    </div>
  );
}
