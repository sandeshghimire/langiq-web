"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArticles() {
            try {
                const response = await fetch('/api/articles');
                const data = await response.json();

                if (data.articles) {
                    setArticles(data.articles.slice(0, 100)); // Get first 5 articles
                } else {
                    setArticles([]);
                }

                if (data.featured) {
                    setFeaturedArticle(data.featured);
                } else {
                    setFeaturedArticle(null);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error loading articles:", error);
                setLoading(false);
                setError("Failed to load articles. Please try again later.");
                setArticles([]);
                setFeaturedArticle(null);
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

    // Display error state
    if (error) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                    <div className="content-box p-8 mt-10">
                        <h2 className="text-xl handwriting mb-4 text-red-400">Error</h2>
                        <p className="handwriting-alt mb-6">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all">
                            Try Again
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-7xl mx-auto"
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
                                <Link href={`/articles/${featuredArticle.slug}`} className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all inline-block">
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Article List */}
                {articles.length > 0 ? (
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
                                    <Link href={`/articles/${article.slug}`} className="handwriting text-sm text-blue-400 hover:text-blue-300">
                                        Read More →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="content-box p-8 text-center">
                        <p className="handwriting-alt mb-3">No articles found.</p>
                        <p className="text-sm text-gray-400">Check back later for new content!</p>
                    </div>
                )}

                {articles.length > 0 && (
                    <div className="mt-10 text-center">
                        <button className="handwriting border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-6 py-2 transition-all">
                            View All Articles
                        </button>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
