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
                            <p className="text-gray-600">Specialized Accuracy: Achieve superior performance on domain-specific tasks through targeted model training</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Proprietary Capabilities: Develop unique AI systems providing competitive advantage and intellectual property value</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Perfect Alignment: Ensure AI responses match organizational standards, terminology, and quality requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complete Control: Full ownership and customization of model behavior, capabilities, and performance characteristics</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Scalable Process: Streamlined pipeline enables rapid development and deployment of multiple specialized models</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Fine-Tuning Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Base Model Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="50" width="80" height="60" rx="8" fill="rgba(107, 114, 128, 0.2)" stroke="#6b7280" strokeWidth="2" />
                            <text x="60" y="75" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Base</text>
                            <text x="60" y="90" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Model</text>
                        </motion.g>

                        {/* Domain Data Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="150" width="80" height="60" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="175" textAnchor="middle" className="text-xs fill-green-600 font-medium">Domain</text>
                            <text x="60" y="190" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        {/* Fine-Tuning Process */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="150" r="50" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="145" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Fine</text>
                            <text x="200" y="160" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Tuning</text>
                        </motion.g>

                        {/* Specialized Model Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="120" width="80" height="60" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="145" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Specialized</text>
                            <text x="340" y="160" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Model</text>
                        </motion.g>

                        {/* Advantage Indicators */}
                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="200" r="12" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="320" y="205" textAnchor="middle" className="text-xs fill-green-600 font-bold">A</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <circle cx="350" cy="220" r="12" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="350" y="225" textAnchor="middle" className="text-xs fill-blue-600 font-bold">P</text>
                        </motion.g>
                        <motion.g variants={itemVariants}>
                            <circle cx="370" cy="190" r="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="2" />
                            <text x="370" y="195" textAnchor="middle" className="text-xs fill-purple-600 font-bold">C</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M100 80 Q150 80 150 150"
                            stroke="#6b7280"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 180 Q150 180 150 150"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 150 Q275 150 300 150"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Enhancement Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 25}
                                cy={130 + Math.sin(i) * 40}
                                r="3"
                                fill="#9333ea"
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Training Progress Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={180 + i * 20}
                                cy={150}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Quality Enhancement Bars */}
                        {[...Array(4)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={310 + i * 15}
                                y={250}
                                width="8"
                                height={15 + i * 5}
                                fill="#10b981"
                                variants={{
                                    hidden: { scaleY: 0 },
                                    visible: {
                                        scaleY: [0, 1, 0.8, 1],
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
                        Fine-Tuning Process
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Enhanced Performance
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
