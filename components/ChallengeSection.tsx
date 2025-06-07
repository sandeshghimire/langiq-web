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

export default function ChallengeSection() {
    const challenges = [
        { title: 'Strategy & Identification', description: 'Identifying impactful areas for LLM integration and defining a clear migration strategy.' },
        { title: 'LLM Complexity', description: 'Navigating LLM selection, customization, and fine-tuning.' },
        { title: 'Application Development', description: 'Developing robust, scalable, and secure LLM applications integrated with current systems.' },
        { title: 'Data & Security', description: 'Addressing data privacy, security, and specialized computational resource needs.' },
        { title: 'Internal Expertise', description: 'Building internal expertise and adapting company culture for AI-driven workflows.' },
        { title: 'Resource Management', description: 'Allocating sufficient budget, time, and computational resources for successful LLM implementation.' },
    ];

    return (
        <section className="h-screen flex flex-col justify-center py-10 bg-gray-900/95 snap-start" id="challenge">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.h2
                    className="font-handwritten text-4xl md:text-5xl text-center mb-12 text-purple-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    The Migration Challenge
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h3
                        className="font-handwritten text-3xl md:text-4xl text-center mb-8 text-cyan-400"
                        variants={fadeIn}
                    >
                        From Potential to Practical LLM Integration
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto"
                        variants={fadeIn}
                    >
                        Many organizations recognize the immense potential of LLMs but face significant hurdles in effectively migrating their existing processes. Key challenges include:
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {challenges.map((challenge, index) => (
                            <motion.div key={index} variants={cardVariant} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="font-semibold text-xl text-purple-400 mb-2">{challenge.title}</h4>
                                <p className="text-gray-300">{challenge.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
