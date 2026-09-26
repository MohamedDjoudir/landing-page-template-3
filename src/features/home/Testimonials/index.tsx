"use client";

import { useTranslations } from "next-intl";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import {
  TestimonialCard,
  TestimonialsControls,
  QuoteIcon,
} from "./components";
import { useTestimonialsCarousel } from "./hooks";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const { current, total, testimonial, next, prev, goTo } =
    useTestimonialsCarousel();

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <SectionBackground redSide="start" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <SectionHeader
          titleId="testimonials-heading"
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 sm:mb-12 md:mb-16"
          titleClassName="sm:mb-4"
        />

        <div className="relative max-w-4xl mx-auto">
          <QuoteIcon />

          <div
            className="min-h-[400px] flex items-center"
            role="region"
            aria-roledescription={t("carousel")}
            aria-label={t("region")}
          >
            <TestimonialCard
              testimonial={testimonial}
              current={current}
              total={total}
            />
          </div>

          <TestimonialsControls
            onPrev={prev}
            onNext={next}
            current={current}
            total={total}
            onDotClick={goTo}
          />
        </div>
      </div>
    </section>
  );
}
