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
                  <h1 className="text-3xl font-black mb-2 uppercase ">Sandesh Ghimire</h1>
                  <p className="text-lg font-normal mb-4 uppercase">LLM Consultant & AI Strategy Advisor</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-light ">
                    <span>sandesh@langiq.ai</span>
                    <span>+1 (555) 123-4567</span>
                    <span>linkedin.com/in/sandeshghimire</span>
                    <span>github.com/langiqia</span>
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
