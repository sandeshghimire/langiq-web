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
                        Why Fine-Tuning?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Foundation models lack specialized knowledge and terminology specific to individual organizations and industries</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Generic AI responses may not align with company-specific processes, guidelines, and quality standards</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Certain domains require deep specialization that cannot be achieved through prompting or augmentation alone</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need AI systems that understand their unique data patterns and business contexts</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Competitive advantage often requires proprietary AI capabilities tailored to specific use cases</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Generic vs Fine-tuned Model Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Generic Model (Left Side) */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="60" width="120" height="80" rx="12" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="80" y="85" textAnchor="middle" className="text-sm fill-red-600 font-bold">Generic Model</text>
                            <text x="80" y="105" textAnchor="middle" className="text-xs fill-red-500">Limited Knowledge</text>
                            <text x="80" y="120" textAnchor="middle" className="text-xs fill-red-500">Generic Responses</text>
                        </motion.g>

                        {/* Fine-tuned Model (Right Side) */}
                        <motion.g variants={itemVariants}>
                            <rect x="260" y="60" width="120" height="80" rx="12" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="2" />
                            <text x="320" y="85" textAnchor="middle" className="text-sm fill-green-600 font-bold">Fine-tuned Model</text>
                            <text x="320" y="105" textAnchor="middle" className="text-xs fill-green-500">Specialized Knowledge</text>
                            <text x="320" y="120" textAnchor="middle" className="text-xs fill-green-500">Domain-specific</text>
                        </motion.g>

                        {/* Industry Data Inputs */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="180" width="70" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
                            <text x="55" y="195" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Industry</text>
                            <text x="55" y="210" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Data</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="240" width="70" height="40" rx="6" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="1" />
                            <text x="55" y="255" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Company</text>
                            <text x="55" y="270" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Processes</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="300" width="70" height="40" rx="6" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923e" strokeWidth="1" />
                            <text x="55" y="315" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Domain</text>
                            <text x="55" y="330" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Expertise</text>
                        </motion.g>

                        {/* Transformation Arrow */}
                        <motion.g variants={flowVariants}>
                            <path d="M150 100 Q200 100 250 100" stroke="#6b7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                            <text x="200" y="90" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Fine-tuning</text>
                        </motion.g>

                        {/* Data Flow to Fine-tuning */}
                        <motion.path
                            d="M90 200 Q150 200 180 150 Q200 120 250 100"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M90 260 Q150 260 180 200 Q200 150 250 100"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M90 320 Q150 320 180 250 Q200 180 250 100"
                            stroke="#fb923e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />

                        {/* Problem indicators for Generic Model */}
                        {[...Array(3)].map((_, i) => (
                            <motion.g key={i} variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }
                                }
                            }}>
                                <circle cx={60 + i * 15} cy={160} r="3" fill="#ef4444" />
                                <text x={60 + i * 15} y={155} textAnchor="middle" className="text-xs fill-red-500">!</text>
                            </motion.g>
                        ))}

                        {/* Success indicators for Fine-tuned Model */}
                        {[...Array(3)].map((_, i) => (
                            <motion.g key={i} variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3 + 1
                                    }
                                }
                            }}>
                                <circle cx={300 + i * 15} cy={160} r="3" fill="#22c55e" />
                                <text x={300 + i * 15} y={165} textAnchor="middle" className="text-xs fill-green-600">✓</text>
                            </motion.g>
                        ))}

                        {/* Arrow marker definition */}
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                            </marker>
                        </defs>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-red-600 bg-red-50/80 backdrop-blur-sm rounded px-2 py-1 border border-red-200"
                        variants={itemVariants}
                    >
                        Generic Limitations
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-green-600 bg-green-50/80 backdrop-blur-sm rounded px-2 py-1 border border-green-200"
                        variants={itemVariants}
                    >
                        Specialized Capabilities
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-blue-600 bg-blue-50/80 backdrop-blur-sm rounded px-2 py-1 border border-blue-200"
                        variants={itemVariants}
                    >
                        Training Data
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
