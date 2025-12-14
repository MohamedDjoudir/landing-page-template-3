"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { heroConfig } from "../config/hero.config";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
    >
      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
      <span className="font-medium">{heroConfig.badge}</span>
    </motion.div>
  );
}
