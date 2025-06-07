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

        // More precise section detection with threshold
        const threshold = containerHeight * 0.3; // 30% threshold
        const currentSection = Math.floor((scrollTop + threshold) / containerHeight);
        const boundedSection = Math.max(0, Math.min(currentSection, totalSections - 1));

        if (boundedSection !== activeSection) {
          setActiveSection(boundedSection);
        }
      }

      // Optimized debouncing with reduced timeout
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
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

    // Enhanced wheel handling for smoother section transitions
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;

      const threshold = 50; // Minimum delta for section change

      if (Math.abs(event.deltaY) > threshold) {
        if (event.deltaY > 0 && activeSection < totalSections - 1) {
          event.preventDefault();
          scrollToSection(activeSection + 1);
        } else if (event.deltaY < 0 && activeSection > 0) {
          event.preventDefault();
          scrollToSection(activeSection - 1);
        }
      }
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);

      // Initial section detection
      handleScroll();

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        scrollContainer.removeEventListener('wheel', handleWheel);
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

      // Enhanced smooth scrolling with easing
      const startScrollTop = scrollContainer.scrollTop;
      const distance = targetScrollTop - startScrollTop;
      const duration = 800; // Longer duration for smoother animation
      let startTime: number;

      function easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }

      function animateScroll(currentTime: number) {
        if (!startTime) startTime = currentTime;
        if (!scrollContainer) return; // Additional safety check

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);
        const currentScrollTop = startScrollTop + (distance * easedProgress);

        scrollContainer.scrollTop = currentScrollTop;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
        }
      }

      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className={`relative bg-gray-900 min-h-screen ${montserrat.className}`}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 transition-all duration-500 ease-in-out-smooth shadow-lg scroll-indicator"
          style={{
            width: `${((activeSection + 1) / totalSections) * 100}%`,
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Page Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out-smooth backdrop-blur-sm scroll-indicator ${activeSection === index
              ? 'bg-gradient-to-r from-purple-500 to-cyan-400 scale-125 shadow-lg shadow-purple-500/30'
              : 'bg-gray-600/70 hover:bg-gray-400/70 border border-gray-500/30 hover:scale-110'
              }`}
            style={{ transform: 'translateZ(0)' }}
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
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/70 hover:text-white transition-all duration-500 ease-in-out-smooth p-2 rounded-full backdrop-blur-sm bg-gray-800/30 border border-gray-600/30 hover:border-purple-500/50 scroll-indicator"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      )}

      <div
        id="scroll-container"
        className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth bg-gray-900 scroll-container-enhanced"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'y mandatory',
          overscrollBehavior: 'contain',
          touchAction: 'pan-y',
          position: 'relative',
          zIndex: 1,
          transform: 'translateZ(0)',
          willChange: 'scroll-position',
          contain: 'layout style paint'
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
