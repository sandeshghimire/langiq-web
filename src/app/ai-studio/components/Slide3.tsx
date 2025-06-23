import { motion } from "framer-motion";

interface Slide3Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef }: Slide3Props) {
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
                        Why AI Studio?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Traditional AI development requires extensive coding expertise, limiting accessibility to specialized developers</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complex prompt engineering and model integration create significant barriers for rapid prototyping</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Team collaboration on AI projects often lacks centralized coordination and version management</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Deployment of AI applications typically involves intricate technical configurations and infrastructure setup</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need faster time-to-market for AI solutions without compromising quality or functionality</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Problem/Solution Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Traditional Development - Complex Code */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="30" width="100" height="80" rx="8" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="70" y="50" textAnchor="middle" className="text-xs fill-red-600 font-medium">Complex</text>
                            <text x="70" y="65" textAnchor="middle" className="text-xs fill-red-600 font-medium">Coding</text>
                            <text x="70" y="80" textAnchor="middle" className="text-xs fill-red-600 font-medium">Required</text>

                            {/* Code complexity lines */}
                            {[...Array(8)].map((_, i) => (
                                <motion.line
                                    key={i}
                                    x1="30"
                                    y1={90 + i * 3}
                                    x2={90 + (i % 3) * 7}
                                    y2={90 + i * 3}
                                    stroke="#ef4444"
                                    strokeWidth="1"
                                    opacity="0.6"
                                    variants={{
                                        hidden: { pathLength: 0 },
                                        visible: {
                                            pathLength: 1,
                                            transition: { delay: i * 0.1, duration: 0.5 }
                                        }
                                    }}
                                />
                            ))}
                        </motion.g>

                        {/* Barriers */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="140" width="100" height="60" rx="8" fill="rgba(245, 101, 101, 0.1)" stroke="#f56565" strokeWidth="2" />
                            <text x="70" y="160" textAnchor="middle" className="text-xs fill-red-500 font-medium">Integration</text>
                            <text x="70" y="175" textAnchor="middle" className="text-xs fill-red-500 font-medium">Barriers</text>

                            {/* Barrier symbols */}
                            {[...Array(3)].map((_, i) => (
                                <motion.rect
                                    key={i}
                                    x={30 + i * 25}
                                    y="180"
                                    width="3"
                                    height="15"
                                    fill="#f56565"
                                    variants={{
                                        hidden: { scaleY: 0 },
                                        visible: {
                                            scaleY: 1,
                                            transition: { delay: i * 0.2, duration: 0.3 }
                                        }
                                    }}
                                />
                            ))}
                        </motion.g>

                        {/* Manual Process */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="230" width="100" height="60" rx="8" fill="rgba(251, 146, 60, 0.1)" stroke="#fb923c" strokeWidth="2" />
                            <text x="70" y="250" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Manual</text>
                            <text x="70" y="265" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Deployment</text>

                            {/* Manual process gears */}
                            <motion.circle
                                cx="45"
                                cy="275"
                                r="8"
                                fill="none"
                                stroke="#fb923c"
                                strokeWidth="2"
                                variants={{
                                    hidden: { rotate: 0 },
                                    visible: {
                                        rotate: 360,
                                        transition: { duration: 4, repeat: Infinity, ease: "linear" }
                                    }
                                }}
                            />
                            <motion.circle
                                cx="70"
                                cy="275"
                                r="6"
                                fill="none"
                                stroke="#fb923c"
                                strokeWidth="2"
                                variants={{
                                    hidden: { rotate: 0 },
                                    visible: {
                                        rotate: -360,
                                        transition: { duration: 3, repeat: Infinity, ease: "linear" }
                                    }
                                }}
                            />
                        </motion.g>

                        {/* Arrow pointing to solution */}
                        <motion.path
                            d="M140 200 L250 200"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { delay: 1, duration: 1 }
                                }
                            }}
                        />

                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                            </marker>
                        </defs>

                        {/* AI Studio Solution */}
                        <motion.g variants={itemVariants}>
                            <rect x="270" y="80" width="100" height="240" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                            <text x="320" y="100" textAnchor="middle" className="text-sm fill-green-600 font-bold">AI Studio</text>
                            <text x="320" y="115" textAnchor="middle" className="text-xs fill-green-600">Solution</text>

                            {/* Visual code blocks - simplified */}
                            <motion.rect x="280" y="130" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" variants={pulseVariants} />
                            <text x="320" y="148" textAnchor="middle" className="text-xs fill-green-700">Drag & Drop</text>

                            {/* Integration made easy */}
                            <motion.rect x="280" y="170" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" variants={pulseVariants} />
                            <text x="320" y="188" textAnchor="middle" className="text-xs fill-green-700">Auto Integration</text>

                            {/* One-click deployment */}
                            <motion.rect x="280" y="210" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" variants={pulseVariants} />
                            <text x="320" y="228" textAnchor="middle" className="text-xs fill-green-700">1-Click Deploy</text>

                            {/* Team collaboration */}
                            <motion.rect x="280" y="250" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" variants={pulseVariants} />
                            <text x="320" y="268" textAnchor="middle" className="text-xs fill-green-700">Team Collab</text>

                            {/* Success indicator */}
                            <motion.circle
                                cx="320"
                                cy="300"
                                r="15"
                                fill="#10b981"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: {
                                        scale: [0, 1.2, 1],
                                        transition: { delay: 2, duration: 0.6 }
                                    }
                                }}
                            />
                            <motion.path
                                d="M312 300 L318 306 L328 294"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: 2.5, duration: 0.5 }
                                    }
                                }}
                            />
                        </motion.g>
                    </svg>

                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Simplified Development
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
