import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat, Kalam } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const kalam = Kalam({
  weight: ["400", "700"],
  variable: "--font-kalam",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangIQ - AI Interface",
  description: "Universal AI Interface for Intelligent Data Processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${kalam.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
