import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Site-wide metadata. Per-route metadata in each page.tsx file extends
// this — Next.js merges them automatically.
export const metadata: Metadata = {
  // metadataBase resolves all relative URLs in openGraph.images /
  // twitter.images. The static export is hosted at the marketing domain.
  metadataBase: new URL("https://soccentric.com"),
  title: {
    default: "SoCcentric — Production Embedded Linux Platforms",
    template: "%s · SoCcentric",
  },
  description: "Six embedded platforms. One complete production software stack on every one. From silicon to bring-up, kernels, OTA, and handoff.",
  keywords: [
    "embedded Linux",
    "Yocto BSP",
    "U-Boot",
    "FSBL",
    "Zynq OpenAMP",
    "i.MX SPL U-Boot",
    "RAUC A/B rollback",
    "PRU EtherCAT",
    "Jetson",
    "Raspberry Pi CM5",
    "Xilinx Zynq",
    "NXP i.MX",
    "TI Sitara",
  ],
  openGraph: {
    type: "website",
    siteName: "SoCcentric",
    title: "SoCcentric — Production Embedded Linux Platforms",
    description: "Six embedded platforms. One complete production software stack on every one.",
    url: "https://soccentric.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoCcentric — Production Embedded Linux Platforms",
    description: "Six embedded platforms. One complete production software stack on every one.",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf8] text-[#16181a]">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
