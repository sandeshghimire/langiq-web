import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for RAG problems visualization
    const problemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0.5],
            scale: [0, 1.2, 1],
            transition: {
                duration: 2.5,
                repeat: Infinity,
            }
        }
    };

    const disconnectedVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const isolatedVariants = {
        hidden: { scale: 1, opacity: 0.5 },
        visible: {
            scale: [1, 0.9, 1],
            opacity: [0.5, 0.8, 0.5],
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
                        Why RAG ?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Standard LLMs lack access to organization-specific, proprietary information and recent data updates</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">AI responses often contain hallucinations or outdated information when operating without contextual grounding</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need AI systems that can leverage their extensive knowledge bases and documentation</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Traditional search methods fail to capture semantic relationships and contextual relevance in complex queries</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Compliance and accuracy requirements demand transparent source attribution for AI-generated responses and recommendations</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - RAG Problems Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Isolated LLM */}
                        <motion.g variants={isolatedVariants}>
                            <circle cx="200" cy="200" r="45" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
                            <text x="200" y="195" textAnchor="middle" className="text-sm fill-red-600 font-bold">LLM</text>
                            <text x="200" y="210" textAnchor="middle" className="text-xs fill-red-600 font-medium">Isolated</text>
                        </motion.g>

                        {/* Outdated Knowledge Base */}
                        <motion.g variants={itemVariants}>
                            <rect x="50" y="50" width="70" height="50" rx="6" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="85" y="70" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Outdated</text>
                            <text x="85" y="85" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Knowledge</text>
                            {/* Clock icon indicating old data */}
                            <circle cx="110" cy="60" r="8" fill="none" stroke="#fb923c" strokeWidth="1.5" />
                            <path d="M110 55 L110 60 L113 63" stroke="#fb923c" strokeWidth="1.5" fill="none" />
                        </motion.g>

                        {/* Disconnected Documents */}
                        <motion.g variants={itemVariants}>
                            <rect x="280" y="60" width="70" height="50" rx="6" fill="rgba(156, 163, 175, 0.2)" stroke="#9ca3af" strokeWidth="2" />
                            <text x="315" y="80" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Private</text>
                            <text x="315" y="95" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Docs</text>
                            {/* Lock icon */}
                            <rect x="330" y="65" width="6" height="8" rx="1" fill="none" stroke="#9ca3af" strokeWidth="1" />
                            <circle cx="333" cy="67" r="2" fill="none" stroke="#9ca3af" strokeWidth="1" />
                        </motion.g>

                        {/* Hallucination Indicators */}
                        <motion.g variants={problemVariants}>
                            <circle cx="320" cy="200" r="25" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" />
                            <text x="320" y="200" textAnchor="middle" className="text-xs fill-red-600 font-bold">?</text>
                            <text x="320" y="230" textAnchor="middle" className="text-xs fill-red-600 font-medium">Hallucination</text>
                        </motion.g>

                        <motion.g variants={problemVariants}>
                            <circle cx="80" cy="200" r="25" fill="rgba(245, 101, 101, 0.1)" stroke="#f56565" strokeWidth="2" />
                            <text x="80" y="200" textAnchor="middle" className="text-xs fill-red-500 font-bold">✗</text>
                            <text x="80" y="230" textAnchor="middle" className="text-xs fill-red-500 font-medium">Inaccurate</text>
                        </motion.g>

                        {/* Broken Connection Lines */}
                        <motion.path
                            d="M120 75 Q160 75 160 180"
                            stroke="#fb923c"
                            strokeWidth="2"
                            strokeDasharray="8,4"
                            fill="none"
                            variants={disconnectedVariants}
                        />
                        <motion.path
                            d="M280 85 Q240 85 240 180"
                            stroke="#9ca3af"
                            strokeWidth="2"
                            strokeDasharray="8,4"
                            fill="none"
                            variants={disconnectedVariants}
                        />

                        {/* Question Mark Particles around LLM */}
                        {[...Array(4)].map((_, i) => (
                            <motion.text
                                key={i}
                                x={200 + Math.cos(i * Math.PI / 2) * 70}
                                y={200 + Math.sin(i * Math.PI / 2) * 70}
                                textAnchor="middle"
                                className="text-lg fill-red-400 font-bold"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.2, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }
                                }}
                            >
                                ?
                            </motion.text>
                        ))}

                        {/* Warning indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={180 + i * 20}
                                cy={180}
                                r="2"
                                fill="#ef4444"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Compliance Issues */}
                        <motion.g variants={itemVariants}>
                            <rect x="50" y="280" width="80" height="40" rx="6" fill="rgba(185, 28, 28, 0.1)" stroke="#b91c1c" strokeWidth="2" />
                            <text x="90" y="295" textAnchor="middle" className="text-xs fill-red-700 font-medium">No Source</text>
                            <text x="90" y="310" textAnchor="middle" className="text-xs fill-red-700 font-medium">Attribution</text>
                        </motion.g>

                        {/* Knowledge Gaps */}
                        <motion.g variants={itemVariants}>
                            <rect x="270" y="280" width="80" height="40" rx="6" fill="rgba(75, 85, 99, 0.1)" stroke="#4b5563" strokeWidth="2" strokeDasharray="3,3" />
                            <text x="310" y="295" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Knowledge</text>
                            <text x="310" y="310" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Gaps</text>
                        </motion.g>
                    </svg>

                    {/* Problem Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-red-600 bg-red-50/80 backdrop-blur-sm rounded px-2 py-1 border border-red-200"
                        variants={itemVariants}
                    >
                        Information Silos
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-orange-600 bg-orange-50/80 backdrop-blur-sm rounded px-2 py-1 border border-orange-200"
                        variants={itemVariants}
                    >
                        Unreliable Responses
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
