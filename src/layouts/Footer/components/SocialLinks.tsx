import Link from "next/link";
import { socialLinks } from "../config/footer.config";

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          className="text-white/50 hover:text-white transition-colors"
        >
          {social.icon}
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
