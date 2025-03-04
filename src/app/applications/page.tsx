"use client";

import { motion } from 'framer-motion';

export default function ApplicationsPage() {
    const applications = [
        {
            title: "Document Q&A",
            description: "Upload documents and ask questions to get instant, accurate answers based on the content.",
            use_cases: ["Legal contract analysis", "Technical documentation search", "Research paper review"],
            icon: "📄"
        },
        {
            title: "Knowledge Base",
            description: "Create an intelligent knowledge base that learns from your company data and provides contextual information.",
            use_cases: ["Internal company wikis", "Customer support", "Onboarding materials"],
            icon: "🧠"
        },
        {
            title: "Content Generator",
            description: "Generate high-quality content with customizable tone, style, and factual accuracy.",
            use_cases: ["Marketing copy", "Product descriptions", "Blog post drafting"],
            icon: "✍️"
        },
        {
            title: "Data Analyst",
            description: "Analyze data through natural language queries and generate visualizations and insights automatically.",
            use_cases: ["Business intelligence", "Market research", "Performance metrics"],
            icon: "📊"
        },
        {
            title: "Conversation Agent",
            description: "Build sophisticated AI assistants that maintain context and integrate with your existing systems.",
            use_cases: ["Customer service", "Virtual assistants", "Sales support"],
            icon: "💬"
        },
        {
            title: "Code Assistant",
            description: "Get help with programming tasks, code review, and automated documentation.",
            use_cases: ["Developer productivity", "Legacy code maintenance", "Learning programming"],
            icon: "💻"
        },
        {
            title: "Language Translator",
            description: "Translate text between languages with high accuracy while preserving context and cultural nuances.",
            use_cases: ["International business communication", "Content localization", "Cross-cultural research"],
            icon: "🌐"
        },
        {
            title: "Meeting Assistant",
            description: "Record, transcribe, and summarize meetings with action items and key insights automatically extracted.",
            use_cases: ["Executive briefings", "Team coordination", "Project management"],
            icon: "🗓️"
        },
        {
            title: "Email Summarizer",
            description: "Automatically organize and prioritize emails, generating concise summaries and suggested responses.",
            use_cases: ["Inbox management", "Customer communications", "Team coordination"],
            icon: "📧"
        },
        {
            title: "Research Assistant",
            description: "Search across academic papers, synthesize findings, and identify connections between different research areas.",
            use_cases: ["Literature reviews", "Academic research", "Competitive intelligence"],
            icon: "🔍"
        },
        {
            title: "Learning Manager",
            description: "Create personalized learning experiences that adapt to individual progress and learning styles.",
            use_cases: ["Employee training", "Student education", "Professional development"],
            icon: "📚"
        },
        {
            title: "Trend Analyzer",
            description: "Monitor social media, news, and industry publications to identify emerging trends and sentiment patterns.",
            use_cases: ["Brand monitoring", "Market intelligence", "Product development"],
            icon: "📈"
        },
        {
            title: "Compliance Monitor",
            description: "Review documents and communications for regulatory compliance and flag potential issues.",
            use_cases: ["Legal risk management", "Industry regulation adherence", "Policy enforcement"],
            icon: "⚖️"
        },
        {
            title: "Customer Feedback Analyzer",
            description: "Process customer reviews and feedback to extract actionable insights and sentiment analysis.",
            use_cases: ["Product improvement", "Service optimization", "Competitive analysis"],
            icon: "🔊"
        },
        {
            title: "Product Recommender",
            description: "Create sophisticated recommendation systems that understand user preferences and context.",
            use_cases: ["E-commerce personalization", "Content discovery", "Service matching"],
            icon: "🛍️"
        },
        {
            title: "Social Media Manager",
            description: "Generate, schedule, and optimize social media content while monitoring engagement and trends.",
            use_cases: ["Brand presence", "Campaign management", "Community engagement"],
            icon: "📱"
        },
        {
            title: "Resume Analyzer",
            description: "Screen and rank job candidates by analyzing resumes and matching skills to job requirements.",
            use_cases: ["Recruitment", "Talent acquisition", "Career development"],
            icon: "📋"
        },
        {
            title: "Grant Writer",
            description: "Create compelling grant proposals tailored to specific funding opportunities and requirements.",
            use_cases: ["Research funding", "Nonprofit support", "Educational initiatives"],
            icon: "💰"
        },
        {
            title: "Medical Assistant",
            description: "Support healthcare professionals with patient information summarization and research assistance.",
            use_cases: ["Clinical documentation", "Medical research", "Patient education"],
            icon: "🏥"
        },
        {
            title: "Creative Writing Coach",
            description: "Provide feedback on writing style, offer suggestions, and help overcome writer's block.",
            use_cases: ["Fiction writing", "Content creation", "Copywriting improvement"],
            icon: "🖋️"
        }
    ];

    const industries = [
        "Healthcare", "Finance", "Legal", "Education",
        "E-commerce", "Manufacturing", "Media", "Real Estate"
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-8 pt-32">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">Applications</h1>
                <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                    Discover the many ways LangIQ can transform your business processes and enhance productivity.
                </p>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {applications.map((app, index) => (
                        <motion.div
                            key={app.title}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-3">{app.icon}</div>
                            <h2 className="text-xl font-semibold mb-2 handwriting">{app.title}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300">
                                {app.description}
                            </p>

                            <h3 className="text-sm font-medium mb-2 text-blue-400 handwriting">Use Cases:</h3>
                            <ul className="list-disc list-inside space-y-1 handwriting-alt text-sm text-gray-300">
                                {app.use_cases.map(use_case => (
                                    <li key={use_case}>{use_case}</li>
                                ))}
                            </ul>

                            <button className="mt-4 handwriting text-sm border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-4 py-1 transition-all">
                                Learn More →
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Industry Solutions */}
                <motion.div
                    className="content-box p-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-6 handwriting text-center">Industry Solutions</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry}
                                className="bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-lg cursor-pointer transition-all"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                            >
                                <h3 className="handwriting text-center">{industry}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Custom Solution */}
                <motion.div
                    className="content-box p-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-4 handwriting text-center">Need a Custom Solution?</h2>
                    <p className="handwriting-alt text-center mb-6">
                        Our team can build a tailored application that perfectly matches your business requirements and integrates with your existing systems.
                    </p>
                    <div className="flex justify-center">
                        <button className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
                            Schedule a Demo
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
