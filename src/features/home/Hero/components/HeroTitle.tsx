"use client";

import { motion } from "framer-motion";
import { heroConfig } from "../config/hero.config";

export function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
    >
      <span className="block">{heroConfig.title.line1}</span>
      <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
        {heroConfig.title.line2}
      </span>
    </motion.h1>
  );
}
