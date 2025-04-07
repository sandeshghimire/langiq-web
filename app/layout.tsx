import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";
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
  description: "LangIQ is a universal framework for LLM application development, designed for startups, small, medium to large-scale companies to adopt AI, ML, and LLM workflow. We provide a state-of-the-art AI studio through which you can graphically develop AI applications, interface with frontier large language models from OpenAI, Google, Anthropic, DeepSeek, XAI and our local open source and open weight LLM such as LLAMA , DeepSeek, Geema, qwq, phi etc , . You can interface with local open-source and open-weight LLMs such as Meta LLAMA, DeepSeek, Microsoft PI, Alibaba QWN, etc. You can take your data and convert it into a vector database and work with local and frontier embeddings and use your data as knowledge bases. In addition, you can make local and frontier model knowledge by augmenting data using our state-of-the-art model augmentation. We do this by generating synthetic data based on your data. We provide state-of-the-art fine-tuning using Hugging Face transformer pipeline. Finally, using multiple agents, we provide agentic solutions to solve your unique needs. You can accomplish all this by using our state-of-the-art LangIQ AI studio. AI Studio from LangIQ can be customized for your needs, therefore it can be your own personal AI studio to solve your unique problems. AI Studio lets you collaborate on your workspace and projects with your colleagues, keep track of your progress. It also provides a graphical interface to monitor and debug performance, identify bugs, and fix them.",
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
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-M8RY6DM9EJ`}
          strategy="afterInteractive"
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
      </body>
    </html>
  );
}
