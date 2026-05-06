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
  title: "Independent Validation and Verification for Embedded Systems — SoCcentric",
  description:
    "The Independent V&V Suite validates every embedded platform — Yocto Linux or FreeRTOS bare-metal — across compute, peripherals, sensors, and environmental conditions. No source-code access required. Six in-house reference platforms. Evidence structured for ISO 26262, DO-178C, IEC 62304, and IEC 61508.",
  openGraph: {
    title: "Independent Validation and Verification for Embedded Systems — SoCcentric",
    description:
      "Platform-independent V&V suite for embedded systems. Yocto Linux and FreeRTOS targets. FlatBuffers and gRPC transports. Full coverage: compute, peripherals, sensors, perception, environmental. Evidence for ISO 26262, DO-178C, IEC 62304, IEC 61508.",
    // TODO: swap in real OG image at /public/og.png
    images: [{ url: "/og.png", alt: "Architecture diagram of the Independent V&V Suite showing the HAL adapter, target client, server, and Web UI layers with data flow between them" }],
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
