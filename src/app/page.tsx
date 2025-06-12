"use client";

import { useState, useRef, useEffect } from "react";

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

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      {/* Slide 1 */}
      <div
        ref={el => slideRefs.current[0] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-gray-50 px-4 md:px-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Introduction</h1>
        <p className="text-xl md:text-2xl max-w-4xl text-center">Welcome to our presentation. This is the first slide containing some introductory text.</p>
      </div>

      {/* Slide 2 */}
      <div
        ref={el => slideRefs.current[1] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-blue-50 px-4 md:px-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-xl md:text-2xl max-w-4xl text-center">We are a team of professionals dedicated to creating innovative solutions.</p>
      </div>

      {/* Slide 3 */}
      <div
        ref={el => slideRefs.current[2] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-green-50 px-4 md:px-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Our Mission</h1>
        <p className="text-xl md:text-2xl max-w-4xl text-center">Our mission is to deliver exceptional value through technology and creative thinking.</p>
      </div>

      {/* Slide 4 */}
      <div
        ref={el => slideRefs.current[3] = el}
        className="flex flex-col items-center justify-center h-screen w-full snap-start bg-purple-50 px-4 md:px-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Get In Touch</h1>
        <p className="text-xl md:text-2xl max-w-4xl text-center">Feel free to reach out to us for any inquiries or collaboration opportunities.</p>
      </div>

      {/* Navigation controls - fixed at the side */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
        {[1, 2, 3, 4].map(num => (
          <button
            key={num}
            onClick={() => scrollToSlide(num)}
            className={`w-4 h-4 rounded-full ${currentSlide === num ? 'bg-blue-600' : 'bg-gray-400'} transition-colors`}
            aria-label={`Go to slide ${num}`}
          />
        ))}
      </div>
    </div>
  );
}
