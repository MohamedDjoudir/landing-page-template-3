import { useEffect, useRef } from "react";
import { PARALLAX_DIVISOR, PARALLAX_MIN_WIDTH_PX } from "../constants";

/** Nudges the referenced element toward the pointer on wide screens. */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current || window.innerWidth < PARALLAX_MIN_WIDTH_PX) return;

      const moveX = (event.clientX - window.innerWidth / 2) / PARALLAX_DIVISOR;
      const moveY = (event.clientY - window.innerHeight / 2) / PARALLAX_DIVISOR;

      ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return ref;
}
