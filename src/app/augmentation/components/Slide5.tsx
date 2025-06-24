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
                            <p className="text-gray-600">Consistent Expertise: Provides reliable domain knowledge without variability of dynamic retrieval systems</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Behavioral Control: Precisely customize AI personality and response patterns for specific applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Resource Efficiency: Achieve specialization without expensive full model retraining or massive computational requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Rapid Deployment: Quick implementation of domain expertise through template-based knowledge integration methods</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Quality Assurance: Guaranteed consistency in responses and adherence to organizational guidelines and standards</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Augmentation Advantages Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Base LLM */}
                        <motion.g variants={itemVariants}>
                            <circle cx="100" cy="200" r="40" fill="rgba(107, 114, 128, 0.2)" stroke="#6b7280" strokeWidth="2" />
                            <text x="100" y="195" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Base</text>
                            <text x="100" y="208" textAnchor="middle" className="text-xs fill-gray-600 font-medium">LLM</text>
                        </motion.g>

                        {/* Augmentation Layer */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="200" r="50" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="195" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Augmented</text>
                            <text x="200" y="210" textAnchor="middle" className="text-xs fill-purple-600 font-medium">LLM</text>
                        </motion.g>

                        {/* Consistency Icon */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="50" width="60" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <circle cx="310" cy="65" r="3" fill="#22c55e" />
                            <circle cx="320" cy="65" r="3" fill="#22c55e" />
                            <circle cx="330" cy="65" r="3" fill="#22c55e" />
                            <text x="320" y="82" textAnchor="middle" className="text-xs fill-green-600 font-medium">Consistent</text>
                        </motion.g>

                        {/* Behavioral Control Icon */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="110" width="60" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <path d="M305 125 L315 135 L335 115" stroke="#3b82f6" strokeWidth="2" fill="none" />
                            <text x="320" y="142" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Controlled</text>
                        </motion.g>

                        {/* Efficiency Icon */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="170" width="60" height="40" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <path d="M310 185 L320 180 L320 195 L330 190" stroke="#f59e0b" strokeWidth="2" fill="none" />
                            <text x="320" y="202" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Efficient</text>
                        </motion.g>

                        {/* Rapid Deployment Icon */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="230" width="60" height="40" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <circle cx="315" cy="245" r="2" fill="#ef4444" />
                            <path d="M315 245 Q325 240 335 250" stroke="#ef4444" strokeWidth="2" fill="none" />
                            <text x="320" y="262" textAnchor="middle" className="text-xs fill-red-600 font-medium">Rapid</text>
                        </motion.g>

                        {/* Quality Assurance Icon */}
                        <motion.g variants={itemVariants}>
                            <rect x="290" y="290" width="60" height="40" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <path d="M305 305 L315 315 L335 295" stroke="#10b981" strokeWidth="2" fill="none" />
                            <circle cx="320" cy="305" r="8" fill="none" stroke="#10b981" strokeWidth="1" />
                            <text x="320" y="322" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Quality</text>
                        </motion.g>

                        {/* Enhancement Flow Lines */}
                        <motion.path
                            d="M140 200 Q170 200 150 200"
                            stroke="#9333ea"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Connection Lines to Advantages */}
                        <motion.path
                            d="M250 180 Q270 120 290 70"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            style={{ animationDelay: "0.5s" }}
                        />
                        <motion.path
                            d="M250 190 Q270 150 290 130"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            style={{ animationDelay: "0.7s" }}
                        />
                        <motion.path
                            d="M250 200 Q270 185 290 190"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            style={{ animationDelay: "0.9s" }}
                        />
                        <motion.path
                            d="M250 210 Q270 220 290 250"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            style={{ animationDelay: "1.1s" }}
                        />
                        <motion.path
                            d="M250 220 Q270 255 290 310"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            style={{ animationDelay: "1.3s" }}
                        />

                        {/* Augmentation Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={160 + (i % 4) * 20}
                                cy={180 + Math.floor(i / 4) * 40}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Enhancement Indicators around Augmented LLM */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + 60 * Math.cos((i * Math.PI) / 3)}
                                cy={200 + 60 * Math.sin((i * Math.PI) / 3)}
                                r="3"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 0.8, 0],
                                        scale: [0.5, 1.2, 0.5],
                                        transition: {
                                            duration: 3,
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
                        LLM Enhancement
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        5 Key Advantages
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
