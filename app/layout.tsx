import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { TelemetryBar } from "@/components/telemetry-bar";

const SITE_URL = "https://ivv.soccentric.com";

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

const TITLE =
  "Independent Validation & Verification for Embedded Systems — SoCcentric";
const DESCRIPTION =
  "The Independent V&V Suite validates every embedded platform — Yocto Linux or FreeRTOS bare-metal — across compute, peripherals, sensors, and environmental conditions. No source-code access required. Six in-house reference platforms. Evidence structured for ISO 26262, DO-178C, IEC 62304, and IEC 61508.";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Architecture diagram of the SoCcentric platform suite — IV&V, HIL, and Datalogger product layers",
};

export const viewport: Viewport = {
  themeColor: "#00D9C0",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "SoCcentric",

  title: {
    default: TITLE,
    template: "%s | SoCcentric",
  },
  description: DESCRIPTION,

  keywords: [
    "independent validation and verification",
    "IV&V",
    "HIL",
    "hardware-in-the-loop",
    "datalogger",
    "data acquisition",
    "data logging",
    "embedded systems testing",
    "Yocto Linux validation",
    "FreeRTOS testing",
    "ISO 26262",
    "DO-178C",
    "IEC 62304",
    "IEC 61508",
    "embedded V&V",
    "hardware validation",
    "FlatBuffers",
    "gRPC embedded",
    "HAL testing",
    "SoC validation",
    "functional safety testing",
    "certification evidence",
    "automotive embedded",
    "aerospace embedded",
    "medical device software",
    "Kria K26",
    "AMD FPGA",
    "FPGA data acquisition",
    "CAN-FD",
    "fault injection",
    "append-only evidence",
  ],

  authors: [{ name: "SoCcentric", url: SITE_URL }],
  creator: "SoCcentric",
  publisher: "SoCcentric",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SoCcentric",
    title: TITLE,
    description:
      "Platform-independent V&V suite for embedded systems. Yocto Linux and FreeRTOS targets. FlatBuffers and gRPC transports. Full coverage: compute, peripherals, sensors, perception, environmental. Evidence for ISO 26262, DO-178C, IEC 62304, IEC 61508.",
    images: [OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
    creator: "@soccentric",
    site: "@soccentric",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00D9C0" }],
  },

  manifest: "/manifest.webmanifest",
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full">
        {children}
        <TelemetryBar />
      </body>
    </html>
  );
}
