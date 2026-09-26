import { useTranslations } from "next-intl";

interface TestimonialQuoteProps {
  quote: string;
}

export function TestimonialQuote({ quote }: TestimonialQuoteProps) {
  const t = useTranslations("testimonials");

  return (
    <div className="md:w-2/3 w-full">
      <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 text-center md:text-start">
        {t("quoted", { quote })}
      </p>
      <div
        className="h-px w-16 bg-gradient-to-r from-red-500 to-amber-500 mx-auto md:mx-0"
        aria-hidden="true"
      ></div>
    </div>
  );
}
