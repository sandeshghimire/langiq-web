import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat, Kalam } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
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
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Articles", path: "/articles" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Applications", path: "/applications" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M8RY6DM9EJ"
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
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${kalam.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-60 backdrop-blur-lg bg-gray-900/80 shadow-md border-b border-gray-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <h1 className="text-2xl handwriting font-bold text-blue-200">LangIQ</h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="handwriting-alt text-gray-300 hover:bg-blue-600/10 hover:text-blue-200 px-3 py-2 rounded-md text-md font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-200 hover:bg-gray-800/50 focus:outline-none"
                  aria-label="Open main menu"
                >
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <div className="hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="handwriting-alt block text-gray-300 hover:bg-blue-600/10 hover:text-blue-200 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Add padding to the top of the main content to account for the fixed nav */}

        <div className="pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
