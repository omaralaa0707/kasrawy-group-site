import type { Metadata } from "next";
import { Geologica, Red_Hat_Text, Vibes, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/locale-provider";
import { ScrollProvider } from "@/components/motion/scroll-provider";
import { ar } from "@/content/ar";
import { en } from "@/content/en";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-geologica",
});
const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-red-hat-text",
});
// Vibes ships one weight and is a thin script face -- used only for short
// display strings, never body copy.
const vibes = Vibes({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-vibes",
});
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "Kasrawy Group — not one car for sale | Egypt",
  description:
    "A concept site built from Kasrawy Group's own Instagram feed: a multi-brand distributor's posts, catalogued honestly — seven self-published, four co-authored with outside media, and not one individual car listing.",
  metadataBase: new URL("https://kasrawy-group-site.vercel.app"),
  icons: { icon: "/mark.svg" },
  openGraph: {
    title: "Kasrawy Group — not one car for sale",
    description:
      "Four brands, four collaborative posts under someone else's byline, and one real gate built from their own mark.",
    locale: "en_US",
    type: "website",
  },
  other: { "theme-color": "#131417" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      translate="no"
      className={`notranslate ${geologica.variable} ${redHatText.variable} ${vibes.variable} ${vazirmatn.variable}`}
    >
      <body className="bg-ground text-cream antialiased">
        <noscript>
          <style>{`[data-flash-item]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
        <LocaleProvider dictionaries={{ ar, en }} defaultLocale="en">
          <ScrollProvider />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
