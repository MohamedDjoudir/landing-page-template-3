import { useTranslations } from "next-intl";

interface TestimonialsDotsProps {
  current: number;
  total: number;
  onDotClick: (index: number) => void;
}

export function TestimonialsDots({
  current,
  total,
  onDotClick,
}: TestimonialsDotsProps) {
  const t = useTranslations("testimonials");

  return (
    <div className="flex justify-center mt-4 sm:mt-6">
      {Array.from({ length: total }, (_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onDotClick(idx)}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mx-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
            current === idx
              ? "bg-gradient-to-r from-red-500 to-amber-500"
              : "bg-white/20"
          }`}
          aria-label={t("goTo", { number: idx + 1 })}
          aria-current={current === idx ? "true" : "false"}
        />
      ))}
    </div>
  );
}
