import { Calendar, Clock } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

interface BlogCardMetaProps {
  publishedAt: string;
  readMinutes: number;
}

export function BlogCardMeta({ publishedAt, readMinutes }: BlogCardMetaProps) {
  const t = useTranslations("blog");
  const format = useFormatter();
  const date = format.dateTime(new Date(publishedAt), {
    dateStyle: "long",
    timeZone: "UTC",
  });
  const readTime = t("readTime", { minutes: readMinutes });

  return (
    <div className="flex items-center gap-3 text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 flex-wrap">
      <div
        className="flex items-center gap-1"
        aria-label={t("publishedLabel", { date })}
      >
        <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        <span>{date}</span>
      </div>
      <div
        className="flex items-center gap-1"
        aria-label={t("readTimeLabel", { readTime })}
      >
        <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
        <span>{readTime}</span>
      </div>
    </div>
  );
}
