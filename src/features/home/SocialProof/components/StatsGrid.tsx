"use client";

import { motion } from "framer-motion";
import { socialProofConfig } from "../config/socialproof.config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function StatsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 auto-rows-fr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Key platform statistics"
    >
      {socialProofConfig.stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </motion.div>
  );
}

interface Stat {
  value: string;
  label: string;
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <motion.div className="text-center h-full" variants={itemVariants}>
      <div className="relative group h-full">
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"
          aria-hidden="true"
        ></div>
        <div
          className="relative bg-black/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 h-full flex flex-col justify-center"
          role="presentation"
        >
          <div
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-1 sm:mb-2 truncate"
            aria-hidden="true"
          >
            {stat.value}
          </div>
          <p
            className="text-white/70 text-sm sm:text-base truncate"
            aria-label={`${stat.value} ${stat.label}`}
          >
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
