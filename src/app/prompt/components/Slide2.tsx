import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for the data processing
    const particleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const flowVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        hidden: { scale: 1, opacity: 0.7 },
        visible: {
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
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
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        What is the Prompt Engineering ?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Unified API interface supporting multiple LLM providers including OpenAI, Google, Anthropic, and open-source models</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Advanced prompt editor with version control, real-time testing, and collaborative development capabilities</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Asynchronous operation support with Promise-based architecture for non-blocking, scalable AI interactions</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Built-in response caching system reducing costs and improving application response times significantly</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Comprehensive performance tracking including response times, token consumption, and model comparison analytics</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Prompt Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="50" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="60" y="75" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Prompt Input</text>
                        </motion.g>

                        {/* Template Library */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="120" width="80" height="40" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="145" textAnchor="middle" className="text-xs fill-green-600 font-medium">Templates</text>
                        </motion.g>

                        {/* Prompt Library Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="140" y="85" width="120" height="70" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="110" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Prompt Library</text>
                            <text x="200" y="125" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Processing</text>
                            <text x="200" y="140" textAnchor="middle" className="text-xs fill-purple-600 font-medium">& Optimization</text>
                        </motion.g>

                        {/* LLM Providers */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="40" width="70" height="30" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="335" y="58" textAnchor="middle" className="text-xs fill-red-600 font-medium">OpenAI</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="80" width="70" height="30" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="335" y="98" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Google</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="120" width="70" height="30" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="335" y="138" textAnchor="middle" className="text-xs fill-violet-600 font-medium">Anthropic</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="160" width="70" height="30" rx="6" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
                            <text x="335" y="178" textAnchor="middle" className="text-xs fill-cyan-600 font-medium">Open Source</text>
                        </motion.g>

                        {/* Output Results */}
                        <motion.g variants={itemVariants}>
                            <rect x="140" y="220" width="120" height="50" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="200" y="240" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Processed Results</text>
                            <text x="200" y="255" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">& Analytics</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M100 70 Q120 70 140 100"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 140 Q120 140 140 130"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 100 Q280 100 300 55"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 110 Q280 110 300 95"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 120 Q280 120 300 135"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 140 Q280 140 300 175"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 155 Q200 190 200 220"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Data Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 20}
                                cy={110 + Math.sin(i * 0.5) * 30}
                                r="2"
                                fill={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#22c55e" : "#9333ea"}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Processing Indicators in Library */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={165 + i * 15}
                                cy={120}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Caching Indicator */}
                        <motion.g variants={itemVariants}>
                            <circle cx="80" cy="200" r="15" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />
                            <text x="80" y="205" textAnchor="middle" className="text-xs fill-indigo-600 font-medium">Cache</text>
                        </motion.g>
                        <motion.path
                            d="M95 200 Q120 200 140 230"
                            stroke="#6366f1"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="3,3"
                            variants={flowVariants}
                        />
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Unified API Interface
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Multi-Provider Support
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Performance Tracking
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Async Operations
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
