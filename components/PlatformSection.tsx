"use client";

import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PlatformSection() {
    const platforms = [
        { title: 'AI Studio Platform', description: 'Visual, low-code environment for rapid prototyping and building new LLM workflows.' },
        { title: 'Software Libraries & Frameworks', description: 'Production-ready libraries for Prompts, RAG, Tools, Agents, and Fine-tuning.' },
        { title: 'AI Box Hardware', description: 'Optimized on-premises hardware for secure and efficient LLM workflow operation.' },
    ];

    return (
        <section className="h-screen flex flex-col justify-center py-10 bg-gray-900/95 snap-start" id="platform">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.h2
                    className="font-handwritten text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Our Integrated Platform
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h3
                        className="font-handwritten text-2xl md:text-3xl text-center mb-8 text-cyan-400"
                        variants={fadeIn}
                    >
                        Supporting Your Migration with Technology
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed"
                        variants={fadeIn}
                    >
                        Our comprehensive AI ecosystem provides the tools and infrastructure needed to build, deploy, and manage your LLM-powered workflows efficiently.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div key={index} variants={cardVariant} className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300">
                                <h5 className="font-semibold text-xl text-purple-400 mb-4">{platform.title}</h5>
                                <p className="text-gray-300 leading-relaxed">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
