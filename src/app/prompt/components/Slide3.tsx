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
                        Why Prompt Engineering ?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Different LLM providers have varying API formats, authentication methods, and response structures</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Effective prompt crafting requires iterative testing, version management, and collaborative refinement processes</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Production applications need reliable caching, error handling, and performance optimization for user experience</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations require consistent interfaces to avoid vendor lock-in and enable flexible model switching</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complex prompting techniques like chain-of-thought reasoning demand specialized tools and structured approaches</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Prompt Engineering Challenges Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Multiple LLM Provider Boxes */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="30" width="70" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="55" y="50" textAnchor="middle" className="text-xs fill-green-600 font-medium">OpenAI</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="80" width="70" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="55" y="100" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Claude</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="130" width="70" height="40" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="55" y="150" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Gemini</text>
                        </motion.g>

                        {/* Prompt Engineering Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="150" y="80" width="100" height="80" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="110" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Prompt</text>
                            <text x="200" y="125" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Engineering</text>
                            <text x="200" y="145" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Platform</text>
                        </motion.g>

                        {/* Challenges Icons */}
                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="60" r="20" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="320" y="65" textAnchor="middle" className="text-xs fill-red-600 font-medium">API</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="120" r="20" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="320" y="125" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Cache</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="320" cy="180" r="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="320" y="185" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Test</text>
                        </motion.g>

                        {/* Complex Connection Lines */}
                        <motion.path
                            d="M90 50 Q120 50 150 100"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="5,5"
                        />
                        <motion.path
                            d="M90 100 L150 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="5,5"
                        />
                        <motion.path
                            d="M90 150 Q120 150 150 140"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="5,5"
                        />

                        {/* Output Connections */}
                        <motion.path
                            d="M250 100 Q285 80 300 60"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 120 L300 120"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 140 Q285 160 300 180"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Iterative Feedback Loop */}
                        <motion.path
                            d="M300 200 Q200 230 150 200 Q100 170 120 120"
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="3,3"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 0.7,
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                    }
                                }
                            }}
                        />

                        {/* Version Control Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={160 + i * 20}
                                y={200}
                                width="15"
                                height="8"
                                rx="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, y: 5 },
                                    visible: {
                                        opacity: [0, 1, 0.5],
                                        y: [5, 0, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Complexity Indicators */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={130 + (i % 4) * 25}
                                cy={240 + Math.floor(i / 4) * 20}
                                r="2"
                                fill={["#ef4444", "#f59e0b", "#22c55e", "#3b82f6"][i % 4]}
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
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Multiple Providers
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Complex Management
                    </motion.div>
                    <motion.div
                        className="absolute bottom-8 left-16 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Iterative Testing
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Version Control
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
