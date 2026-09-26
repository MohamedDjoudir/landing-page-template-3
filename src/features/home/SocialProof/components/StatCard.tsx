"use client";

import { motion } from "framer-motion";
import { GlowFrame } from "@/components/GlowFrame";
import { FADE_ITEM_ANIMATION } from "../constants";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div className="text-center h-full" variants={FADE_ITEM_ANIMATION}>
      <GlowFrame
        className="group h-full"
        glowClassName="-inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"
        frameClassName="bg-black/70 rounded-lg p-4 sm:p-6 h-full flex flex-col justify-center"
      >
        <div
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-1 sm:mb-2 truncate"
          aria-hidden="true"
        >
          {value}
        </div>
        <p
          className="text-white/70 text-sm sm:text-base truncate"
          aria-label={`${value} ${label}`}
        >
          {label}
        </p>
      </GlowFrame>
    </motion.div>
  );
}
