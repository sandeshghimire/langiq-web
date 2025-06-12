import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "LangIQ - AI Studio Platform",
  description: "LangIQ is a full-stack platform and service provider that helps organizations build, deploy, and scale large language model (LLM) applications. Their flagship AI Studio offers a low-code, visual environment with prompt engineering, retrieval-augmented generation (RAG), multi-agent orchestration, performance monitoring, debugging, and version control. They support both frontier APIs (e.g., OpenAI, Anthropic) and on-premise open-source models, all integrated through a unified Python/JavaScript Tools & MCP library. For secure and efficient on-prem deployments, LangIQ also provides purpose-built AI Box hardware, preconfigured with optimized stacks for training and inference. Their consulting services cover strategic migration roadmaps, workflow design, fine-tuning, RAG pipelines, tool integration, agent development, deployment, and organizational change management, empowering teams to adopt LLM workflows systematically and responsibly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${roboto.variable} ${openSans.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
