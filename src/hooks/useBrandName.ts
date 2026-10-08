import { useTranslations } from "next-intl";

/** The brand name from `brand.name` in the messages, for texts that say it through `{brand}`. */
export function useBrandName() {
  return useTranslations("brand")("name");
}
