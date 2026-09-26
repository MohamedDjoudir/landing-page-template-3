import { cn } from "@/lib/utils";

interface GlowFrameProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  frameClassName?: string;
  frameRef?: React.Ref<HTMLDivElement>;
}

/** A dark panel sitting on a blurred gradient halo. */
export function GlowFrame({
  children,
  className,
  glowClassName,
  frameClassName,
  frameRef,
}: GlowFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70",
          glowClassName
        )}
      ></div>
      <div
        ref={frameRef}
        className={cn(
          "relative bg-black/80 backdrop-blur-sm rounded-xl",
          frameClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
