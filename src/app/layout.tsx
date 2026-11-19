import type { Metadata, Viewport } from "next";
import { Cinzel, EB_Garamond, Inter } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-cinzel", display: "swap" });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-garamond", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Through Their Eyes — Bible History Trivia",
    template: "%s · Through Their Eyes",
  },
  description:
    "A trivia game that teaches the Hebrew Bible / Old Testament and the New Testament through the eyes of the people who lived them — with sources for every answer.",
  applicationName: "Through Their Eyes",
};

export const viewport: Viewport = {
  themeColor: "#07060f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <TopBar />
        <main id="main" className="mx-auto w-full max-w-3xl px-4 pb-32 pt-4">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
