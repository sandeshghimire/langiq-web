import { motion } from "framer-motion";

interface Slide1Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    scrollToSlide: (slideNumber: number) => void;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide1({ slideVariants, itemVariants, isActive, scrollToSlide, setRef }: Slide1Props) {
    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                Prompt Engineering
            </motion.h1>
            <motion.p
                className="text-xl md:text-lg max-w-7xl text-center"
                variants={itemVariants}
            >
                LangIQ's Prompt Library provides a unified API for interacting with diverse Large Language Models, abstracting the complexities of different provider interfaces behind a consistent development experience. This comprehensive toolkit enables developers to craft, test, and optimize prompts efficiently while supporting asynchronous operations, caching, and performance tracking.

            </motion.p>

            {/* Bouncing down arrow */}
            <motion.div
                className="absolute bottom-10 cursor-pointer animate-bounce"
                onClick={() => scrollToSlide(2)}
                variants={itemVariants}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </motion.div>
    );
}
