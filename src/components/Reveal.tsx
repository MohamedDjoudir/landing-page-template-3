"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Fade in when scrolled into view instead of on mount. */
  inView?: boolean;
  /** Vertical offset the element rises from. */
  y?: number;
  scale?: number;
  role?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  inView = false,
  y = 20,
  scale,
  role,
}: RevealProps) {
  const target = { opacity: 1, y: 0, ...(scale !== undefined && { scale: 1 }) };

  return (
    <motion.div
      initial={{ opacity: 0, y, ...(scale !== undefined && { scale }) }}
      {...(inView
        ? { whileInView: target, viewport: { once: true } }
        : { animate: target })}
      transition={{ duration, delay }}
      className={className}
      role={role}
    >
      {children}
    </motion.div>
  );
}
