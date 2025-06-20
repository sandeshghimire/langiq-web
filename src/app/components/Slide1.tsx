import { motion } from "framer-motion";

interface Slide1Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    scrollToSlide: (slideNumber: number) => void;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide1({ slideVariants, itemVariants, isActive, scrollToSlide, setRef }: Slide1Props) {
    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const dataFlowVariants = {
        animate: {
            x: [0, 300, 0],
            opacity: [0, 1, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
            }
        }
    };

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
                        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase font-black"
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
                        Language Intelligence
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-gray-600 font-black mb-6"
                        variants={itemVariants}
                    >
                        To Seamlessly Transition Your Business to the Future of Work with LLMs. At LangIQ.ai, we empower your organization to migrate from traditional operations to intelligent, LLM-based workflows, ensuring you unlock transformative efficiencies and achieve measurable business impact.
                    </motion.p>

                    {/* Security & Privacy Badge */}
                    <motion.div
                        className="flex items-center gap-3 justify-center md:justify-start"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 rounded-full">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 1L5 3v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V3l-5-2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-semibold text-green-700">Enterprise Security</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-2 rounded-full">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-semibold text-blue-700">Privacy First</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:flex flex-col items-center justify-center relative h-96"
                    variants={itemVariants}
                >
                    {/* Security Shield */}
                    <motion.div
                        className="absolute top-0 right-0 z-10"
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 1L5 3v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V3l-5-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Unstructured Data */}
                    <motion.div
                        className="absolute top-0 left-0"
                        variants={floatingVariants}
                        animate="animate"
                    >
                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg border border-red-200 relative">
                            <div className="text-xs text-red-600 font-medium mb-1">Unstructured Data</div>
                            <div className="text-gray-400 text-xs">
                                Raw text, emails, docs...
                            </div>
                            {/* Privacy indicator */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                    </motion.div>

                    {/* Data Flow Particles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            style={{
                                top: `${30 + i * 20}%`,
                                left: '20%'
                            }}
                            variants={dataFlowVariants}
                            animate="animate"
                            transition={{ delay: i * 0.5 }}
                        />
                    ))}

                    {/* LLM Processing Center */}
                    <motion.div
                        className="absolute center-0"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        variants={pulseVariants}
                        animate="animate"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full relative">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <div className="text-blue-600 font-bold text-sm">LLM</div>
                            </div>
                            {/* Security lock overlay */}
                            <motion.div
                                className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                            {/* Processing rings */}
                            <motion.div
                                className="absolute inset-0 border-2 border-blue-300 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-2 border border-purple-300 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Structured Output */}
                    <motion.div
                        className="absolute bottom-0 right-0"
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: 1 }}
                    >
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg border border-green-200 relative">
                            <div className="text-xs text-green-600 font-medium mb-1">Structured Data</div>
                            <div className="text-gray-400 text-xs">
                                JSON, tables, insights...
                            </div>
                            {/* Privacy indicator */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                    </motion.div>

                    {/* Processing Labels */}
                    <motion.div
                        className="absolute"
                        style={{ top: '20%', right: '10%' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="text-xs text-gray-500 font-medium">Secure Processing...</div>
                    </motion.div>

                    <motion.div
                        className="absolute"
                        style={{ bottom: '20%', left: '10%' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                        <div className="text-xs text-gray-500 font-medium">Private Analysis...</div>
                    </motion.div>

                    {/* Encrypted Data Flow Label */}
                    <motion.div
                        className="absolute"
                        style={{ top: '45%', left: '25%' }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                        <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded border border-green-200">
                            🔒 Encrypted
                        </div>
                    </motion.div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path
                            d="M 80 60 Q 200 150 320 240"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                    </svg>
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
