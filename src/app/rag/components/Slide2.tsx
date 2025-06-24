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
                        What is the RAG ?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Comprehensive document ingestion system supporting PDFs, Word documents, Excel spreadsheets, and database connections</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Advanced vector database integration with popular stores like Chroma and Pinecone for semantic search</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Intelligent text chunking algorithms optimizing document segmentation for enhanced retrieval accuracy and performance</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Semantic search capabilities enabling contextual information retrieval based on meaning rather than keyword matching</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Citation tracking system providing transparent source attribution for all retrieved information and generated responses</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - RAG Pipeline Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Document Sources */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="30" width="60" height="35" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="50" y="52" textAnchor="middle" className="text-xs fill-red-600 font-medium">PDFs</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="75" width="60" height="35" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="50" y="97" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Docs</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="120" width="60" height="35" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="142" textAnchor="middle" className="text-xs fill-green-600 font-medium">Excel</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="165" width="60" height="35" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="50" y="187" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Database</text>
                        </motion.g>

                        {/* Document Processing Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="120" y="80" width="80" height="60" rx="10" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="160" y="105" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Document</text>
                            <text x="160" y="120" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Processing</text>
                        </motion.g>

                        {/* Text Chunking */}
                        <motion.g variants={itemVariants}>
                            <rect x="230" y="60" width="60" height="30" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="260" y="78" textAnchor="middle" className="text-xs fill-violet-600 font-medium">Chunking</text>
                        </motion.g>

                        {/* Vector Database */}
                        <motion.g variants={pulseVariants}>
                            <rect x="230" y="100" width="60" height="50" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="3" />
                            <text x="260" y="120" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">Vector</text>
                            <text x="260" y="135" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Database</text>
                        </motion.g>

                        {/* Query Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="320" y="30" width="60" height="35" rx="6" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
                            <text x="350" y="52" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Query</text>
                        </motion.g>

                        {/* Semantic Search */}
                        <motion.g variants={pulseVariants}>
                            <rect x="320" y="80" width="60" height="50" rx="8" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="3" />
                            <text x="350" y="100" textAnchor="middle" className="text-xs fill-cyan-600 font-bold">Semantic</text>
                            <text x="350" y="115" textAnchor="middle" className="text-xs fill-cyan-600 font-medium">Search</text>
                        </motion.g>

                        {/* Retrieved Context */}
                        <motion.g variants={itemVariants}>
                            <rect x="120" y="180" width="80" height="40" rx="8" fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="2" />
                            <text x="160" y="198" textAnchor="middle" className="text-xs fill-yellow-600 font-medium">Retrieved</text>
                            <text x="160" y="212" textAnchor="middle" className="text-xs fill-yellow-600 font-medium">Context</text>
                        </motion.g>

                        {/* LLM Generation */}
                        <motion.g variants={pulseVariants}>
                            <rect x="230" y="250" width="80" height="50" rx="10" fill="rgba(139, 69, 19, 0.2)" stroke="#8b4513" strokeWidth="3" />
                            <text x="270" y="270" textAnchor="middle" className="text-sm fill-amber-800 font-bold">LLM</text>
                            <text x="270" y="285" textAnchor="middle" className="text-xs fill-amber-800 font-medium">Generation</text>
                        </motion.g>

                        {/* Final Response with Citations */}
                        <motion.g variants={itemVariants}>
                            <rect x="120" y="320" width="120" height="50" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="180" y="340" textAnchor="middle" className="text-xs fill-green-600 font-medium">Response with</text>
                            <text x="180" y="355" textAnchor="middle" className="text-xs fill-green-600 font-medium">Citations</text>
                        </motion.g>

                        {/* Document Ingestion Flow */}
                        <motion.path
                            d="M80 100 Q100 100 120 110"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Chunking Flow */}
                        <motion.path
                            d="M200 110 Q215 110 230 75"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Vector Storage Flow */}
                        <motion.path
                            d="M260 90 Q260 95 260 100"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Query to Search Flow */}
                        <motion.path
                            d="M350 65 Q350 72 350 80"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Search to Database Flow */}
                        <motion.path
                            d="M320 105 Q305 105 290 125"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Retrieval Flow */}
                        <motion.path
                            d="M230 140 Q190 140 160 180"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Context to LLM Flow */}
                        <motion.path
                            d="M200 200 Q230 200 250 250"
                            stroke="#8b4513"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Final Response Flow */}
                        <motion.path
                            d="M250 300 Q210 300 180 320"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Document Particles */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={`doc-${i}`}
                                cx={90 + i * 10}
                                cy={100 + i * 20}
                                r="2"
                                fill={["#ef4444", "#3b82f6", "#22c55e", "#f59e0b"][i]}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 30, 60],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Vector Embeddings Visualization */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={`vector-${i}`}
                                cx={240 + i * 8}
                                cy={125 + Math.sin(i) * 5}
                                r="1.5"
                                fill="#10b981"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.5, 1],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Search Query Animation */}
                        <motion.circle
                            cx={350}
                            cy={105}
                            r="4"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            variants={{
                                hidden: { scale: 0 },
                                visible: {
                                    scale: [0, 1.5, 1],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 1
                                    }
                                }
                            }}
                        />

                        {/* Citation Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.text
                                key={`citation-${i}`}
                                x={140 + i * 20}
                                y={340}
                                textAnchor="middle"
                                className="text-xs fill-green-600 font-bold"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.7, 1],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 2 + i * 0.3
                                        }
                                    }
                                }}
                            >
                                [{i + 1}]
                            </motion.text>
                        ))}
                    </svg>

                    {/* Floating RAG Process Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Document Ingestion
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Semantic Search
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Context Retrieval
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Cited Responses
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
