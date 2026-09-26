import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface HeroStatusBadgeProps {
  label: string;
  delay: number;
  className: string;
  dotClassName: string;
  labelClassName: string;
}

export function HeroStatusBadge({
  label,
  delay,
  className,
  dotClassName,
  labelClassName,
}: HeroStatusBadgeProps) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "absolute bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 shadow-lg hidden xs:flex",
        className
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <div className={cn("rounded-full", dotClassName)}></div>
        <span className={labelClassName}>{label}</span>
      </div>
    </Reveal>
  );
}
