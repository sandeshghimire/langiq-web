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

                {/* Right Column - Prompt Engineering Workflow Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Raw Prompt Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="60" width="80" height="50" rx="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="60" y="80" textAnchor="middle" className="text-xs fill-red-600 font-medium">Raw</text>
                            <text x="60" y="95" textAnchor="middle" className="text-xs fill-red-600 font-medium">Prompt</text>
                        </motion.g>

                        {/* Prompt Engineering Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="150" y="40" width="100" height="90" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="70" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Prompt</text>
                            <text x="200" y="85" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Engineering</text>
                            <text x="200" y="105" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Optimization</text>
                            <text x="200" y="120" textAnchor="middle" className="text-xs fill-purple-600 font-medium">& Testing</text>
                        </motion.g>

                        {/* Engineering Tools */}
                        <motion.g variants={itemVariants}>
                            <rect x="270" y="50" width="60" height="25" rx="4" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="300" y="66" textAnchor="middle" className="text-xs fill-green-600 font-medium">Templates</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="270" y="85" width="60" height="25" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="300" y="101" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Testing</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="270" y="120" width="60" height="25" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="300" y="136" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Versioning</text>
                        </motion.g>

                        {/* Optimized Prompt Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="150" y="170" width="100" height="50" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="200" y="190" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Optimized</text>
                            <text x="200" y="205" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Prompt</text>
                        </motion.g>

                        {/* LLM Processing */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="80" cy="280" r="35" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="3" />
                            <text x="80" y="275" textAnchor="middle" className="text-xs fill-violet-600 font-bold">LLM</text>
                            <text x="80" y="290" textAnchor="middle" className="text-xs fill-violet-600 font-medium">Processing</text>
                        </motion.g>

                        {/* Enhanced Response */}
                        <motion.g variants={itemVariants}>
                            <rect x="160" y="260" width="100" height="50" rx="8" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
                            <text x="210" y="280" textAnchor="middle" className="text-xs fill-cyan-600 font-medium">Enhanced</text>
                            <text x="210" y="295" textAnchor="middle" className="text-xs fill-cyan-600 font-medium">Response</text>
                        </motion.g>

                        {/* Analytics & Feedback */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="260" width="80" height="50" rx="8" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
                            <text x="330" y="280" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Analytics</text>
                            <text x="330" y="295" textAnchor="middle" className="text-xs fill-pink-600 font-medium">& Feedback</text>
                        </motion.g>

                        {/* Workflow Flow Lines */}
                        <motion.path
                            d="M100 85 Q125 85 150 85"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 130 Q200 150 200 170"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M170 220 Q125 220 115 260"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M115 285 Q140 285 160 285"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 285 Q275 285 290 285"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Feedback Loop */}
                        <motion.path
                            d="M330 260 Q350 200 320 120 Q290 80 250 85"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />

                        {/* Engineering Process Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={`engineering-${i}`}
                                cx={160 + i * 15}
                                cy={85 + Math.sin(i) * 10}
                                r="2"
                                fill={["#9333ea", "#22c55e", "#3b82f6", "#f59e0b"][i % 4]}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        y: [0, -10, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Optimization Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.g key={`optimization-${i}`} variants={itemVariants}>
                                <motion.circle
                                    cx={180 + i * 20}
                                    cy={195}
                                    r="3"
                                    fill="#10b981"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: {
                                            scale: [0, 1.5, 1],
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.5
                                            }
                                        }
                                    }}
                                />
                                <motion.text
                                    x={180 + i * 20}
                                    y={200}
                                    textAnchor="middle"
                                    className="text-xs fill-emerald-600 font-bold"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { delay: 1 }
                                        }
                                    }}
                                >
                                    ✓
                                </motion.text>
                            </motion.g>
                        ))}

                        {/* Performance Improvement Arrow */}
                        <motion.g variants={itemVariants}>
                            <motion.path
                                d="M60 350 L90 350 M85 345 L90 350 L85 355"
                                stroke="#22c55e"
                                strokeWidth="2"
                                fill="none"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: {
                                            duration: 2,
                                            delay: 2
                                        }
                                    }
                                }}
                            />
                            <text x="75" y="340" textAnchor="middle" className="text-xs fill-green-600 font-bold">+40% Better</text>
                        </motion.g>
                    </svg>

                    {/* Floating Process Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Prompt Crafting
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        A/B Testing
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Iterative Improvement
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Performance Analytics
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
