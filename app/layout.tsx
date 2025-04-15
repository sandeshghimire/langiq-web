import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { Toaster } from 'react-hot-toast';
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangIQ | AI Innovation Hub",
  description: "LangIQ is a universal framework for LLM application development. Build, fine-tune, and deploy AI solutions with our state-of-the-art AI studio. Integrate with leading LLMs, manage data, and collaborate with your team efficiently.",
  keywords: [
    "AI Development",
    "LLM Framework",
    "AI Studio",
    "Machine Learning",
    "Large Language Models",
    "OpenAI",
    "Google AI",
    "Anthropic",
    "Vector Database",
    "Model Augmentation",
    "Fine-tuning",
    "Agentic Solutions",
    "LLAMA",
    "DeepSeek",
    "AI Collaboration",
    "AI Debugging",
    "Synthetic Data",
    "Enterprise AI",
    "Hugging Face",
    "AI Workflow"
  ],
  openGraph: {
    title: "LangIQ | Universal Framework for LLM Application Development",
    description: "Develop AI applications with state-of-the-art studio - interface with frontier LLMs, create vector databases, and build agentic solutions for your enterprise.",
    url: "https://langiq.ai",
    siteName: "LangIQ",
    images: [
      {
        url: "https://langiq.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "LangIQ AI Studio Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LangIQ | AI Innovation Hub",
    description: "Universal framework for LLM application development with state-of-the-art AI studio for startups and enterprises.",
    images: ["https://langiq.ai/twitter-image.png"],
  },
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
    canonical: "https://langiq.ai",
  },
  authors: [{ name: "LangIQ Team" }],
  category: "Technology",
  metadataBase: new URL("https://langiq.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>LangIQ | AI Innovation Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-M8RY6DM9EJ`}
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8RY6DM9EJ');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${caveat.variable} bg-gray-950 text-gray-100 antialiased`}
      >
        <BackgroundWrapper />
        <Navbar />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
        <Footer />
        <Toaster position="top-right" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-M8RY6DM9EJ`}
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8RY6DM9EJ');
          `}
        </Script>
        <noscript>
          <img src="https://www.googletagmanager.com/ns.html?id=G-M8RY6DM9EJ" alt="Google Tag Manager" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
      </body>
    </html>
  );
}
