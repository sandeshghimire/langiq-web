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
                        What is LLM Fine-Tuning?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complete pipeline for custom model training using organization-specific datasets and requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Intelligent data preparation tools including cleaning, formatting, augmentation, and quality validation processes</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Advanced training techniques leveraging LoRA, PEFT, and provider APIs like OpenAI's fine-tuning services</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Comprehensive monitoring dashboard tracking training analytics, loss curves, validation metrics, and convergence patterns</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Model comparison and benchmarking capabilities enabling data-driven selection and performance optimization</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Training Data Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="40" width="80" height="50" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="60" textAnchor="middle" className="text-xs fill-green-600 font-medium">Training</text>
                            <text x="60" y="75" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        {/* Validation Data Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="110" width="80" height="50" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="60" y="130" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Validation</text>
                            <text x="60" y="145" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Data</text>
                        </motion.g>

                        {/* Base Model */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="180" width="80" height="50" rx="8" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="60" y="200" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Base</text>
                            <text x="60" y="215" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Model</text>
                        </motion.g>

                        {/* Fine-Tuning Process Core */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="135" r="55" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="125" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Fine-Tuning</text>
                            <text x="200" y="140" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Process</text>
                            <text x="200" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">LoRA/PEFT</text>
                        </motion.g>

                        {/* Fine-Tuned Model Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="80" width="80" height="50" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="100" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Fine-Tuned</text>
                            <text x="340" y="115" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Model</text>
                        </motion.g>

                        {/* Metrics Dashboard */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="150" width="80" height="50" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="340" y="170" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Training</text>
                            <text x="340" y="185" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Metrics</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M100 65 Q130 65 145 135"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 135 Q130 135 145 135"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 205 Q130 205 145 135"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M255 120 Q280 100 300 105"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M255 150 Q280 160 300 175"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Training Data Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 15}
                                cy={100 + Math.sin(i * 0.8) * 30}
                                r="2.5"
                                fill={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#a855f7"}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Training Progress Indicators */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={175 + i * 10}
                                cy={135}
                                r="1.5"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.3],
                                        scale: [0, 1.2, 1],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Loss Curve Visualization */}
                        <motion.path
                            d="M160 170 Q180 160 200 165 Q220 155 240 150"
                            stroke="#f59e0b"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="2,2"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 0.8,
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                        />
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Custom Training Pipeline
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Optimized Model & Analytics
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16 text-xs font-medium text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Real-time Monitoring
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

