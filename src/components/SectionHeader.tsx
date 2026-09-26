import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleId?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  titleId,
  className,
  titleClassName,
  subtitleClassName,
  children,
}: SectionHeaderProps) {
  return (
    <Reveal inView className={cn("text-center", className)}>
      <h2
        id={titleId}
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold mb-3",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-base sm:text-lg text-white/70 max-w-2xl mx-auto",
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
      {children}
    </Reveal>
  );
}
