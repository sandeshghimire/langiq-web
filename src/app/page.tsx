"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      {/* Slide 1 */}
      <motion.div
        ref={el => slideRefs.current[0] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-gray-50 px-4 md:px-12"
        initial="hidden"
        animate={currentSlide === 1 ? "visible" : "hidden"}
        variants={slideVariants}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Introduction
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl text-center"
          variants={itemVariants}
        >
          Welcome to our presentation. This is the first slide containing some introductory text.
        </motion.p>
      </motion.div>

      {/* Slide 2 */}
      <motion.div
        ref={el => slideRefs.current[1] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-blue-50 px-4 md:px-12"
        initial="hidden"
        animate={currentSlide === 2 ? "visible" : "hidden"}
        variants={slideVariants}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          About Us
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl text-center"
          variants={itemVariants}
        >
          We are a team of professionals dedicated to creating innovative solutions.
        </motion.p>
      </motion.div>

      {/* Slide 3 */}
      <motion.div
        ref={el => slideRefs.current[2] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-green-50 px-4 md:px-12"
        initial="hidden"
        animate={currentSlide === 3 ? "visible" : "hidden"}
        variants={slideVariants}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Our Mission
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl text-center"
          variants={itemVariants}
        >
          Our mission is to deliver exceptional value through technology and creative thinking.
        </motion.p>
      </motion.div>

      {/* Slide 4 */}
      <motion.div
        ref={el => slideRefs.current[3] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-purple-50 px-4 md:px-12"
        initial="hidden"
        animate={currentSlide === 4 ? "visible" : "hidden"}
        variants={slideVariants}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-4xl text-center"
          variants={itemVariants}
        >
          Feel free to reach out to us for any inquiries or collaboration opportunities.
        </motion.p>
      </motion.div>

      {/* Navigation controls - fixed at the side */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
        {[1, 2, 3, 4].map(num => (
          <motion.button
            key={num}
            onClick={() => scrollToSlide(num)}
            className={`w-4 h-4 rounded-full ${currentSlide === num ? 'bg-blue-600' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${num}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
