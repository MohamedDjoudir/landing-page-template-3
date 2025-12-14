import Link from "next/link";
import { FooterLogo, SocialLinks, FooterNav } from "./components";
import { footerConfig } from "./config/footer.config";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div>
            <FooterLogo />
            <p className="text-white/70 mb-6">{footerConfig.description}</p>
            <SocialLinks />
          </div>

          <FooterNav linkGroups={footerConfig.linkGroups} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nova. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerConfig.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
