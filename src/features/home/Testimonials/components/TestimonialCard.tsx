"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

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
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12"
        aria-live="polite"
        role="group"
        aria-roledescription="slide"
        aria-label={`Testimonial ${current + 1} of ${total}`}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <TestimonialAuthor testimonial={testimonial} />
          <TestimonialQuote quote={testimonial.quote} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function TestimonialAuthor({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="md:w-1/3 w-full">
      <div className="relative max-w-[160px] mx-auto">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full blur-sm"
          aria-hidden="true"
        ></div>
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 mx-auto">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={`Portrait of ${testimonial.author}`}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <h4 className="font-bold">{testimonial.author}</h4>
        <p className="text-white/70 text-sm">{testimonial.role}</p>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex justify-center mt-2"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialQuote({ quote }: { quote: string }) {
  return (
    <div className="md:w-2/3 w-full">
      <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 text-center md:text-left">
        "{quote}"
      </p>
      <div
        className="h-px w-16 bg-gradient-to-r from-red-500 to-amber-500 mx-auto md:mx-0"
        aria-hidden="true"
      ></div>
    </div>
  );
}
