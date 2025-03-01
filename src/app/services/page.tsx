"use client";

import { motion } from 'framer-motion';

export default function ServicesPage() {
    const services = [
        {
            title: "LLM Integration",
            description: "Connect with leading AI models from OpenAI, Google, Anthropic, and open-source alternatives.",
            icon: "🤖",
            color: "blue"
        },
        {
            title: "RAG Systems",
            description: "Build powerful retrieval-augmented generation systems with automatic vector database integration.",
            icon: "📚",
            color: "green"
        },
        {
            title: "Multi-Agent Systems",
            description: "Deploy collaborative AI agents that work together to solve complex problems.",
            icon: "👥",
            color: "purple"
        },
        {
            title: "Data Processing",
            description: "Transform, clean, and enrich your data with advanced ML pipelines and workflows.",
            icon: "📊",
            color: "yellow"
        },
        {
            title: "Custom Fine-Tuning",
            description: "Train specialized AI models on your proprietary data using efficient techniques like LoRA.",
            icon: "🧠",
            color: "red"
        },
        {
            title: "RAG Systems",
            description: "Build powerful retrieval-augmented generation systems with automatic vector database integration.",
            icon: "📚",
            color: "green"
        },
        {
            title: "Multi-Agent Systems",
            description: "Deploy collaborative AI agents that work together to solve complex problems.",
            icon: "👥",
            color: "purple"
        },
        {
            title: "Data Processing",
            description: "Transform, clean, and enrich your data with advanced ML pipelines and workflows.",
            icon: "📊",
            color: "yellow"
        },
        {
            title: "Custom Fine-Tuning",
            description: "Train specialized AI models on your proprietary data using efficient techniques like LoRA.",
            icon: "🧠",
            color: "red"
        },
        {
            title: "API Orchestration",
            description: "Seamlessly connect multiple AI services and databases into a unified workflow.",
            icon: "🔄",
            color: "orange"
        }
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-8">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">Our Services</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto">
                    LangIQ provides comprehensive AI integration services to help you harness the power of frontier AI models.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`text-4xl mb-3 text-${service.color}-400`}>{service.icon}</div>
                            <h2 className={`text-xl font-semibold mb-2 handwriting text-${service.color}-400`}>
                                {service.title}
                            </h2>
                            <p className="handwriting-alt text-gray-200">
                                {service.description}
                            </p>
                            <button className="mt-4 handwriting text-sm border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-4 py-1 transition-all">
                                Learn More →
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 content-box p-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 handwriting text-center">Custom Enterprise Solutions</h2>
                    <p className="handwriting-alt mb-4">
                        Need something tailored to your specific business needs? Our team of AI specialists can build a custom solution that integrates with your existing systems and workflows.
                    </p>
                    <div className="flex justify-center">
                        <button className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
