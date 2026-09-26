import Image from "next/image";
import { useTranslations } from "next-intl";

interface BlogCardImageProps {
  image: string;
  title: string;
  category: string;
}

export function BlogCardImage({ image, title, category }: BlogCardImageProps) {
  const t = useTranslations("blog");

  return (
    <div className="relative h-44 sm:h-48 overflow-hidden">
      <Image
        src={image}
        alt={t("imageAlt", { title })}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="absolute top-3 start-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full"
        aria-label={t("categoryLabel", { category })}
      >
        {category}
      </div>
    </div>
  );
}
