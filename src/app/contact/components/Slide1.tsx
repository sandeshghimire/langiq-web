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
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-slate-50/10 px-4 md:px-12 relative"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.div
                className="mb-10"
                variants={itemVariants}
            >
                <motion.h1
                    className="text-3xl md:text-5xl font-normal text-center text-gray-700 tracking-wide"
                    variants={itemVariants}
                >
                    Welcome to LangIQ
                </motion.h1>
            </motion.div>

            <motion.p
                className="text-base md:text-lg max-w-3xl text-center mb-16 text-gray-500 leading-relaxed"
                variants={itemVariants}
            >
                Please select an option to proceed
            </motion.p>

            <motion.div
                className="flex flex-col md:flex-row gap-12 mt-4 items-center"
                variants={itemVariants}
            >
                <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={() => scrollToSlide(2)}
                        className="px-10 py-3 border border-gray-300 text-gray-600 rounded-none hover:bg-gray-50 transition-colors duration-300 flex items-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Client Form
                    </button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={() => scrollToSlide(3)}
                        className="px-10 py-3 border border-gray-300 text-gray-600 rounded-none hover:bg-gray-50 transition-colors duration-300 flex items-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Investor Information
                    </button>
                </motion.div>
            </motion.div>

            {/* Subtle down arrow */}
            <motion.div
                className="absolute bottom-10 cursor-pointer"
                onClick={() => scrollToSlide(2)}
                variants={itemVariants}
                whileHover={{ y: 2 }}
                transition={{ duration: 0.2 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </motion.div>
    );
}
