import { motion } from "framer-motion";

interface Slide4Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
    scrollToSlide?: (slideNumber: number) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef, scrollToSlide }: Slide4Props) {
    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-slate-50/10 px-4 md:px-12 relative"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.div
                className="text-center max-w-3xl mx-auto"
                variants={itemVariants}
            >
                <motion.div
                    className="w-16 h-16 mx-auto flex items-center justify-center mb-10"
                    variants={itemVariants}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-4xl font-normal mb-8 text-center text-gray-700"
                    variants={itemVariants}
                >
                    Thank you
                </motion.h1>

                <motion.p
                    className="text-lg md:text-base max-w-2xl text-center mb-16 text-gray-500 leading-relaxed"
                    variants={itemVariants}
                >
                    We've received your information and will reach out to you soon.
                </motion.p>

                <motion.div
                    className="mt-12 space-y-8"
                    variants={itemVariants}
                >
                    <p className="text-sm text-gray-500">Connect with us</p>

                    <div className="flex justify-center space-x-10">
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    <button
                        onClick={() => scrollToSlide && scrollToSlide(1)}
                        className="mt-16 px-8 py-2 border border-gray-300 text-gray-600 rounded-none hover:bg-gray-50 transition-colors duration-300 text-sm"
                    >
                        Return Home
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
