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
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0, 0.5, 1, 0.8, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
            }
        }
    };

    const flowVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: [0, 1, 0.8, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const pulseVariants = {
        hidden: { scale: 1, opacity: 0.7 },
        visible: {
            scale: [1, 1.2, 1.1, 1],
            opacity: [0.7, 1, 0.9, 0.7],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const shieldVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [0, 1.1, 1],
            opacity: [0, 0.8, 1],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    };

    const performanceVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: [0, "100%", "80%", "100%"],
            opacity: [0, 1, 0.8, 1],
            transition: {
                duration: 2.5,
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
                        Advantages of AI Box Hardware
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Data Security: Complete on-premises processing ensures sensitive data never leaves organizational boundaries</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Cost Efficiency: Significant long-term savings compared to cloud GPU instances for high-volume operations</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Performance Optimization: Dedicated resources deliver consistent, predictable performance for critical applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Rapid Deployment: Pre-configured systems ready for immediate use within 2-3 weeks delivery timeframe</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Full Control: Complete customization flexibility over hardware, software, and security configurations</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Security Shield */}
                        <motion.g variants={shieldVariants}>
                            <path d="M50 30 L70 20 L90 30 L90 60 L70 80 L50 60 Z" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" />
                            <text x="70" y="50" textAnchor="middle" className="text-xs fill-green-600 font-bold">🛡️</text>
                        </motion.g>

                        {/* On-Premises Data Box */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="100" width="100" height="80" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="70" y="125" textAnchor="middle" className="text-xs fill-green-600 font-medium">On-Premises</text>
                            <text x="70" y="140" textAnchor="middle" className="text-xs fill-green-600 font-medium">Secure Data</text>
                            <text x="70" y="155" textAnchor="middle" className="text-xs fill-green-600 font-medium">Processing</text>
                        </motion.g>

                        {/* LLM Processing Core with Control Indicators */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="150" r="60" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <circle cx="200" cy="150" r="45" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="1" strokeDasharray="5,5" />
                            <text x="200" y="140" textAnchor="middle" className="text-sm fill-purple-600 font-bold">AI Box</text>
                            <text x="200" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Hardware</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Full Control</text>
                        </motion.g>

                        {/* Performance Bars */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="50" width="15" height="60" rx="2" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
                            <motion.rect x="290" y="50" width="15" height="0" rx="2" fill="#3b82f6" variants={performanceVariants} />

                            <rect x="310" y="60" width="15" height="50" rx="2" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
                            <motion.rect x="310" y="60" width="15" height="0" rx="2" fill="#3b82f6" variants={performanceVariants} style={{ animationDelay: "0.3s" }} />

                            <rect x="330" y="40" width="15" height="70" rx="2" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
                            <motion.rect x="330" y="40" width="15" height="0" rx="2" fill="#3b82f6" variants={performanceVariants} style={{ animationDelay: "0.6s" }} />

                            <text x="317" y="125" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Performance</text>
                        </motion.g>

                        {/* Cost Efficiency Indicator */}
                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="200" r="25" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="320" y="195" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">💰</text>
                            <text x="320" y="208" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Cost</text>
                            <text x="320" y="220" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Efficient</text>
                        </motion.g>

                        {/* Rapid Deployment Timer */}
                        <motion.g variants={itemVariants}>
                            <rect x="280" y="270" width="80" height="40" rx="8" fill="rgba(251, 146, 60, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="320" y="285" textAnchor="middle" className="text-xs fill-orange-600 font-bold">⚡ 2-3 Weeks</text>
                            <text x="320" y="300" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Ready to Deploy</text>
                        </motion.g>

                        {/* Secure Data Flow Lines */}
                        <motion.path
                            d="M120 140 Q160 140 160 150"
                            stroke="#22c55e"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="5,5"
                        />

                        {/* Control Flow to Performance */}
                        <motion.path
                            d="M260 150 Q275 100 290 80"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Control Flow to Cost */}
                        <motion.path
                            d="M260 160 Q290 180 295 200"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Control Flow to Deployment */}
                        <motion.path
                            d="M240 200 Q260 235 280 290"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Security Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={140 + i * 15}
                                cy={140 + Math.sin(i * 0.5) * 20}
                                r="2"
                                fill="#22c55e"
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Processing Power Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={180 + i * 15}
                                cy={150}
                                r="3"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.5, 1, 0],
                                        scale: [0, 1, 1.2, 1, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Pulsing Security Ring */}
                        <motion.circle
                            cx="200"
                            cy="150"
                            r="75"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="1"
                            strokeDasharray="10,5"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: [0, 0.6, 0],
                                    rotate: [0, 360],
                                    transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        
                                    }
                                }
                            }}
                        />
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-green-600 bg-green-50/90 backdrop-blur-sm rounded px-2 py-1 border border-green-200"
                        variants={itemVariants}
                    >
                        🔒 Data Security
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-blue-600 bg-blue-50/90 backdrop-blur-sm rounded px-2 py-1 border border-blue-200"
                        variants={itemVariants}
                    >
                        ⚡ High Performance
                    </motion.div>
                    <motion.div
                        className="absolute bottom-12 left-4 text-xs font-medium text-emerald-600 bg-emerald-50/90 backdrop-blur-sm rounded px-2 py-1 border border-emerald-200"
                        variants={itemVariants}
                    >
                        💰 Cost Efficient
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Intelligent Output
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
