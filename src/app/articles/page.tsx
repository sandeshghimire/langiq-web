"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ArticleMetadata {
    title: string;
    author: string;
    description: string;
    keywords: string[];
    date: string;
    difficultyLevel: string;
    estimatedTime: string;
    category: string;
    slug: string;
}

// We'll create a placeholder component to show while loading
const ArticleSkeleton = () => (
    <div className="content-box p-5 animate-pulse">
        <div className="h-4 w-20 bg-gray-700 mb-2 rounded"></div>
        <div className="h-6 w-3/4 bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-2 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-4 rounded"></div>
        <div className="flex justify-between">
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
        </div>
    </div>
);

export default function ArticlesPage() {
    const [featuredArticle, setFeaturedArticle] = useState<ArticleMetadata | null>(null);
    const [articles, setArticles] = useState<ArticleMetadata[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadArticles() {
            try {
                const response = await fetch('/api/articles');
                const data = await response.json();

                if (data.articles) {
                    setArticles(data.articles.slice(0, 5)); // Get first 5 articles
                }

                if (data.featured) {
                    setFeaturedArticle(data.featured);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error loading articles:", error);
                setLoading(false);

                // Fall back to sample data if API fails
                setFeaturedArticle({
                    title: "The Evolution of Large Language Models in 2024",
                    author: "Dr. Sarah Chen",
                    description: "How recent developments in LLMs have revolutionized natural language processing and opened new possibilities for AI applications.",
                    keywords: ["LLM", "AI", "NLP"],
                    date: "May 15, 2024",
                    difficultyLevel: "Intermediate",
                    estimatedTime: "10 min",
                    category: "Research",
                    slug: "llm-evolution"
                });

                // Sample articles data remains the same
                setArticles([
                    {
                        title: "Building Effective RAG Systems with LangIQ",
                        author: "Michael Rodriguez",
                        description: "A step-by-step guide to creating retrieval-augmented generation systems that deliver accurate, contextually relevant responses.",
                        keywords: ["RAG", "LangIQ", "Tutorial"],
                        date: "May 8, 2024",
                        difficultyLevel: "Beginner",
                        estimatedTime: "15 min",
                        category: "Tutorials",
                        slug: "building-effective-rag-systems"
                    },
                    {
                        title: "Fine-Tuning vs. RAG: Choosing the Right Approach",
                        author: "Aisha Patel",
                        description: "An in-depth comparison of model fine-tuning and retrieval-augmented generation for different use cases.",
                        keywords: ["Fine-Tuning", "RAG", "Comparison"],
                        date: "April 29, 2024",
                        difficultyLevel: "Intermediate",
                        estimatedTime: "12 min",
                        category: "Analysis",
                        slug: "fine-tuning-vs-rag"
                    },
                    {
                        title: "Multi-Agent Systems: The Future of Complex AI Tasks",
                        author: "James Wilson",
                        description: "How cooperative AI agents can work together to solve problems beyond the capabilities of single models.",
                        keywords: ["Multi-Agent", "AI", "Cooperation"],
                        date: "April 22, 2024",
                        difficultyLevel: "Advanced",
                        estimatedTime: "20 min",
                        category: "Research",
                        slug: "multi-agent-systems"
                    },
                    {
                        title: "Open-Source LLMs: State of the Art in 2024",
                        author: "Lin Wei",
                        description: "A comprehensive overview of the most powerful open-source language models and how they compare to proprietary alternatives.",
                        keywords: ["Open-Source", "LLM", "Comparison"],
                        date: "April 15, 2024",
                        difficultyLevel: "Intermediate",
                        estimatedTime: "18 min",
                        category: "Analysis",
                        slug: "open-source-llms"
                    },
                    {
                        title: "Responsible AI: Ethical Considerations for LLM Deployment",
                        author: "Elena Gonzalez",
                        description: "Best practices for ensuring your AI systems respect privacy, avoid bias, and operate ethically.",
                        keywords: ["Responsible AI", "Ethics", "LLM"],
                        date: "April 8, 2024",
                        difficultyLevel: "Beginner",
                        estimatedTime: "10 min",
                        category: "Ethics",
                        slug: "responsible-ai"
                    }
                ]);
            }
        }

        loadArticles();
    }, []);

    if (loading) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                    <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                        Loading articles...
                    </p>

                    {/* Skeleton for featured article */}
                    <div className="content-box p-6 mb-10 animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/2 bg-gray-700 h-64 rounded-lg"></div>
                            <div className="w-full md:w-1/2">
                                <div className="h-4 w-24 bg-gray-700 mb-2 rounded"></div>
                                <div className="h-8 w-3/4 bg-gray-700 mb-3 rounded"></div>
                                <div className="h-4 w-full bg-gray-700 mb-2 rounded"></div>
                                <div className="h-4 w-full bg-gray-700 mb-4 rounded"></div>
                                <div className="h-4 w-32 bg-gray-700 mb-4 rounded"></div>
                                <div className="h-10 w-32 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton for article list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => <ArticleSkeleton key={i} />)}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
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
                {featuredArticle && (
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
                                <p className="handwriting-alt mb-4 text-gray-300">{featuredArticle.description}</p>
                                <p className="handwriting text-gray-400 mb-4">By {featuredArticle.author}</p>
                                <button className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all">
                                    Read Article
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Article List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.slug}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                            <span className="text-sm text-blue-400 handwriting-alt">{article.category} • {article.date}</span>
                            <h2 className="text-xl font-semibold mb-2 handwriting">{article.title}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300 text-sm">{article.description}</p>
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
