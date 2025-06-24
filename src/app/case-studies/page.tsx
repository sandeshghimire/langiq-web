"use client";

import { useState, useRef, useEffect } from "react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import NavigationControls from "./components/NavigationControls";
import WavyBackground from "../components/WavyBackground";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  const scrollToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    slideRefs.current[slideNumber - 1]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Set up intersection observer to update current slide on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentSlide(index + 1);
          }
        },
        { threshold: 0.6 } // Trigger when slide is 60% visible
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden relative">
      <WavyBackground />
      <Slide1
        slideVariants={slideVariants}
        itemVariants={itemVariants}
        isActive={currentSlide === 1}
        scrollToSlide={scrollToSlide}
        setRef={el => slideRefs.current[0] = el}
      />

      <Slide2
        slideVariants={slideVariants}
        itemVariants={itemVariants}
        isActive={currentSlide === 2}
        scrollToSlide={scrollToSlide}
        setRef={el => slideRefs.current[1] = el}
      />

      <Slide3
        slideVariants={slideVariants}
        itemVariants={itemVariants}
        isActive={currentSlide === 3}
        scrollToSlide={scrollToSlide}
        setRef={el => slideRefs.current[2] = el}
      />

      <Slide4
        slideVariants={slideVariants}
        itemVariants={itemVariants}
        isActive={currentSlide === 4}
        scrollToSlide={scrollToSlide}
        setRef={el => slideRefs.current[3] = el}
      />

      <NavigationControls
        currentSlide={currentSlide}
        scrollToSlide={scrollToSlide}
        totalSlides={4}
      />
    </div>
  );
}
