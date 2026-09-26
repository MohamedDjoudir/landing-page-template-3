import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { TestimonialsDots } from "./TestimonialsDots";

interface TestimonialsControlsProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
  onDotClick: (index: number) => void;
}

const ARROW_BUTTON_CLASS =
  "h-8 w-8 sm:h-10 sm:w-10 rounded-full border-white/10 hover:bg-white/10 focus:ring-2 focus:ring-white focus:outline-none";
const ARROW_ICON_CLASS = "h-4 w-4 sm:h-5 sm:w-5 rtl:rotate-180";

export function TestimonialsControls({
  onPrev,
  onNext,
  current,
  total,
  onDotClick,
}: TestimonialsControlsProps) {
  const t = useTranslations("testimonials");

  return (
    <>
      <div
        className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4"
        aria-label={t("navigation")}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          className={ARROW_BUTTON_CLASS}
          aria-label={t("previous")}
        >
          <ChevronLeft className={ARROW_ICON_CLASS} aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className={ARROW_BUTTON_CLASS}
          aria-label={t("next")}
        >
          <ChevronRight className={ARROW_ICON_CLASS} aria-hidden="true" />
        </Button>
      </div>

      <TestimonialsDots
        current={current}
        total={total}
        onDotClick={onDotClick}
      />
    </>
  );
}
