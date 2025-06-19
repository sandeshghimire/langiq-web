import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
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
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Advantages of Our Approach
                    </motion.h1>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-purple-600 to-red-600 mx-auto md:mx-0 mb-8"
                        variants={itemVariants}
                    />
                    
                    <div className="space-y-6">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-purple-600">Rapid Deployment</h3>
                            <p className="text-gray-600">Get your AI solutions running quickly with our pre-built components and infrastructure</p>
                        </motion.div>
                        
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-red-600">Scalable Solutions</h3>
                            <p className="text-gray-600">Built for growth with enterprise-grade architecture and performance optimization</p>
                        </motion.div>
                        
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-pink-600">Cost Effective</h3>
                            <p className="text-gray-600">Reduce development time and operational costs with our integrated platform</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Empty for now */}
                <motion.div
                    className="hidden md:block"
                    variants={itemVariants}
                >
                    {/* Empty space for future content */}
                </motion.div>
            </div>
        </motion.div>
    );
}
