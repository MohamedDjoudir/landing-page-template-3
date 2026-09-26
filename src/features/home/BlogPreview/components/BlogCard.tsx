import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import type { Article } from "../types";
import { BlogCardImage } from "./BlogCardImage";
import { BlogCardMeta } from "./BlogCardMeta";

interface BlogCardProps {
  article: Article;
  index: number;
}

export function BlogCard({ article, index }: BlogCardProps) {
  const t = useTranslations("blog");
  const title = t(`articles.${article.id}.title`);

  return (
    <Reveal inView delay={index * 0.1} className="group">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
        <BlogCardImage
          image={article.image}
          title={title}
          category={t(`categories.${article.category}`)}
        />
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
          <BlogCardMeta
            publishedAt={article.publishedAt}
            readMinutes={article.readMinutes}
          />

          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/70 text-sm sm:text-base mb-4 flex-1 line-clamp-3">
            {t(`articles.${article.id}.excerpt`)}
          </p>

          <Button
            variant="link"
            className="p-0 text-amber-400 hover:text-amber-300 justify-start text-sm sm:text-base focus:ring-2 focus:ring-amber-400 focus:outline-none"
            aria-label={t("readMoreLabel", { title })}
          >
            {t("readMore")}
            <ArrowRight
              className="ms-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rtl:rotate-180"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
