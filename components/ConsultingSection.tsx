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

export default function ConsultingSection() {
    const services = [
        { title: 'Assess & Strategize', description: 'Deeply understand workflows, identify pain points, and co-create a tailored migration roadmap.' },
        { title: 'Custom Workflow Design', description: 'Design bespoke LLM-powered solutions to replace or augment existing processes.' },
        { title: 'LLM Optimization & Integration', description: 'Expert advice on LLM selection, prompt engineering, fine-tuning, and seamless system integration.' },
        { title: 'Guided Deployment & Change Management', description: 'Hands-on support for deployment and assistance with organizational adoption.' },
        { title: 'Empowerment & Ongoing Support', description: 'Equip your teams with skills for long-term success with LLM-based systems.' },
    ];

    return (
        <section className="h-screen flex flex-col justify-center py-10 bg-gray-900/90 snap-start" id="consulting">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.h2
                    className="font-handwritten text-4xl md:text-5xl text-center mb-12 text-purple-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Strategic Consulting Services
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
                        Architecting Your LLM Migration
                    </motion.h3>
                    <motion.p
                        className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto"
                        variants={fadeIn}
                    >
                        Our Expert Consulting Services are at the heart of your LLM migration, providing strategic guidance and hands-on support throughout your transformation journey.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div key={index} variants={cardVariant} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h5 className="font-semibold text-xl text-purple-400 mb-2">{service.title}</h5>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
