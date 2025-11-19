"use client";

import "./globals.css";
import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Soccentric - Embedded Systems Consulting</title>
        <meta name="description" content="Embedded Systems Consultant & Development Services" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen bg-gradient-to-br from-zinc-50 via-gray-50 to-zinc-100 flex justify-center items-center px-4 py-8 relative overflow-x-hidden">
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-amber-500 blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating board images */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]">
          <img src="/som-k26-main.jpg" alt="" className="absolute top-20 right-32 w-64 animate-float" style={{ animationDelay: '0s' }} />
          <img src="/FRDM-i.MX93-TOP.png" alt="" className="absolute bottom-32 left-20 w-56 animate-float" style={{ animationDelay: '2s' }} />
          <img src="/zuboard.png" alt="" className="absolute top-1/2 right-16 w-48 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <nav className="fixed top-1/2 -translate-y-1/2 w-64 z-10 left-[max(1rem,calc(50vw-720px-16rem-2rem))] animate-slideInLeft">
          <Navigation />
        </nav>
        <main className="min-h-screen flex items-center justify-center relative z-10">
          <div className="max-w-[1440px] bg-white/80 backdrop-blur-sm shadow-2xl md:px-16 md:py-20 border border-amber-200/50 hover-lift rounded-lg">
            <div className="max-w-[1440px] mx-auto">
              {/* Header Section */}
              <div className="text-gray-800 p-8 animate-fadeInUp">
                <div className="text-center">
                  <h1 className="text-3xl font-black mb-2 uppercase tracking-wider bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">Soccentric</h1>
                  <p className="text-lg font-normal mb-4 uppercase tracking-wide text-gray-600">Embedded Systems Consulting</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-black text-gray-700">
                    <span className="hover:text-blue-600 transition-smooth cursor-pointer">sandesh@soccentric.com</span>
                    <span className="hover:text-blue-600 transition-smooth">+1 (669) 356-1998</span>
                    <span className="hover:text-blue-600 transition-smooth cursor-pointer">https://github.com/Soccentric</span>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
