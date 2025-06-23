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
                        How AI Studio work?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Democratizes AI development by providing visual tools accessible to non-technical team members</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Streamlines workflow creation through pre-built components and templates for common AI patterns</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Centralizes project management with shared workspaces, progress tracking, and audit trails</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Automates deployment processes with integrated CI/CD tools and monitoring capabilities</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Reduces development time from weeks to days through rapid prototyping and iterative testing</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Studio Workflow Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Visual Workflow Builder */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="40" width="100" height="50" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="70" y="60" textAnchor="middle" className="text-xs fill-green-600 font-medium">Visual</text>
                            <text x="70" y="75" textAnchor="middle" className="text-xs fill-green-600 font-medium">Builder</text>
                        </motion.g>

                        {/* Pre-built Components */}
                        <motion.g variants={itemVariants}>
                            <rect x="150" y="40" width="100" height="50" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="200" y="60" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Pre-built</text>
                            <text x="200" y="75" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Components</text>
                        </motion.g>

                        {/* Team Workspace */}
                        <motion.g variants={pulseVariants}>
                            <rect x="85" y="120" width="130" height="80" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="150" y="145" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Team Workspace</text>
                            <text x="150" y="165" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Shared Project</text>
                            <text x="150" y="180" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Management</text>
                        </motion.g>

                        {/* Deployment Pipeline */}
                        <motion.g variants={itemVariants}>
                            <rect x="280" y="120" width="100" height="80" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="330" y="145" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Auto</text>
                            <text x="330" y="160" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Deployment</text>
                            <text x="330" y="175" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">& Monitoring</text>
                        </motion.g>

                        {/* Rapid Prototyping */}
                        <motion.g variants={itemVariants}>
                            <rect x="85" y="240" width="130" height="50" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="150" y="260" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Rapid Prototyping</text>
                            <text x="150" y="275" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Weeks → Days</text>
                        </motion.g>

                        {/* Workflow Connections */}
                        <motion.path
                            d="M70 90 Q70 105 85 120"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 90 Q200 105 215 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M215 160 Q247 160 280 160"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M150 200 Q150 220 150 240"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Workflow Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={70 + i * 40}
                                cy={110 + Math.sin(i) * 10}
                                r="3"
                                fill={["#22c55e", "#3b82f6", "#9333ea", "#10b981", "#f59e0b"][i]}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}

                        {/* Team Collaboration Icons */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={130 + i * 20}
                                cy={160}
                                r="4"
                                fill="#9333ea"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: {
                                        scale: [0, 1.2, 1],
                                        opacity: [0, 1, 0.8],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Progress Indicators */}
                        <motion.rect
                            x="290"
                            y="190"
                            width="80"
                            height="4"
                            rx="2"
                            fill="rgba(16, 185, 129, 0.3)"
                            variants={itemVariants}
                        />
                        <motion.rect
                            x="290"
                            y="190"
                            width="0"
                            height="4"
                            rx="2"
                            fill="#10b981"
                            variants={{
                                hidden: { width: 0 },
                                visible: {
                                    width: [0, 80, 0],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                    }
                                }
                            }}
                        />
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Visual AI Development
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Streamlined Deployment
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
