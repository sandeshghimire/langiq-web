"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';

// Article metadata interface
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
    abstract?: string;
    doi?: string;
    journal?: string;
}

// Article content skeleton component
const ArticleSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-8 w-3/4 bg-gray-700 mb-4 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-700 mb-8 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-700 mb-6 rounded"></div>
        <div className="h-24 w-full bg-gray-700 mb-6 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-700 mb-3 rounded"></div>
    </div>
);

export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const { slug } = params;

    const [articleData, setArticleData] = useState<{
        metadata: ArticleMetadata;
        content: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArticle() {
            if (!slug) return;

            try {
                const response = await fetch(`/api/articles/${slug}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch article: ${response.statusText}`);
                }

                const data = await response.json();
                setArticleData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading article:", error);
                setError("Failed to load the article. Please try again later.");
                setLoading(false);
            }
        }

        fetchArticle();
    }, [slug]);

    // Loading state
    if (loading) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif">
                        ← Back to Articles
                    </Link>
                    <div className="bg-white p-8 shadow-md">
                        <ArticleSkeleton />
                    </div>
                </div>
            </main>
        );
    }

    // Error state
    if (error || !articleData) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif">
                        ← Back to Articles
                    </Link>
                    <div className="bg-white p-8 shadow-md text-center">
                        <h2 className="text-xl font-serif mb-4 text-red-700">Error</h2>
                        <p className="font-serif mb-6">{error || "Article not found"}</p>
                        <button
                            onClick={() => router.push('/articles')}
                            className="font-serif bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded text-sm transition-all">
                            Return to Articles
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const { metadata, content } = articleData;

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-6 pt-32">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif">
                    ← Back to Articles
                </Link>

                <article className="bg-white p-12 shadow-md font-serif leading-relaxed">
                    {/* Journal Info */}
                    {metadata.journal && (
                        <div className="text-center text-gray-600 text-sm mb-6 border-b pb-4">
                            {metadata.journal} • {metadata.date}
                            {metadata.doi && <div className="mt-2">DOI: {metadata.doi}</div>}
                        </div>
                    )}

                    {/* Article Header */}
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl font-bold mb-6 leading-tight">{metadata.title}</h1>

                        <div className="mb-6">
                            <div className="font-medium">
                                {metadata.author}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                                {metadata.category}
                            </div>
                        </div>
                    </header>

                    {/* Abstract */}
                    {(metadata.abstract || metadata.description) && (
                        <section className="mb-8">
                            <h2 className="text-lg font-bold mb-2">Abstract</h2>
                            <p className="text-sm italic leading-relaxed">
                                {metadata.abstract || metadata.description}
                            </p>
                        </section>
                    )}

                    {/* Article Content */}
                    <div className="prose prose-sm max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>

                    {/* Keywords/Tags */}
                    {metadata.keywords && metadata.keywords.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <div className="flex flex-wrap gap-2">
                                <span className="font-bold mr-2">Keywords:</span>
                                {metadata.keywords.map((keyword, index) => (
                                    <span key={index} className="text-sm">
                                        {keyword}{index < metadata.keywords.length - 1 ? "," : ""}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Citations and References */}
                    <div className="mt-8 pt-6 border-t border-gray-300">
                        <h2 className="text-lg font-bold mb-4">References</h2>
                        <div className="text-sm text-gray-700">
                            {/* This would contain actual references in a real paper */}
                            <p className="italic text-gray-500 text-xs">References will be displayed here when available</p>
                        </div>
                    </div>
                </article>
            </motion.div>
        </main>
    );
}
