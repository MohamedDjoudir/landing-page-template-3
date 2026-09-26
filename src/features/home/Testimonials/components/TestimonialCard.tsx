"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTextDirection } from "@/hooks";
import type { Testimonial } from "../types";
import { TestimonialAuthor } from "./TestimonialAuthor";
import { TestimonialQuote } from "./TestimonialQuote";

interface TestimonialCardProps {
  testimonial: Testimonial;
  current: number;
  total: number;
}

export function TestimonialCard({
  testimonial,
  current,
  total,
}: TestimonialCardProps) {
  const t = useTranslations("testimonials");
  const { sign } = useTextDirection();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 100 * sign }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 * sign }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12"
        aria-live="polite"
        role="group"
        aria-roledescription={t("slide")}
        aria-label={t("slideLabel", { current: current + 1, total })}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <TestimonialAuthor testimonial={testimonial} />
          <TestimonialQuote
            quote={t(`items.${testimonial.id}.quote`)}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
