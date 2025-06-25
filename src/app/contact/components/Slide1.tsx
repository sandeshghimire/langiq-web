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
                    Contact Us
                </motion.h1>
            </motion.div>

            <motion.div
                className="text-center mb-20"
                variants={itemVariants}
            >
                <motion.div
                    className="max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    <p className="mb-8 text-xl text-gray-600 font-light">Get in touch with us</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.a
                            href="mailto:info@langiq.ai"
                            className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/70 transition-all duration-300 group border border-gray-200/50"
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 mb-3 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm text-gray-500 mb-1">Email</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">info@langiq.ai</span>
                        </motion.a>

                        <motion.a
                            href="tel:4087185361"
                            className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/70 transition-all duration-300 group border border-gray-200/50"
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 mb-3 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm text-gray-500 mb-1">Phone</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">(408) 718-5361</span>
                        </motion.a>

                        <motion.a
                            href="https://calendly.com/sandesh-6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/70 transition-all duration-300 group border border-gray-200/50"
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 mb-3 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm text-gray-500 mb-1">Schedule</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Book Meeting</span>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.p
                className="text-base md:text-lg max-w-3xl text-center mb-12 text-gray-500 leading-relaxed"
                variants={itemVariants}
            >
                Or fill out one of our forms below
            </motion.p>

            <motion.div
                className="flex flex-col md:flex-row gap-8 items-center"
                variants={itemVariants}
            >
                <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={() => scrollToSlide(2)}
                        className="px-12 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center gap-4 min-w-[200px] justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-medium">Client Form</span>
                    </button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={() => scrollToSlide(3)}
                        className="px-12 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center gap-4 min-w-[200px] justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Investor Information</span>
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
