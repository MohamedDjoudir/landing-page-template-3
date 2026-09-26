import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SOCIAL_LINKS } from "../constants";

export function SocialLinks() {
  const t = useTranslations("footer.social");

  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ id, href, icon: Icon }) => (
        <Link
          key={id}
          href={href}
          className="text-white/50 hover:text-white transition-colors"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">{t(id)}</span>
        </Link>
      ))}
    </div>
  );
}
