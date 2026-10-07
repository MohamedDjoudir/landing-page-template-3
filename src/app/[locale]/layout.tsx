import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { ThemeProvider } from "@/providers";
import { Header, Footer } from "@/layouts";
import { routing } from "@/i18n/routing";
import { getDirection } from "@/i18n/direction";
import { SITE_URL } from "@/lib/siteUrl";

const inter = Inter({ subsets: ["latin"] });
const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

type LocaleParams = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    generator: "Mohamed Djoudir",
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: t("imageAlt"),
        },
      ],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const font = locale === "ar" ? notoArabic : inter;

  return (
    <html lang={locale} dir={getDirection(locale)} suppressHydrationWarning>
      <body className={`${font.className} bg-black text-white`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
