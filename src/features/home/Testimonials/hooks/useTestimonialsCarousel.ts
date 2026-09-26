import { useCallback, useEffect, useState } from "react";
import { AUTOPLAY_INTERVAL_MS, TESTIMONIALS } from "../constants";

export function useTestimonialsCarousel() {
  const total = TESTIMONIALS.length;
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((index) => (index + 1) % total);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [autoplay, total]);

  const next = useCallback(() => {
    setAutoplay(false);
    setCurrent((index) => (index + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setAutoplay(false);
    setCurrent((index) => (index - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setAutoplay(false);
    setCurrent(index);
  }, []);

  return {
    current,
    total,
    testimonial: TESTIMONIALS[current],
    next,
    prev,
    goTo,
  };
}
