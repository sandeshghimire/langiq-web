"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// Define the article metadata interface
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

// Simple Article Component
export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<ArticleMetadata | null>(null);
    const [content, setContent] = useState<string | null>(null);

    // Function to fetch article data
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setIsLoading(true);
                setError(null);

                console.log(`Fetching article with slug: ${slug}`);
                const response = await fetch(`/api/articles/${slug}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch article (${response.status}): ${response.statusText}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                console.log("Article data received:", data);

                if (data.metadata && data.content) {
                    setMetadata(data.metadata);
                    setContent(data.content);
                } else {
                    throw new Error("Invalid article data format");
                }
            } catch (err) {
                console.error("Error fetching article:", err);
                setError(err instanceof Error ? err.message : 'Failed to load article');
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-6 handwriting">Loading Article...</h1>
                    <div className="content-box p-8">
                        <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-3xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4 handwriting text-red-400">Article Not Found</h2>
                        <p className="handwriting-alt mb-6">
                            {error}
                        </p>
                        <button
                            onClick={() => router.push('/articles')}
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md transition-all"
                        >
                            Back to Articles
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Successful article display
    return (
        <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <div className="max-w-3xl mx-auto">
                <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                    ← Back to Articles
                </Link>

                {metadata && (
                    <div className="content-box p-8">
                        <div className="mb-4">
                            <span className="text-sm text-blue-400 handwriting-alt">
                                {metadata.category} • {metadata.date}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 handwriting">{metadata.title}</h1>
                        <p className="handwriting text-gray-400 mb-6">By {metadata.author}</p>

                        {content && (
                            <div className="prose prose-invert prose-blue max-w-none handwriting-alt">
                                {typeof ReactMarkdown === 'function' ? (
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                ) : (
                                    // Fallback if ReactMarkdown isn't available
                                    <div>
                                        {content.split('\n').map((paragraph, i) => (
                                            <p key={i} className="mb-4">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
