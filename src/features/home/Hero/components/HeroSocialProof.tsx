"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroConfig } from "../config/hero.config";

export function HeroSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
    >
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="text-xs sm:text-sm">
        <span className="text-white/70">Trusted by</span>{" "}
        <span className="font-bold">{heroConfig.stats.trustedBy}</span>{" "}
        <span className="text-white/70">{heroConfig.stats.label}</span>
      </div>
      <div className="flex items-center gap-0.5 sm:gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
    </motion.div>
  );
}
