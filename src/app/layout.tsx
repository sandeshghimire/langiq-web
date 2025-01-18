import { GoogleAnalytics } from '@next/third-parties/google'
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Nav} from "@/app/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangIQ : Secure and accurate LLM solutions for enterprises",
  description: "Enterprise AI Solutions,\n" +
      "Large Language Models,\n" +
      "LLM Development,\n" +
      "Generative AI Company,\n" +
      "AI Consulting Silicon Valley,\n" +
      "Custom AI Models,\n" +
      "Enterprise LLM Integration,\n" +
      "AI Model Optimization,\n" +
      "Artificial Intelligence Solutions,\n" +
      "Enterprise AI Implementation,\n" +
      "Enterprise Generative AI Solutions San Jose,\n" +
      "Custom LLM Development Silicon Valley,\n" +
      "AI Model Integration for Enterprises,\n" +
      "Enterprise-grade Language Model Solutions,\n" +
      "Generative AI Consulting Services,\n" +
      "LLM Architecture Design,\n" +
      "AI Model Fine-tuning,\n" +
      "Enterprise AI Systems,\n" +
      "Neural Network Optimization,\n" +
      "AI Infrastructure Development,\n" +
      "Silicon Valley AI Company,\n" +
      "San Jose AI Solutions,\n" +
      "Bay Area LLM Development,\n" +
      "California AI Consultancy,\n" +
      "Silicon Valley Tech Innovation,\n",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className="flex flex-col   ">
        <Nav />
        <div className="flex container mx-auto  py-10 ">
            {children}
            <GoogleAnalytics gaId="UA-168163636-1" />
        </div>
    </div>
    </body>
    </html>
);
}
