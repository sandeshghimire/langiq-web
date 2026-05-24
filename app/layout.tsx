import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { TelemetryBar } from "@/components/telemetry-bar";
import { SmoothScroll } from "@/components/smooth-scroll";

const SITE_URL = "https://soccentric.com";

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
  "SoCcentric — IV&V, HIL & Datalogger for embedded validation.";
const DESCRIPTION =
  "Independent validation, hardware-in-the-loop, and field capture on one shared platform. We run on the six silicon families behind ~90% of embedded designs. Audit-survivable test records mapped to ISO 26262, DO-178C, IEC 62304, and IEC 61508. No source-code access required.";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "SoCcentric — one platform for IV&V, HIL, and Datalogger across six embedded silicon families.",
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
    "field data capture",
    "embedded systems testing",
    "Yocto Linux validation",
    "FreeRTOS testing",
    "ISO 26262",
    "DO-178C",
    "IEC 62304",
    "IEC 61508",
    "embedded V&V",
    "hardware validation",
    "HAL testing",
    "SoC validation",
    "functional safety testing",
    "certification records",
    "audit trail",
    "automotive embedded",
    "aerospace embedded",
    "medical device software",
    "CAN-FD",
    "fault injection",
    "fault injection testing",
    "on-prem AI",
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
      "Independent validation, hardware-in-the-loop, and field capture on one shared platform. Audit-survivable test records for ISO 26262, DO-178C, IEC 62304, IEC 61508. No source-code access required.",
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-61ZPWZPWJN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-61ZPWZPWJN');
            `,
          }}
        />
      </head>
      <body className="min-h-full">
        <SmoothScroll>
          {children}
          <TelemetryBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
