"use client";

import { motion } from 'framer-motion';

export default function ServicesPage() {
    const services = [
        {
            title: "LLM Integration",
            description: "Connect with leading AI models from OpenAI, Google, Anthropic, and open-source alternatives. We handle API management, prompt engineering, context optimization, and response filtering to ensure reliable, high-quality AI interactions in your applications.",
            icon: "🤖",
            color: "blue"
        },
        {
            title: "RAG Systems",
            description: "Build powerful retrieval-augmented generation systems with automatic vector database integration. Our solutions include efficient chunking strategies, semantic search capabilities, relevance filtering, and context window optimization to create AI applications that leverage your proprietary knowledge bases.",
            icon: "📚",
            color: "green"
        },
        {
            title: "Multi-Agent Systems",
            description: "Deploy collaborative AI agents that work together to solve complex problems. We design agent interaction protocols, knowledge sharing mechanisms, task delegation frameworks, and consensus algorithms to create robust systems capable of sophisticated reasoning and problem-solving beyond single-model capabilities.",
            icon: "👥",
            color: "purple"
        },
        {
            title: "Data Processing",
            description: "Transform, clean, and enrich your data with advanced ML pipelines and workflows. Our solutions include outlier detection, missing data imputation, feature engineering, normalization techniques, and custom data transformation rules tailored to your specific domain requirements.",
            icon: "📊",
            color: "yellow"
        },
        {
            title: "Custom Fine-Tuning",
            description: "Train specialized AI models on your proprietary data using efficient techniques like LoRA. We optimize training datasets, implement parameter-efficient tuning methods, manage validation protocols, and ensure model alignment with your specific use cases while minimizing computational requirements.",
            icon: "🧠",
            color: "red"
        },
        {
            title: "API Orchestration",
            description: "Seamlessly connect multiple AI services and databases into a unified workflow. We design resilient API orchestration layers with intelligent request routing, response caching, fallback mechanisms, and performance monitoring to create reliable AI-powered application architectures.",
            icon: "🔄",
            color: "orange"
        },
        {
            title: "Real-time AI Monitoring",
            description: "Track and analyze AI performance metrics with sophisticated dashboards and alert systems. We implement comprehensive monitoring covering latency tracking, accuracy assessment, drift detection, usage analytics, and cost optimization, enabling continuous improvement of your AI infrastructure.",
            icon: "📈",
            color: "indigo"
        },
        {
            title: "Voice & Speech Processing",
            description: "Implement speech recognition, text-to-speech, and voice analysis capabilities into your applications. Our solutions include speaker identification, emotion detection, accent handling, background noise filtering, and real-time transcription with domain-specific vocabulary optimization.",
            icon: "🎙️",
            color: "pink"
        },
        {
            title: "Computer Vision Integration",
            description: "Add image recognition, object detection, and visual processing capabilities to your systems. We integrate state-of-the-art vision models for scene understanding, facial analysis, optical character recognition (OCR), visual question answering, and custom object detection trained on your specific visual domains.",
            icon: "👁️",
            color: "cyan"
        },
        {
            title: "Sentiment Analysis",
            description: "Understand customer emotions and feedback through advanced NLP sentiment analysis tools. Our solutions detect complex emotional states, identify implicit sentiment, recognize sarcasm, track sentiment trends over time, and provide actionable insights from unstructured text across communication channels.",
            icon: "😊",
            color: "teal"
        },
        {
            title: "Language Translation",
            description: "Deploy neural machine translation systems for accurate, context-aware multilingual communication. We implement domain-specific terminology adaptation, cultural nuance preservation, document-level context awareness, and specialized translation memory systems for high-quality translations across language pairs.",
            icon: "🌐",
            color: "blue"
        },
        {
            title: "Knowledge Graph Construction",
            description: "Build semantic knowledge representations of your data for enhanced AI reasoning and insights. Our solutions include entity relationship extraction, ontology development, inference rule creation, knowledge completion algorithms, and visualization tools that transform disconnected data into queryable knowledge structures.",
            icon: "🕸️",
            color: "purple"
        },
        {
            title: "AI Training & Workshops",
            description: "Equip your team with practical AI skills through customized training programs and workshops. We deliver role-specific knowledge transfer, from executive AI literacy to technical implementation practices, combining theoretical foundations with hands-on exercises tailored to your organization's needs.",
            icon: "🎓",
            color: "green"
        },
        {
            title: "Compliance & Ethics Framework",
            description: "Develop responsible AI governance with built-in bias detection and ethical guidelines. We implement transparent documentation practices, algorithmic impact assessments, continuous monitoring systems, and governance workflows that align your AI implementations with regulatory requirements and organizational values.",
            icon: "⚖️",
            color: "amber"
        },
        {
            title: "Chatbot Development",
            description: "Create intelligent conversational interfaces for customer support and information retrieval. Our chatbot solutions feature context retention, personality consistency, intent recognition, seamless human handoff protocols, and integration with backend systems for both informational and transactional interactions.",
            icon: "💬",
            color: "emerald"
        },
        {
            title: "Predictive Analytics",
            description: "Forecast trends and outcomes using machine learning models trained on historical data. We develop custom predictive solutions incorporating time-series analysis, anomaly detection, scenario modeling, confidence intervals, and interpretability mechanisms to deliver actionable forecasts for informed decision-making.",
            icon: "🔮",
            color: "violet"
        },
        {
            title: "Natural Language Processing",
            description: "Implement text classification, entity recognition, and semantic understanding capabilities. Our NLP solutions include domain-specific language models, custom annotation frameworks, zero-shot classification systems, and document structure analysis for extracting valuable insights from unstructured textual content.",
            icon: "📝",
            color: "rose"
        },
        {
            title: "AI Strategy Consulting",
            description: "Get expert guidance on AI adoption roadmaps, use cases, and ROI optimization. Our consulting services include technological feasibility assessment, implementation timelines, resource planning, risk mitigation strategies, and competitive advantage analysis to ensure your AI investments deliver maximum business value.",
            icon: "🧩",
            color: "red"
        },
        {
            title: "MLOps Infrastructure",
            description: "Build robust deployment pipelines for model versioning, monitoring, and automated retraining. We implement reproducibility frameworks, feature stores, model registries, and deployment automation that bridge the gap between data science experimentation and production-grade AI systems.",
            icon: "⚙️",
            color: "gray"
        },
        {
            title: "Reinforcement Learning Solutions",
            description: "Implement self-improving AI systems that optimize through experience and feedback loops. Our reinforcement learning solutions include environment modeling, reward function design, exploration strategy implementation, and safe learning constraints for applications ranging from resource optimization to autonomous decision-making systems.",
            icon: "🎮",
            color: "lime"
        }
    ];

    // Consistent color mapping for service categories
    const getCardStyle = (index) => {
        return "bg-gray-800/40 hover:bg-gray-800/60";
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-24 md:pt-32">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 handwriting text-center text-blue-100">Our Services</h1>
                <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto text-gray-200 text-lg">
                    LangIQ provides comprehensive AI integration services to help you harness the power of frontier AI models.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`content-box p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] backdrop-blur-sm ${getCardStyle(index)}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h2 className="text-xl font-semibold mb-3 handwriting text-blue-200">
                                {service.title}
                            </h2>
                            <p className="handwriting-alt text-gray-200 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 content-box p-8 max-w-3xl mx-auto bg-gray-800/40">
                    <h2 className="text-2xl font-bold mb-5 handwriting text-center text-blue-100">Custom Enterprise Solutions</h2>
                    <p className="handwriting-alt mb-6 text-gray-200 text-center leading-relaxed">
                        Need something tailored to your specific business needs? Our team of AI specialists can build a custom solution that integrates with your existing systems and workflows.
                    </p>
                    <div className="flex justify-center">
                        <button className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-xl">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
