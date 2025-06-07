"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PartnershipSection() {
    const benefits = [
        { title: 'Mission-Driven Focus', description: 'Our entire approach is centered on successfully migrating your business to LLM workflows.' },
        { title: 'Expert-Led Transition', description: 'Benefit from the deep expertise of our consultants who guide every step of the process.' },
        { title: 'Accelerated & De-Risked Adoption', description: 'Our proven methodologies and integrated platform speed up implementation while mitigating common pitfalls.' },
        { title: 'Tailored & Integrated Solutions', description: 'Receive LLM workflows designed specifically for your needs and seamlessly integrated into your environment.' },
        { title: 'Sustainable Transformation', description: 'We empower your organization for long-term success in the AI era.' },
    ];

    return (
        <section className="h-screen flex flex-col justify-center py-10 bg-gray-900/95 snap-start" id="partnership">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900/40"></div>
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="font-handwritten text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Why Partner with LangIQ.ai for Your LLM Migration?
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4, staggerChildren: 0.1 }}
                    >
                        {benefits.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                className={`bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300 ${index === 3 && 'md:col-start-1 lg:col-start-auto'} ${index === 4 && 'md:col-start-2 lg:col-start-auto md:col-span-1 lg:col-span-1'}`}
                            >
                                <h3 className="text-purple-400 font-semibold text-xl mb-3">{point.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p
                        className="text-lg text-gray-300 mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        LangIQ.ai is committed to being your trusted advisor and implementation partner, turning the promise of LLMs into a practical reality for your business. Let us guide your migration to a more intelligent and efficient future.
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                        >
                            Start Your Migration
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
