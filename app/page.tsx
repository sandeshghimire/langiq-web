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
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSections = 5;

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollContainer = document.getElementById('scroll-container');
      if (scrollContainer && !isScrolling) {
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.clientHeight;

        // More accurate section detection
        const currentSection = Math.floor((scrollTop + containerHeight / 2) / containerHeight);
        const boundedSection = Math.max(0, Math.min(currentSection, totalSections - 1));

        setActiveSection(boundedSection);
      }

      // Clear existing timeout and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle navigation keys when not focused on an input element
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        if (activeSection < totalSections - 1) {
          scrollToSection(activeSection + 1);
        }
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        if (activeSection > 0) {
          scrollToSection(activeSection - 1);
        }
      } else if (event.key === 'Home') {
        event.preventDefault();
        scrollToSection(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('keydown', handleKeyDown);

      // Initial section detection
      handleScroll();

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        document.removeEventListener('keydown', handleKeyDown);
        clearTimeout(scrollTimeout);
      };
    }
  }, [isScrolling, totalSections, activeSection]);

  const scrollToSection = (sectionIndex: number) => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer && sectionIndex !== activeSection) {
      setIsScrolling(true);

      const containerHeight = scrollContainer.clientHeight;
      const targetScrollTop = sectionIndex * containerHeight;

      scrollContainer.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });

      // Let the scroll event handler update the active section naturally
      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    }
  };

  return (
    <div className={`relative bg-gray-900 min-h-screen ${montserrat.className}`}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 transition-all duration-300 shadow-lg"
          style={{ width: `${((activeSection + 1) / totalSections) * 100}%` }}
        />
      </div>

      {/* Page Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${activeSection === index
              ? 'bg-gradient-to-r from-purple-500 to-cyan-400 scale-125 shadow-lg shadow-purple-500/30'
              : 'bg-gray-600/70 hover:bg-gray-400/70 border border-gray-500/30'
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
            className="text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full backdrop-blur-sm bg-gray-800/30 border border-gray-600/30 hover:border-purple-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      )}

      <div
        id="scroll-container"
        className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth bg-gray-900"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'y mandatory',
          overscrollBehavior: 'contain',
          touchAction: 'pan-y',
          position: 'relative',
          zIndex: 1
        }}
      >
        <style jsx>{`
          #scroll-container::-webkit-scrollbar {
            display: none;
          }
          #scroll-container {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scroll-snap-stop: always;
          }
          
          /* Ensure consistent scroll snap behavior */
          @supports (scroll-snap-type: y mandatory) {
            #scroll-container {
              scroll-snap-type: y mandatory;
            }
          }
          
          /* Optimize for different devices */
          @media (hover: hover) and (pointer: fine) {
            /* Desktop - stricter snapping */
            #scroll-container {
              scroll-snap-type: y mandatory;
            }
          }
          
          @media (hover: none) and (pointer: coarse) {
            /* Mobile - more flexible snapping */
            #scroll-container {
              scroll-snap-type: y proximity;
            }
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
