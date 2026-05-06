import type { Metadata } from "next";
import { Instrument_Serif, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Independent Validation & Verification — SoCcentric",
  description:
    "Production-grade IV&V suite for the entire SoCcentric platform family. One uniform interface across Arches, Acadia, Zion, Pinnacle, Joshua, and Sequoia.",
  openGraph: {
    title: "Independent Validation & Verification — SoCcentric",
    description:
      "Production-grade IV&V suite for the entire SoCcentric platform family.",
    // TODO: swap in real OG image at /public/og.png
    images: [{ url: "/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${sora.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
