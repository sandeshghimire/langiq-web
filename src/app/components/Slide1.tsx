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
            className="flex items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl w-full">
                {/* Left Column - Content */}
                <motion.div
                    className="text-center md:text-left"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Lang - IQ
                    </motion.h1>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto md:mx-0 mb-6"
                        variants={itemVariants}
                    />
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700"
                        variants={itemVariants}
                    >
                        Our Core Mission
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-gray-600"
                        variants={itemVariants}
                    >
                        To Seamlessly Transition Your Business to the Future of Work with LLMs. At LangIQ.ai, we empower your organization to migrate from traditional operations to intelligent, LLM-based workflows, ensuring you unlock transformative efficiencies and achieve measurable business impact.
                    </motion.p>
                </motion.div>

                {/* Right Column - Empty for now */}
                <motion.div
                    className="hidden md:block"
                    variants={itemVariants}
                >
                    {/* Empty space for future content */}
                </motion.div>
            </div>

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
