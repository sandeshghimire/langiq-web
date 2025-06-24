import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide5({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for the data processing
    const particleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
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
                        Advantages
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Unified Interface: Single API supports all major LLM providers eliminating vendor-specific integration complexity</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Cost Optimization: Intelligent caching and streaming reduce token usage and operational expenses</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Development Speed: Pre-built templates and testing tools accelerate prompt development and optimization cycles</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Performance Insights: Detailed analytics enable data-driven decisions for model selection and prompt refinement</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Scalability: Asynchronous architecture supports high-volume, concurrent AI operations without performance degradation</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Prompt Engineering Library Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Unified Interface Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="150" y="120" width="100" height="80" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="145" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Prompt</text>
                            <text x="200" y="160" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Engineering</text>
                            <text x="200" y="175" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Library</text>
                        </motion.g>

                        {/* LLM Providers */}
                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="80" r="25" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="320" y="85" textAnchor="middle" className="text-xs fill-green-600 font-bold">OpenAI</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="160" r="25" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="320" y="165" textAnchor="middle" className="text-xs fill-blue-600 font-bold">Anthropic</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="240" r="25" fill="rgba(245, 101, 101, 0.2)" stroke="#f56565" strokeWidth="2" />
                            <text x="320" y="245" textAnchor="middle" className="text-xs fill-red-500 font-bold">Google</text>
                        </motion.g>

                        {/* Input Sources */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="80" width="80" height="40" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="60" y="105" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Templates</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="140" width="80" height="40" rx="8" fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="2" />
                            <text x="60" y="165" textAnchor="middle" className="text-xs fill-yellow-600 font-medium">Prompts</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="200" width="80" height="40" rx="8" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="60" y="225" textAnchor="middle" className="text-xs fill-purple-500 font-medium">Analytics</text>
                        </motion.g>

                        {/* Optimization Features */}
                        <motion.g variants={itemVariants}>
                            <rect x="170" y="260" width="60" height="30" rx="6" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
                            <text x="200" y="280" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Cache</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="170" y="300" width="60" height="30" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="200" y="320" textAnchor="middle" className="text-xs fill-green-600 font-medium">Optimize</text>
                        </motion.g>

                        {/* Connection Lines to LLMs */}
                        <motion.path
                            d="M250 140 Q285 140 295 80"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 160 Q285 160 295 160"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 180 Q285 180 295 240"
                            stroke="#f56565"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Input Flow Lines */}
                        <motion.path
                            d="M100 100 Q125 100 150 140"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 160 Q125 160 150 160"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 220 Q125 220 150 180"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Data Particles - Input to Library */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={`input-${i}`}
                                cx={110 + i * 15}
                                cy={120 + i * 20}
                                r="2"
                                fill={["#10b981", "#fbbf24", "#a855f7", "#ec4899"][i]}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 40, 80],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Animated Data Particles - Library to LLMs */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={`output-${i}`}
                                cx={260}
                                cy={140 + i * 40}
                                r="2"
                                fill={["#22c55e", "#3b82f6", "#f56565"][i]}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 30, 60],
                                        y: [0, i === 0 ? -60 : i === 2 ? 60 : 0, i === 0 ? -60 : i === 2 ? 60 : 0],
                                        transition: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: i * 0.6
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Cost Optimization Indicator */}
                        <motion.g variants={itemVariants}>
                            <text x="200" y="350" textAnchor="middle" className="text-xs fill-green-600 font-bold">-30% Cost</text>
                            <motion.circle
                                cx="170"
                                cy="345"
                                r="8"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="2"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: {
                                        scale: [0, 1.2, 1],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: 1
                                        }
                                    }
                                }}
                            />
                            <motion.path
                                d="M167 348 L170 342 L173 348"
                                stroke="#22c55e"
                                strokeWidth="2"
                                fill="none"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { delay: 1.5 }
                                    }
                                }}
                            />
                        </motion.g>
                    </svg>

                    {/* Floating Performance Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Unified API
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Multi-Provider
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Smart Caching
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Cost Optimized
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
