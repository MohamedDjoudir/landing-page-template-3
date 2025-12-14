import { useState, useEffect } from "react";
import { testimonialsConfig } from "../config/testimonials.config";

export function useTestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const total = testimonialsConfig.testimonials.length;

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay, total]);

    const next = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev + 1) % total);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    const goTo = (index: number) => {
        setAutoplay(false);
        setCurrent(index);
    };

    const testimonial = testimonialsConfig.testimonials[current];

    return {
        current,
        total,
        testimonial,
        next,
        prev,
        goTo,
    };
}
