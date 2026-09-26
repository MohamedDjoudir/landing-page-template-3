import { useTranslations } from "next-intl";
import {
  FooterLogo,
  SocialLinks,
  FooterNav,
  FooterLegal,
} from "./components";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div>
            <FooterLogo />
            <p className="text-white/70 mb-6">{t("description")}</p>
            <SocialLinks />
          </div>

          <FooterNav />
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
}
