import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

// The manifest format allows a space-separated purpose list; Next's type names
// one value only.
const ICON_PURPOSE = "any maskable" as unknown as "maskable";

// Served at /manifest.webmanifest. The app name is `brand.name` from the
// default locale's messages, so renaming the brand renames the installed app.
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;
  const name: string = messages.brand.name;

  return {
    name,
    short_name: name,
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: ICON_PURPOSE,
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: ICON_PURPOSE,
      },
    ],
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    start_url: "/",
  };
}
