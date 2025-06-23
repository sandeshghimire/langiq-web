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
                        How Does the Prompt Library Solve Problems?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Abstracts provider-specific complexities behind a single, consistent API for seamless model switching</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides collaborative workspace with version control enabling team-based prompt development and optimization</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Implements intelligent caching and streaming capabilities reducing latency and operational costs significantly</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Offers comprehensive testing framework with parallel model comparison and performance benchmarking tools</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables advanced prompting techniques through structured templates and reusable prompt components</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Prompt Library Solution Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Multiple LLM Providers (Top) */}
                        <motion.g variants={itemVariants}>
                            <rect x="30" y="20" width="50" height="25" rx="4" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1.5" />
                            <text x="55" y="35" textAnchor="middle" className="text-xs fill-green-600 font-medium">OpenAI</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <rect x="90" y="20" width="50" height="25" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.5" />
                            <text x="115" y="35" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Claude</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <rect x="150" y="20" width="50" height="25" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="175" y="35" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Gemini</text>
                        </motion.g>

                        {/* Unified API Layer */}
                        <motion.g variants={pulseVariants}>
                            <rect x="40" y="70" width="160" height="40" rx="8" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="120" y="90" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Prompt Library Unified API</text>
                        </motion.g>

                        {/* Solution Features */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="140" width="80" height="50" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="60" y="160" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Collaborative</text>
                            <text x="60" y="175" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Workspace</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="120" y="140" width="80" height="50" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="160" y="160" textAnchor="middle" className="text-xs fill-red-600 font-medium">Smart</text>
                            <text x="160" y="175" textAnchor="middle" className="text-xs fill-red-600 font-medium">Caching</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="220" y="140" width="80" height="50" rx="6" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />
                            <text x="260" y="160" textAnchor="middle" className="text-xs fill-indigo-600 font-medium">Testing</text>
                            <text x="260" y="175" textAnchor="middle" className="text-xs fill-indigo-600 font-medium">Framework</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="320" y="140" width="70" height="50" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="355" y="160" textAnchor="middle" className="text-xs fill-violet-600 font-medium">Template</text>
                            <text x="355" y="175" textAnchor="middle" className="text-xs fill-violet-600 font-medium">Engine</text>
                        </motion.g>

                        {/* Output Results */}
                        <motion.g variants={itemVariants}>
                            <rect x="70" y="250" width="120" height="60" rx="8" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" />
                            <text x="130" y="275" textAnchor="middle" className="text-sm fill-green-700 font-bold">Optimized</text>
                            <text x="130" y="290" textAnchor="middle" className="text-sm fill-green-700 font-bold">Prompt Output</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="210" y="250" width="120" height="60" rx="8" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="270" y="275" textAnchor="middle" className="text-sm fill-blue-700 font-bold">Performance</text>
                            <text x="270" y="290" textAnchor="middle" className="text-sm fill-blue-700 font-bold">Analytics</text>
                        </motion.g>

                        {/* Provider to API Connections */}
                        <motion.path
                            d="M55 45 L80 70"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M115 45 L120 70"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M175 45 L160 70"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* API to Features Connections */}
                        <motion.path
                            d="M80 110 L60 140"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M120 110 L160 140"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M160 110 L260 140"
                            stroke="#6366f1"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M180 110 L355 140"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Features to Output Connections */}
                        <motion.path
                            d="M100 190 L130 250"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 190 L270 250"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Version Control Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={50 + i * 15}
                                cy={120}
                                r="3"
                                fill="#10b981"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.5],
                                        scale: [0, 1, 1],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Cache Performance Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={130 + i * 8}
                                y={200}
                                width="6"
                                height={15 + i * 3}
                                rx="1"
                                fill="#ef4444"
                                variants={{
                                    hidden: { scaleY: 0 },
                                    visible: {
                                        scaleY: [0, 1, 0.8],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                                style={{ transformOrigin: 'bottom' }}
                            />
                        ))}

                        {/* Testing Framework Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={240 + (i % 3) * 15}
                                cy={200 + Math.floor(i / 3) * 10}
                                r="2"
                                fill="#6366f1"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: i * 0.25
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Template Components */}
                        {[...Array(3)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={340}
                                y={200 + i * 12}
                                width="30"
                                height="8"
                                rx="2"
                                fill="#a855f7"
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: {
                                        opacity: [0, 1, 0.7],
                                        x: [20, 0, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Unified API Layer
                    </motion.div>
                    <motion.div
                        className="absolute top-16 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Advanced Features
                    </motion.div>
                    <motion.div
                        className="absolute bottom-16 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Smart Caching
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Optimized Results
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
