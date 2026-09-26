import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Testimonial } from "../types";
import { StarRating } from "./StarRating";

interface TestimonialAuthorProps {
  testimonial: Testimonial;
}

export function TestimonialAuthor({ testimonial }: TestimonialAuthorProps) {
  const t = useTranslations("testimonials.items");
  const author = t(`${testimonial.id}.author`);

  return (
    <div className="md:w-1/3 w-full">
      <div className="relative max-w-[160px] mx-auto">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full blur-sm"
          aria-hidden="true"
        ></div>
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 mx-auto">
          <Image
            src={testimonial.avatar}
            alt={t(`${testimonial.id}.portraitAlt`, { author })}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <h4 className="font-bold">{author}</h4>
        <p className="text-white/70 text-sm">{t(`${testimonial.id}.role`)}</p>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}
