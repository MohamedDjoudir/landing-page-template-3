"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Fade in when scrolled into view instead of on mount. */
  inView?: boolean;
  role?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  inView = false,
  role,
}: RevealProps) {
  const target = { opacity: 1 };

  return (
    <motion.div
      initial={{ opacity: 0 }}
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
