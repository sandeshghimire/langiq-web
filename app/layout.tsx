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
  description: "Advanced AI solutions and education for the modern enterprise",
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
            gtag('config', 'UA-168163636-1');
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
