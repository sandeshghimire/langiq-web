import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

// Source Serif 4 is the closest free analog to Tiempos (Anthropic's
// in-house display serif). It has a true italics axis, an opsz axis we
// pin to 36 for display-weight headlines, and a slightly cool/warm
// weight curve. Body stays Inter, mono stays JetBrains Mono.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
    "NVIDIA Jetson",
    "Raspberry Pi",
    "AMD Xilinx Zynq",
    "NXP i.MX",
    "TI Sitara",
    "Intel x86",
    "AMD Ryzen Embedded",
    "PREEMPT_RT",
    "HAB AHAB secure boot",
    "bitstream OTA",
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
      className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9f5] text-[#1f1e1c]">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
