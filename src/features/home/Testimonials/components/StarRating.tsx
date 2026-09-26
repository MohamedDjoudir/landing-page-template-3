import { useTranslations } from "next-intl";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  const t = useTranslations("testimonials");

  return (
    <div
      className="flex justify-center mt-2"
      aria-label={t("rating", { rating })}
    >
      {Array.from({ length: rating }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}
