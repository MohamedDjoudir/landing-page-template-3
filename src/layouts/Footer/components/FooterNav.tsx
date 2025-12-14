import Link from "next/link";
import { FooterLinkGroup } from "../config/footer.config";

interface FooterNavProps {
  linkGroups: FooterLinkGroup[];
}

export function FooterNav({ linkGroups }: FooterNavProps) {
  return (
    <>
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-lg font-bold mb-4">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
