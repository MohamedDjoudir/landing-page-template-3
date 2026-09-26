"use client";

import { motion } from "framer-motion";
import { GlowFrame } from "@/components/GlowFrame";
import { cn } from "@/lib/utils";

interface FeatureImageProps {
  src: string;
  alt: string;
  className?: string;
  glowClassName?: string;
}

export function FeatureImage({
  src,
  alt,
  className,
  glowClassName,
}: FeatureImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      <GlowFrame
        glowClassName={cn("rounded-2xl", glowClassName)}
        frameClassName="overflow-hidden p-1"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </GlowFrame>
    </motion.div>
  );
}
