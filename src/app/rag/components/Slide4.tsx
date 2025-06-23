import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for RAG workflow
    const documentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const searchVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [0, 1.2, 1],
            opacity: 1,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2
            }
        }
    };

    const retrievalVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    };

    const citationVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
            transition: {
                duration: 3,
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
                        How Does RAG Solve These Problems?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Grounds LLM responses in verified, organization-specific documents ensuring accuracy and relevance</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides real-time access to updated information eliminating outdated or incorrect AI responses</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables semantic understanding of queries matching intent rather than just keyword similarity</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Maintains complete transparency through source citation enabling verification and compliance requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Integrates seamlessly with existing document management systems and knowledge repositories</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - RAG Problem-Solving Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Knowledge Base */}
                        <motion.g variants={documentVariants}>
                            <rect x="20" y="20" width="60" height="40" rx="4" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="35" textAnchor="middle" className="text-xs fill-green-600 font-medium">Docs</text>
                            <text x="50" y="48" textAnchor="middle" className="text-xs fill-green-600 font-medium">KB</text>
                        </motion.g>

                        <motion.g variants={documentVariants}>
                            <rect x="20" y="80" width="60" height="40" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="50" y="95" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Real-time</text>
                            <text x="50" y="108" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Data</text>
                        </motion.g>

                        <motion.g variants={documentVariants}>
                            <rect x="20" y="140" width="60" height="40" rx="4" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="50" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Verified</text>
                            <text x="50" y="168" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Sources</text>
                        </motion.g>

                        {/* Query Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="220" width="80" height="40" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="60" y="235" textAnchor="middle" className="text-xs fill-red-600 font-medium">User Query</text>
                            <text x="60" y="248" textAnchor="middle" className="text-xs fill-red-600 font-medium">Intent</text>
                        </motion.g>

                        {/* Semantic Search Engine */}
                        <motion.g variants={searchVariants}>
                            <circle cx="160" cy="130" r="30" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="3" />
                            <text x="160" y="125" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">Semantic</text>
                            <text x="160" y="138" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">Search</text>
                        </motion.g>

                        {/* RAG Pipeline */}
                        <motion.g variants={pulseVariants}>
                            <rect x="240" y="100" width="80" height="60" rx="8" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="280" y="120" textAnchor="middle" className="text-xs fill-purple-600 font-bold">RAG</text>
                            <text x="280" y="133" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Pipeline</text>
                            <text x="280" y="146" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Grounded</text>
                        </motion.g>

                        {/* Grounded Response */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="200" width="80" height="50" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="340" y="220" textAnchor="middle" className="text-xs fill-green-600 font-medium">Accurate</text>
                            <text x="340" y="233" textAnchor="middle" className="text-xs fill-green-600 font-medium">Response</text>
                        </motion.g>

                        {/* Source Citations */}
                        <motion.g variants={citationVariants}>
                            <rect x="300" y="270" width="80" height="40" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="340" y="285" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Source</text>
                            <text x="340" y="298" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Citations</text>
                        </motion.g>

                        {/* Retrieval Flow Lines */}
                        <motion.path
                            d="M80 40 Q120 40 130 130"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />
                        <motion.path
                            d="M80 100 Q120 100 130 130"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />
                        <motion.path
                            d="M80 160 Q120 160 130 130"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />

                        {/* Query to Search */}
                        <motion.path
                            d="M100 240 Q130 240 130 160"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />

                        {/* Search to RAG */}
                        <motion.path
                            d="M190 130 Q215 130 240 130"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            variants={retrievalVariants}
                        />

                        {/* RAG to Response */}
                        <motion.path
                            d="M280 160 Q280 180 340 200"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />

                        {/* Response to Citations */}
                        <motion.path
                            d="M340 250 Q340 260 340 270"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={retrievalVariants}
                        />

                        {/* Semantic Matching Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={110 + i * 15}
                                cy={130 + Math.sin(i * 0.8) * 20}
                                r="2"
                                fill={["#22c55e", "#3b82f6", "#a855f7", "#10b981"][i % 4]}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 20, 40],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.25
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Verification Checkmarks */}
                        <motion.g variants={citationVariants}>
                            <circle cx="360" cy="180" r="8" fill="#22c55e" opacity="0.8" />
                            <path d="M356 180 L359 183 L364 177" stroke="white" strokeWidth="2" fill="none" />
                        </motion.g>
                    </svg>

                    {/* Dynamic Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Verified Knowledge Base
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Semantic Understanding
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Real-time Retrieval
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Traceable Sources
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
