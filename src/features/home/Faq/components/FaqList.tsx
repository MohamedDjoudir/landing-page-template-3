"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqConfig } from "../config/faq.config";

export function FaqList() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-3 sm:space-y-4"
      >
        {faqConfig.faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </div>
  );
}

interface FaqItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

function FaqItem({ faq, index }: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
      >
        <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-medium hover:no-underline hover:bg-white/5 text-left">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white/70">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
