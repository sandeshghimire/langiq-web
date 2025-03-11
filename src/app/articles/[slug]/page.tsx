"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

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

// Interface for table of contents item
interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Function to extract headings from markdown content
const extractHeadings = (content: string): TocItem[] => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create an ID from the heading text - replace spaces with dashes and remove special chars
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');

        headings.push({ id, text, level });
    }

    return headings;
};

// Table of Contents component - now enhanced for sidebar
const TableOfContents = ({ items }: { items: TocItem[] }) => {
    const [activeId, setActiveId] = useState<string>('');

    // Set up intersection observer to track which heading is currently visible
    useEffect(() => {
        if (items.length === 0) return;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        // Options for the observer
        const observerOptions = {
            rootMargin: '-100px 0px -80% 0px', // Start detecting when heading is near the top
            threshold: 0.1
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all headings
        items.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <div className="toc-sidebar bg-gray-900/30 rounded-lg p-4 sticky top-40">
            <h3 className="handwriting text-lg mb-4 text-blue-300">Contents</h3>
            <nav className="toc-nav">
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className={`text-sm handwriting-alt overflow-hidden text-ellipsis`}
                            style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}
                        >
                            <a
                                href={`#${item.id}`}
                                className={`hover:text-blue-300 transition-colors block whitespace-nowrap overflow-hidden text-ellipsis ${activeId === item.id ? 'text-blue-400 font-bold' : 'text-gray-300'}`}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

// Custom component to render markdown with anchored headings
const MarkdownWithAnchors = ({ content }: { content: string }) => {
    const headings = extractHeadings(content);

    // Replace heading lines with anchored versions
    const contentWithAnchors = content.replace(
        /^(#{1,6})\s+(.+)$/gm,
        (match, hashes, text) => {
            const id = text
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');

            return `${hashes} <a id="${id}" className="anchor" href="#${id}">${text}</a>`;
        }
    );

    return (
        <div className="prose prose-invert prose-blue max-w-none handwriting-alt">
            {typeof ReactMarkdown === 'function' ? (
                <ReactMarkdown>{contentWithAnchors}</ReactMarkdown>
            ) : (
                <div>
                    {content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<ArticleMetadata | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [tocItems, setTocItems] = useState<TocItem[]>([]);

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

                    // Extract table of contents items from the content
                    const headings = extractHeadings(data.content);
                    setTocItems(headings);
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
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-700 w-3/4 mb-6 rounded"></div>
                            <div className="h-4 bg-gray-700 w-1/4 mb-8 rounded"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-700 rounded"></div>
                                <div className="h-4 bg-gray-700 rounded"></div>
                                <div className="h-4 bg-gray-700 w-5/6 rounded"></div>
                            </div>
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
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <motion.div
                        className="content-box p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 handwriting text-red-400">Article Not Found</h2>
                        <p className="handwriting-alt mb-6">
                            We couldn't find the article you're looking for.
                        </p>
                        <Link
                            href="/articles"
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md transition-all"
                        >
                            Back to Articles
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Successful article display - updated with sidebar layout
    return (
        <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <div className="max-w-6xl mx-auto">
                <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                    ← Back to Articles
                </Link>

                {metadata && (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Main content area */}
                        <motion.div
                            className="content-box p-8 lg:w-3/4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-blue-400 handwriting-alt">{metadata.category}</span>
                                    <span className="text-sm text-gray-400 handwriting-alt">{metadata.date}</span>
                                </div>
                                <h1 className="text-3xl font-bold mb-3 handwriting">{metadata.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="handwriting text-gray-300">By {metadata.author}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-400 handwriting-alt">{metadata.difficultyLevel} Level</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-400 handwriting-alt">{metadata.estimatedTime} read</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-6">
                                {metadata.description && (
                                    <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                                        <p className="handwriting-alt text-gray-200 italic">{metadata.description}</p>
                                    </div>
                                )}

                                {/* Only show TOC in mobile view - it will be in the sidebar for desktop */}
                                <div className="lg:hidden">
                                    {tocItems.length > 2 && <TableOfContents items={tocItems} />}
                                </div>

                                {content && <MarkdownWithAnchors content={content} />}
                            </div>

                            {metadata.keywords && metadata.keywords.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-gray-700">
                                    <h3 className="handwriting mb-2">Topics</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {metadata.keywords.map((keyword, i) => (
                                            <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs handwriting-alt">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Sidebar with TOC - only visible on desktop */}
                        <div className="lg:w-1/4 hidden lg:block">
                            {tocItems.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <TableOfContents items={tocItems} />
                                </motion.div>
                            )}
                        </div>
                    </div>
                )}

                <div className="text-center mt-8">
                    <Link
                        href="/articles"
                        className="handwriting inline-block border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-6 py-2 transition-all"
                    >
                        Browse More Articles
                    </Link>
                </div>
            </div>

            {/* Add some CSS for styling anchor links and smooth scroll */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                
                .anchor {
                    position: relative;
                    text-decoration: none;
                    color: inherit;
                }
                
                .anchor:hover::after {
                    content: "#";
                    position: absolute;
                    left: -1.25em;
                    color: #60a5fa;
                    font-weight: normal;
                }
                
                h1 .anchor, h2 .anchor, h3 .anchor, h4 .anchor, h5 .anchor, h6 .anchor {
                    scroll-margin-top: 6rem;
                    display: inline-block;
                }
                
                .toc-nav li {
                    line-height: 1.4;
                    margin-bottom: 0.25rem;
                }
                
                .toc-sidebar {
                    max-height: calc(100vh - 12rem);
                    overflow-y: auto;
                }
                
                @media (max-width: 1023px) {
                    .toc-sidebar {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
}
