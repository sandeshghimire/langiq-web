"use client";

import { motion } from 'framer-motion';

export default function ArticlesPage() {
    const featuredArticle = {
        title: "The Evolution of Large Language Models in 2024",
        excerpt: "How recent developments in LLMs have revolutionized natural language processing and opened new possibilities for AI applications.",
        date: "May 15, 2024",
        author: "Dr. Sarah Chen",
        imageUrl: "/images/llm-evolution.jpg",
        category: "Research"
    };

    const articles = [
        {
            title: "Building Effective RAG Systems with LangIQ",
            excerpt: "A step-by-step guide to creating retrieval-augmented generation systems that deliver accurate, contextually relevant responses.",
            date: "May 8, 2024",
            author: "Michael Rodriguez",
            category: "Tutorials"
        },
        {
            title: "Fine-Tuning vs. RAG: Choosing the Right Approach",
            excerpt: "An in-depth comparison of model fine-tuning and retrieval-augmented generation for different use cases.",
            date: "April 29, 2024",
            author: "Aisha Patel",
            category: "Analysis"
        },
        {
            title: "Multi-Agent Systems: The Future of Complex AI Tasks",
            excerpt: "How cooperative AI agents can work together to solve problems beyond the capabilities of single models.",
            date: "April 22, 2024",
            author: "James Wilson",
            category: "Research"
        },
        {
            title: "Open-Source LLMs: State of the Art in 2024",
            excerpt: "A comprehensive overview of the most powerful open-source language models and how they compare to proprietary alternatives.",
            date: "April 15, 2024",
            author: "Lin Wei",
            category: "Analysis"
        },
        {
            title: "Responsible AI: Ethical Considerations for LLM Deployment",
            excerpt: "Best practices for ensuring your AI systems respect privacy, avoid bias, and operate ethically.",
            date: "April 8, 2024",
            author: "Elena Gonzalez",
            category: "Ethics"
        }
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-8">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                    Insights, tutorials, and research on the latest developments in AI and language models.
                </p>

                {/* Featured Article */}
                <motion.div
                    className="content-box p-6 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2 bg-gray-700 h-64 rounded-lg flex items-center justify-center text-4xl">
                            📝
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-sm text-blue-400 handwriting-alt">{featuredArticle.category} • {featuredArticle.date}</span>
                            <h2 className="text-2xl font-bold mb-3 handwriting">{featuredArticle.title}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300">{featuredArticle.excerpt}</p>
                            <p className="handwriting text-gray-400 mb-4">By {featuredArticle.author}</p>
                            <button className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all">
                                Read Article
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Article List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.title}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                            <span className="text-sm text-blue-400 handwriting-alt">{article.category} • {article.date}</span>
                            <h2 className="text-xl font-semibold mb-2 handwriting">{article.title}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300 text-sm">{article.excerpt}</p>
                            <div className="flex justify-between items-center">
                                <span className="handwriting text-gray-400 text-sm">By {article.author}</span>
                                <button className="handwriting text-sm text-blue-400 hover:text-blue-300">
                                    Read More →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <button className="handwriting border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-6 py-2 transition-all">
                        View All Articles
                    </button>
                </div>
            </motion.div>
        </main>
    );
}
