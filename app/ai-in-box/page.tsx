"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={`font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              LangIQ: AI in a Box
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              An all-inclusive framework providing you with powerful hardware, optimized OS, and comprehensive LangIQ libraries
            </p>
          </div>
        </div>
      </section>

      {/* Main content section with hardware info */}
      <section className={`py-12 bg-gray-900 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hardware Lineup Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-purple-400 mb-6">LangIQ AI Box Product Lineup</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built hardware solutions optimized for AI workloads, ranging from inference to training at scale.
              Each system comes with our complete software stack pre-installed.
            </p>
          </div>

          {/* LangIQ AI Box - x86 (Image on right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box - x86</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> 16 cores, 32 threads</li>
                <li><span className="font-medium text-purple-300">GPU:</span> 40-core high-performance</li>
                <li><span className="font-medium text-purple-300">Memory:</span> 128GB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 4TB SSD</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Model inference, small to mid-size model training and augmentation</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
              <Image
                src="/ai-box-standard.jpg"
                alt="LangIQ AI Box - x86"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* LangIQ AI Box Plus - ARM64 (Image on left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
              <Image
                src="/ai-box-plus.jpg"
                alt="LangIQ AI Box Plus - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Plus - ARM64</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> 20-core ARM x64</li>
                <li><span className="font-medium text-purple-300">GPU:</span> NVIDIA GB10 Superchip</li>mz559qwuj3or.jpeg"
                <li><span className="font-medium text-purple-300">Memory:</span> 128GB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 4TB SSD</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Medium to high-end model inference, mid-size model training</li>
              </ul>
            </div>
          </div>

          {/* LangIQ AI Box Pro - ARM64 (Image on right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Pro - ARM64</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">GPU:</span> 1x NVIDIA Blackwell Ultra</li>
                <li><span className="font-medium text-purple-300">CPU:</span> 1x Grace-72 Core Neoverse V2</li>
                <li><span className="font-medium text-purple-300">GPU Memory:</span> Up to 288GB HBM3e | 8 TB/s</li>
                <li><span className="font-medium text-purple-300">CPU Memory:</span> Up to 496GB LPDDR5X | Up to 396 GB/s</li>
                <li><span className="font-medium text-purple-300">Best for:</span> Advanced AI workloads, optimized for medium to high-end model inference and training</li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500">
              <Image
                src="/ai-box-pro.jpg"
                alt="LangIQ AI Box Pro - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* LangIQ AI Box Pro MAX - ARM64 (Image on left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500 order-2 md:order-1">
              <Image
                src="/ai-box-pro-max.jpg"
                alt="LangIQ AI Box Pro MAX - ARM64"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🔹 LangIQ AI Box Pro MAX - ARM64</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-purple-300">CPU:</span> AMD Threadripper with 192 cores</li>
                <li><span className="font-medium text-purple-300">GPU:</span> Multiple NVIDIA RTX PRO 6000 Blackwell Workstation Edition (up to 4x)</li>
                <li><span className="font-medium text-purple-300">Memory:</span> Up to 1TB RAM</li>
                <li><span className="font-medium text-purple-300">Storage:</span> 36TB SSD</li>
                <li><span className="font-medium text-purple-300">Best for:</span> AI power users requiring high-end inference and mid-size model training at scale</li>
              </ul>
            </div>
          </div>

          {/* Included Software Section */}
          <div className="bg-gray-800 p-8 rounded-xl border border-purple-500/30 mb-16 shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Included Software</h3>
            <div className="text-gray-300">
              <p className="mb-4">Every LangIQ AI Box comes pre-installed with:</p>
              <ul className="space-y-2 mb-4">
                <li>• Ubuntu-based OS optimized for AI/ML workloads</li>
                <li>• GPU-accelerated AI and ML development libraries</li>
                <li>• Complete LangIQ library suite:</li>
                <ul className="pl-6 space-y-1 mt-2">
                  <li>- LangIQ Prompt Library</li>
                  <li>- LangIQ RAG/CAG Library</li>
                  <li>- LangIQ Tools and MCP Library</li>
                  <li>- LangIQ LLM Augmentation Library</li>
                  <li>- LangIQ LLM Fine-Tune Library</li>
                  <li>- LangIQ Agents Orchestration Library</li>
                  <li>- LangIQ Application Development Framework</li>
                </ul>
                <li>• License for LangIQ AI Studio</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              <span>Request Pricing & Availability</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
