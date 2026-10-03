import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./home-refresh.css";
import "./category.css";
import "./home-categories.css";
import "./brand-theme.css";
import "./social-category.css";
import "./whatsapp.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [{ url: "/videos/cinematic/posters/film-06.jpg", width: 540, height: 960, alt: "PRODYOUS portfolio" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: ["/videos/cinematic/posters/film-06.jpg"] },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
