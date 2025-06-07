"use client";

import Link from 'next/link';
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

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col justify-center py-10 relative overflow-hidden snap-start bg-gray-900/95" id="hero">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-gray-900/90"></div>
            <div className="grid-bg absolute inset-0 opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="font-handwritten text-4xl md:text-5xl lg:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                        variants={fadeIn}
                    >
                        LangIQ.ai: Your Expert Partner for Migrating to AI LLM-Powered Workflows
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
                        variants={fadeIn}
                    >
                        Our Core Mission: To Seamlessly Transition Your Business to the Future of Work with LLMs. At LangIQ.ai, we empower your organization to migrate from traditional operations to intelligent, LLM-based workflows, ensuring you unlock transformative efficiencies and achieve measurable business impact.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={fadeIn}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact"
                                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/30 inline-block">
                                Consult Our Experts
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/about"
                                className="bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600/30 hover:border-purple-500/50 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 backdrop-blur-sm inline-block">
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
