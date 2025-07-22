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
        <title>Sandesh Ghimire - LLM Consultant</title>
        <meta name="description" content="LLM Consultant & AI Strategy Advisor" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>





        <main className="py-8 px-4">
          <div className="max-w-4xl mx-auto bg-white">



            <div>
              {/* Header Section */}
              <div className="text-gray-800 p-8">
                <div className="text-center">
                  <h1 className="text-3xl font-black mb-2 uppercase ">SOCCENTRIC</h1>
                  <p className="text-lg font-normal mb-4 uppercase">EMBEDDED SYSTEM DESIGN AND DEVELOPMENT </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-black">
                    <span>sandesh@soccentric.com</span>
                    <span>+1 (669) 356-1998</span>
                    <span>https://www.linkedin.com/in/sandesh-ghimire-34a43894/</span>
                    <span>https://github.com/soccentric</span>
                  </div>
                </div>
              </div>
              <Navigation />
            </div>


            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
