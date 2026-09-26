"use client";

import { useLocale } from "next-intl";
import { getDirection } from "@/i18n/direction";

export function useTextDirection() {
  const direction = getDirection(useLocale());
  return {
    direction,
    isRtl: direction === "rtl",
    /** 1 in left-to-right layouts, -1 in right-to-left ones; multiplies horizontal offsets. */
    sign: direction === "rtl" ? -1 : 1,
  };
}
