import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css";
import { Header } from "@/components/header";

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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${roboto.variable} ${openSans.variable} ${inter.className} antialiased h-full overflow-hidden relative`}
      >
        {/* Background Animation */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -inset-[100px] opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
          </div>
        </div>

        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="h-full w-full overflow-auto relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
