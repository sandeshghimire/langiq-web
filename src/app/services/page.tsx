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
            title: "API Orchestration",
            description: "Seamlessly connect multiple AI services and databases into a unified workflow.",
            icon: "🔄",
            color: "orange"
        },
        {
            title: "Real-time AI Monitoring",
            description: "Track and analyze AI performance metrics with sophisticated dashboards and alert systems.",
            icon: "📈",
            color: "indigo"
        },
        {
            title: "Voice & Speech Processing",
            description: "Implement speech recognition, text-to-speech, and voice analysis capabilities into your applications.",
            icon: "🎙️",
            color: "pink"
        },
        {
            title: "Computer Vision Integration",
            description: "Add image recognition, object detection, and visual processing capabilities to your systems.",
            icon: "👁️",
            color: "cyan"
        },
        {
            title: "Sentiment Analysis",
            description: "Understand customer emotions and feedback through advanced NLP sentiment analysis tools.",
            icon: "😊",
            color: "teal"
        },
        {
            title: "Language Translation",
            description: "Deploy neural machine translation systems for accurate, context-aware multilingual communication.",
            icon: "🌐",
            color: "blue"
        },
        {
            title: "Knowledge Graph Construction",
            description: "Build semantic knowledge representations of your data for enhanced AI reasoning and insights.",
            icon: "🕸️",
            color: "purple"
        },
        {
            title: "AI Training & Workshops",
            description: "Equip your team with practical AI skills through customized training programs and workshops.",
            icon: "🎓",
            color: "green"
        },
        {
            title: "Compliance & Ethics Framework",
            description: "Develop responsible AI governance with built-in bias detection and ethical guidelines.",
            icon: "⚖️",
            color: "amber"
        },
        {
            title: "Chatbot Development",
            description: "Create intelligent conversational interfaces for customer support and information retrieval.",
            icon: "💬",
            color: "emerald"
        },
        {
            title: "Predictive Analytics",
            description: "Forecast trends and outcomes using machine learning models trained on historical data.",
            icon: "🔮",
            color: "violet"
        },
        {
            title: "Natural Language Processing",
            description: "Implement text classification, entity recognition, and semantic understanding capabilities.",
            icon: "📝",
            color: "rose"
        },
        {
            title: "AI Strategy Consulting",
            description: "Get expert guidance on AI adoption roadmaps, use cases, and ROI optimization.",
            icon: "🧩",
            color: "red"
        },
        {
            title: "MLOps Infrastructure",
            description: "Build robust deployment pipelines for model versioning, monitoring, and automated retraining.",
            icon: "⚙️",
            color: "gray"
        },
        {
            title: "Reinforcement Learning Solutions",
            description: "Implement self-improving AI systems that optimize through experience and feedback loops.",
            icon: "🎮",
            color: "lime"
        }
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
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
