"use client";

import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import ConsultingSection from '@/components/ConsultingSection';
import PlatformSection from '@/components/PlatformSection';
import PartnershipSection from '@/components/PartnershipSection';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 5; // Updated from 4 to 5

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('scroll-container');
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const windowHeight = window.innerHeight;
        const currentSection = Math.round(scrollTop / windowHeight);
        setActiveSection(currentSection);
      }
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative ${montserrat.className}`}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${((activeSection + 1) / totalSections) * 100}%` }}
        />
      </div>

      {/* Page Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === index
              ? 'bg-purple-500 scale-125'
              : 'bg-gray-600 hover:bg-gray-400'
              }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      {activeSection < totalSections - 1 && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50">
          <motion.button
            onClick={() => scrollToSection(activeSection + 1)}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      )}

      <div
        id="scroll-container"
        className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`
          #scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <HeroSection />
        <ChallengeSection />
        <ConsultingSection />
        <PlatformSection />
        <PartnershipSection />
      </div>
    </div>
  );
}
