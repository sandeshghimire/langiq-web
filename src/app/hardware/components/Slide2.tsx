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

    const serverVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.6, 1, 0.6],
            transition: {
                duration: 2.5,
                repeat: Infinity,
            }
        }
    };

    const gpuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.3, 1, 0.3],
            transition: {
                duration: 1.8,
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
                        Purpose-Built AI in Box
                    </motion.h1>


                    <div className="space-y-0  ">

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enterprise-grade LLM applications with integrated workflows ensuring data safety and reliability</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Entry-level, mid-tier, and advanced hardware configurations for model inference, training, and development</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Purpose-built for developing local open-source and open-weight LLMs with complete data privacy and security</p>
                        </motion.div>



                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Local hardware deployment eliminates cloud dependencies for maximum security and data sovereignty</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Custom enterprise solutions with end-to-end encryption and air-gapped deployment options</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Hardware Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Hardware Tiers */}

                        {/* Entry Level */}
                        <motion.g variants={itemVariants}>
                            <rect x="40" y="60" width="80" height="60" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="2" />
                            <rect x="50" y="80" width="60" height="8" rx="4" fill="#22c55e" opacity="0.7" />
                            <rect x="50" y="95" width="40" height="6" rx="3" fill="#22c55e" opacity="0.5" />
                            <text x="80" y="75" textAnchor="middle" className="text-xs fill-green-600 font-medium">Entry Level</text>
                            <text x="80" y="135" textAnchor="middle" className="text-xs fill-gray-500 font-normal">Inference</text>
                        </motion.g>

                        {/* Mid Tier */}
                        <motion.g variants={itemVariants}>
                            <rect x="40" y="150" width="80" height="60" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" />
                            <rect x="50" y="170" width="60" height="8" rx="4" fill="#3b82f6" opacity="0.7" />
                            <rect x="50" y="180" width="60" height="8" rx="4" fill="#3b82f6" opacity="0.7" />
                            <rect x="50" y="190" width="40" height="6" rx="3" fill="#3b82f6" opacity="0.5" />
                            <text x="80" y="165" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Mid Tier</text>
                            <text x="80" y="225" textAnchor="middle" className="text-xs fill-gray-500 font-normal">Training</text>
                        </motion.g>

                        {/* Advanced */}
                        <motion.g variants={itemVariants}>
                            <rect x="40" y="240" width="80" height="60" rx="8" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="2" />
                            <rect x="50" y="260" width="60" height="8" rx="4" fill="#9333ea" opacity="0.7" />
                            <rect x="50" y="270" width="60" height="8" rx="4" fill="#9333ea" opacity="0.7" />
                            <rect x="50" y="280" width="60" height="8" rx="4" fill="#9333ea" opacity="0.7" />
                            <rect x="50" y="290" width="40" height="6" rx="3" fill="#9333ea" opacity="0.5" />
                            <text x="80" y="255" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Advanced</text>
                            <text x="80" y="315" textAnchor="middle" className="text-xs fill-gray-500 font-normal">Development</text>
                        </motion.g>

                        {/* Central Security Shield */}
                        <motion.g variants={serverVariants}>
                            <path d="M200 120 L220 130 L220 200 L200 210 L180 200 L180 130 Z"
                                fill="rgba(75, 85, 99, 0.1)" stroke="#4b5563" strokeWidth="2" />
                            <circle cx="200" cy="165" r="25" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                            <path d="M190 165 L198 173 L210 155" stroke="#10b981" strokeWidth="3" fill="none" />
                            <text x="200" y="220" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Secure Local</text>
                            <text x="200" y="235" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Deployment</text>
                        </motion.g>

                        {/* Data Privacy Elements */}
                        <motion.g variants={itemVariants}>
                            <rect x="280" y="80" width="80" height="40" rx="8" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" />
                            <circle cx="300" cy="100" r="6" fill="#ef4444" opacity="0.7" />
                            <path d="M295 100 L305 100 M300 95 L300 105" stroke="#ef4444" strokeWidth="2" />
                            <text x="320" y="95" className="text-xs fill-red-600 font-medium">No Cloud</text>
                            <text x="320" y="108" className="text-xs fill-red-600 font-medium">Dependencies</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="150" width="80" height="40" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                            <rect x="295" y="162" width="12" height="16" rx="2" fill="none" stroke="#10b981" strokeWidth="2" />
                            <circle cx="301" cy="165" r="2" fill="#10b981" />
                            <text x="315" y="167" className="text-xs fill-emerald-600 font-medium">Data</text>
                            <text x="315" y="180" className="text-xs fill-emerald-600 font-medium">Sovereignty</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="220" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" />
                            <path d="M295 235 L305 230 L315 235 L315 245 L305 250 L295 245 Z"
                                fill="none" stroke="#3b82f6" strokeWidth="2" />
                            <text x="325" y="237" className="text-xs fill-blue-600 font-medium">Enterprise</text>
                            <text x="325" y="250" className="text-xs fill-blue-600 font-medium">Security</text>
                        </motion.g>

                        {/* Clean Data Flow Lines */}
                        <motion.path
                            d="M120 90 Q160 90 180 140"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M120 180 Q160 180 180 165"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M120 270 Q160 270 180 190"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M220 165 Q250 165 280 165"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Simple Data Indicators */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={140 + i * 15}
                                cy={165 + Math.sin(i) * 10}
                                r="3"
                                fill={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#9333ea"}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Processing Activity Indicators */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="140" r="3" fill="#10b981" opacity="0.8" />
                            <circle cx="200" cy="155" r="2" fill="#10b981" opacity="0.6" />
                            <circle cx="200" cy="175" r="2" fill="#10b981" opacity="0.6" />
                            <circle cx="200" cy="190" r="3" fill="#10b981" opacity="0.8" />
                        </motion.g>
                    </svg>

                    {/* Updated Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Hardware Tiers
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Secure Processing
                    </motion.div>
                    <motion.div
                        className="absolute top-16 right-8 text-xs font-medium text-emerald-600 bg-emerald-50/90 backdrop-blur-sm rounded px-3 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Local Deployment
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
