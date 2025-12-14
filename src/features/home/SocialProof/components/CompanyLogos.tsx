"use client";

import Image from "next/image";
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

export function CompanyLogos() {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-8 md:gap-x-12 mb-12 sm:mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Companies using our platform"
    >
      {socialProofConfig.companies.map((company, index) => (
        <motion.div
          key={index}
          className="opacity-60 hover:opacity-100 transition-all duration-300"
          variants={itemVariants}
        >
          <div className="w-[30px] h-[30px] sm:w-[80px] sm:h-[80px] md:h-[40px] flex items-center justify-center">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={60}
              height={60}
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
