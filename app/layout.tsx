import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curatedestates.zainahmed.net"),
  title: "Curated Estates | Luxury Real Estate & Mortgage Advisory in the GTA",
  description: "Curated Estates represents distinguished architectural properties, waterfront residences, and penthouses across the Greater Toronto Area with integrated mortgage advisory.",
  openGraph: {
    title: "Curated Estates | Real Estate & Mortgage Advisory",
    description: "Curated Estates represents distinguished architectural properties and penthouses across the GTA.",
    url: "https://curatedestates.zainahmed.net",
    siteName: "Curated Estates",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground flex min-h-screen flex-col`}
      >
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
