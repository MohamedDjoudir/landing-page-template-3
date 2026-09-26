import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  /** Side of the top glow; the bottom glow sits on the opposite side. */
  redSide: "start" | "end";
  size?: "third" | "half";
  grid?: boolean;
  className?: string;
}

const SIZE = { third: "w-1/3 h-1/3", half: "w-1/2 h-1/2" } as const;

export function SectionBackground({
  redSide,
  size = "third",
  grid = false,
  className,
}: SectionBackgroundProps) {
  const blur = size === "half" ? "blur-[120px]" : "blur-[100px]";
  const isStart = redSide === "start";

  return (
    <div className={cn("absolute inset-0 z-0", className)} aria-hidden="true">
      <div
        className={cn(
          "absolute top-0 bg-red-500/10 rounded-full",
          SIZE[size],
          blur,
          isStart ? "start-0" : "end-0"
        )}
      ></div>
      <div
        className={cn(
          "absolute bottom-0 bg-amber-500/10 rounded-full",
          SIZE[size],
          blur,
          isStart ? "end-0" : "start-0"
        )}
      ></div>
      {grid && (
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
      )}
    </div>
  );
}
