import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LangIQ | AI Innovation Hub",
  description: "Advanced AI solutions and education for the modern enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} bg-gray-950 text-gray-100 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-8 border-t border-gray-800 text-center">
          <p className="font-handwritten text-xl">LangIQ © {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
