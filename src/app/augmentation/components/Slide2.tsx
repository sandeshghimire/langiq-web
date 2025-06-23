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
                        What is LLM Augmentation?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Strategic injection of domain-specific knowledge, facts, and guidelines directly into model prompts and context</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Behavioral adaptation techniques customizing AI personality, tone, and response patterns for specific applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Lightweight fine-tuning methods using LoRA and PEFT for efficient model customization without full retraining</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Context optimization tools maximizing the effectiveness of limited token windows through intelligent information prioritization</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Template-based knowledge integration enabling consistent domain expertise across multiple interactions</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Domain Knowledge Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="10" y="30" width="90" height="50" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="55" y="50" textAnchor="middle" className="text-xs fill-green-600 font-medium">Domain</text>
                            <text x="55" y="65" textAnchor="middle" className="text-xs fill-green-600 font-medium">Knowledge</text>
                        </motion.g>

                        {/* Behavioral Patterns Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="10" y="100" width="90" height="50" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="55" y="120" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Behavioral</text>
                            <text x="55" y="135" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Patterns</text>
                        </motion.g>

                        {/* Context Templates Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="10" y="170" width="90" height="50" rx="8" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="55" y="190" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Context</text>
                            <text x="55" y="205" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Templates</text>
                        </motion.g>

                        {/* LoRA/PEFT Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="10" y="240" width="90" height="50" rx="8" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="55" y="260" textAnchor="middle" className="text-xs fill-purple-600 font-medium">LoRA/PEFT</text>
                            <text x="55" y="275" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Tuning</text>
                        </motion.g>

                        {/* Augmented LLM Core */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="150" r="60" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="3" />
                            <circle cx="200" cy="150" r="45" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="200" y="140" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Augmented</text>
                            <text x="200" y="155" textAnchor="middle" className="text-sm fill-purple-600 font-bold">LLM</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Enhanced</text>
                        </motion.g>

                        {/* Enhanced Outputs */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="50" width="90" height="45" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="345" y="70" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Domain-Specific</text>
                            <text x="345" y="85" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Responses</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="300" y="110" width="90" height="45" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="345" y="130" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Consistent</text>
                            <text x="345" y="145" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Personality</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="300" y="170" width="90" height="45" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="345" y="190" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Optimized</text>
                            <text x="345" y="205" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Context Use</text>
                        </motion.g>

                        {/* Augmentation Flow Lines */}
                        <motion.path
                            d="M100 55 Q130 55 140 90 Q150 125 140 150"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M100 125 Q130 125 140 150"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M100 195 Q130 195 140 180 Q150 165 140 150"
                            stroke="#fb923c"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M100 265 Q130 265 140 230 Q150 195 140 150"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />

                        {/* Enhanced Output Lines */}
                        <motion.path
                            d="M260 130 Q280 130 300 72"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 150 Q280 150 300 132"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 170 Q280 170 300 192"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Augmentation Energy Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + (i % 4) * 25}
                                cy={100 + Math.floor(i / 4) * 100}
                                r="2"
                                fill={['#22c55e', '#3b82f6', '#fb923c', '#a855f7'][i % 4]}
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.3, 1, 0],
                                        scale: [0, 1, 0.5, 1, 0],
                                        x: [0, 50, 80],
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                            
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Core Enhancement Indicators */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={180 + i * 8}
                                cy={150 + Math.sin(i * 0.8) * 15}
                                r="1.5"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.5, 1, 0],
                                        scale: [0.5, 1.2, 0.8, 1.2, 0.5],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                            
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Augmentation Waves */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={`wave-${i}`}
                                cx="200"
                                cy="150"
                                r={30 + i * 15}
                                fill="none"
                                stroke="#9333ea"
                                strokeWidth="0.5"
                                opacity="0.3"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: {
                                        scale: [0, 1.5, 0],
                                        opacity: [0, 0.6, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.8
                                            
                                        }
                                    }
                                }}
                            />
                        ))}
                    </svg>

                    {/* Updated Floating Labels */}
                    <motion.div
                        className="absolute top-2 left-2 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Augmentation Inputs
                    </motion.div>
                    <motion.div
                        className="absolute bottom-2 right-2 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Enhanced Capabilities
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs font-medium text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Active Augmentation
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
