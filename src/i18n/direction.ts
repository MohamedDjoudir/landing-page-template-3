import type { Locale } from "./routing";

const RTL_LOCALES: readonly Locale[] = ["ar"];

export type Direction = "ltr" | "rtl";

export function getDirection(locale: string): Direction {
  return RTL_LOCALES.includes(locale as Locale) ? "rtl" : "ltr";
}
