"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

export function StepCard({ step, index, isLast }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
        <StepCardImage
          image={step.image}
          title={step.title}
          number={step.number}
          index={index}
        />
        <StepCardContent step={step} isLast={isLast} />
      </div>
    </motion.div>
  );
}

function StepCardImage({
  image,
  title,
  number,
  index,
}: {
  image: string;
  title: string;
  number: string;
  index: number;
}) {
  return (
    <div className="relative h-40 sm:h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold">
        {number}
      </div>
    </div>
  );
}

function StepCardContent({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="p-4 sm:p-6 flex-grow flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-sm sm:text-base text-white/70 mb-4 flex-grow">
        {step.description}
      </p>

      {!isLast && (
        <div className="hidden lg:flex items-center justify-end text-amber-400 mt-auto">
          <ArrowRight className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
