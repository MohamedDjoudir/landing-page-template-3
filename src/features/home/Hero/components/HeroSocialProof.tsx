import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { Avatar } from "@/components/ui/avatar";
import {
  HERO_AVATAR_COUNT,
  HERO_RATING,
  HERO_TRUSTED_BY_COUNT,
} from "../constants";

export function HeroSocialProof() {
  const t = useTranslations("hero");

  return (
    <Reveal
      delay={0.4}
      className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
    >
      <div className="flex -space-x-2 rtl:space-x-reverse">
        {Array.from({ length: HERO_AVATAR_COUNT }, (_, i) => (
          <Avatar
            key={i}
            className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-black bg-gray-800"
          />
        ))}
      </div>
      <div className="text-xs sm:text-sm text-white/70">
        {t.rich("trustedBy", {
          count: HERO_TRUSTED_BY_COUNT,
          strong: (chunks) => (
            <span className="font-bold text-white">{chunks}</span>
          ),
        })}
      </div>
      <div className="flex items-center gap-0.5 sm:gap-1">
        {Array.from({ length: HERO_RATING }, (_, i) => (
          <Star
            key={i}
            className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
    </Reveal>
  );
}
