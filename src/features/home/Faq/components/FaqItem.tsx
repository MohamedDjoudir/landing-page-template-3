import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  id: string;
  index: number;
}

export function FaqItem({ id, index }: FaqItemProps) {
  const t = useTranslations("faq.items");

  return (
    <Reveal inView duration={0.3} delay={index * 0.1}>
      <AccordionItem
        value={id}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
      >
        <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-medium hover:no-underline hover:bg-white/5 text-start">
          {t(`${id}.question`)}
        </AccordionTrigger>
        <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white/70">
          {t(`${id}.answer`)}
        </AccordionContent>
      </AccordionItem>
    </Reveal>
  );
}
