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
                Welcome to LangIQ
            </motion.h1>
            <motion.p
                className="text-xl md:text-lg max-w-4xl text-center mb-8"
                variants={itemVariants}
            >
                Please select your account type to proceed
            </motion.p>

            <motion.div
                className="flex flex-col md:flex-row gap-6 mt-4"
                variants={itemVariants}
            >
                <button
                    onClick={() => scrollToSlide(2)}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all text-lg font-semibold"
                >
                    Client Form
                </button>

                <button
                    onClick={() => scrollToSlide(3)}
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-lg transition-all text-lg font-semibold"
                >
                    Investor Information
                </button>
            </motion.div>

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
