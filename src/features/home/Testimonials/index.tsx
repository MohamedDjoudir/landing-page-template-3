"use client";

import {
  TestimonialsBackground,
  TestimonialsHeader,
  TestimonialCard,
  TestimonialsControls,
  QuoteIcon,
} from "./components";
import { useTestimonialsCarousel } from "./hooks/useTestimonialsCarousel";

export default function Testimonials() {
  const { current, total, testimonial, next, prev, goTo } =
    useTestimonialsCarousel();

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <TestimonialsBackground />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        <TestimonialsHeader />

        <div className="relative max-w-4xl mx-auto">
          <QuoteIcon />

          <div
            className="min-h-[400px] flex items-center"
            role="region"
            aria-roledescription="testimonial carousel"
            aria-label="Customer testimonials"
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
