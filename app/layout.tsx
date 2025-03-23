import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";
import BackgroundWrapper from "../components/BackgroundWrapper";

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
        className={`${montserrat.variable} ${caveat.variable} bg-gray-950 text-gray-100 antialiased`}
      >
        <BackgroundWrapper />
        <Navbar />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}
