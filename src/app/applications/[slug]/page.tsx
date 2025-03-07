"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Tutorial } from '../../../../lib/applications';
import { useTheme } from 'next-themes';

export default function TutorialPage() {
    const params = useParams();
    const router = useRouter();
    const [tutorial, setTutorial] = useState<Tutorial | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTocItem, setActiveTocItem] = useState('');
    const [fontSize, setFontSize] = useState<string>('text-base');
    const contentRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    // Add font size control
    const increaseFontSize = () => {
        if (fontSize === 'text-base') setFontSize('text-lg');
        else if (fontSize === 'text-lg') setFontSize('text-xl');
    };

    const decreaseFontSize = () => {
        if (fontSize === 'text-xl') setFontSize('text-lg');
        else if (fontSize === 'text-lg') setFontSize('text-base');
    };

    useEffect(() => {
        async function fetchTutorial() {
            try {
                const slug = params.slug as string;
                const res = await fetch(`/api/applications?slug=${slug}`);

                if (!res.ok) {
                    throw new Error('Failed to fetch tutorial');
                }

                const data = await res.json();
                setTutorial(data.tutorial);
                setIsLoading(false);
            } catch (err) {
                setError('Error loading tutorial');
                setIsLoading(false);
            }
        }

        fetchTutorial();
    }, [params.slug]);

    // Extract headings from content for table of contents
    useEffect(() => {
        if (tutorial?.content) {
            const headingRegex = /^(#{1,6})\s+(.+)$/gm;
            const extractedHeadings: { id: string, text: string, level: number }[] = [];

            let match;
            while ((match = headingRegex.exec(tutorial.content)) !== null) {
                const level = match[1].length;
                const text = match[2];
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                extractedHeadings.push({ id, text, level });
            }

            setHeadings(extractedHeadings);
        }
    }, [tutorial?.content]);

    // Track active heading on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current && headings.length > 0) {
                const headingElements = headings.map(h =>
                    document.getElementById(h.id)
                ).filter(Boolean);

                // Add some buffer for better UX
                for (let i = headingElements.length - 1; i >= 0; i--) {
                    const element = headingElements[i];
                    if (element.getBoundingClientRect().top <= 120) {
                        setActiveTocItem(element.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    // Custom renderers for markdown elements with improved typography
    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={coldarkDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-4 shadow-lg"
                    showLineNumbers
                    wrapLongLines
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={`bg-gray-800 px-1.5 py-0.5 rounded text-sm ${className}`} {...props}>
                    {children}
                </code>
            );
        },
        h1: ({ children, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-gray-700 tracking-tight" {...props}>
                {children}
                <a href={`#${props.id}`} className="anchor ml-2 text-gray-500 hover:text-blue-500">
                    #
                </a>
            </h1>
        ),
        h2: ({ children, ...props }) => (
            <h2 className="text-2xl font-bold mt-8 mb-3 pb-1 border-b border-gray-800 tracking-tight" {...props}>
                {children}
                <a href={`#${props.id}`} className="anchor ml-2 text-gray-500 hover:text-blue-500">
                    #
                </a>
            </h2>
        ),
        h3: ({ children, ...props }) => (
            <h3 className="text-xl font-bold mt-6 mb-2 tracking-tight" {...props}>
                {children}
                <a href={`#${props.id}`} className="anchor ml-2 text-gray-500 hover:text-blue-500">
                    #
                </a>
            </h3>
        ),
        h4: ({ children, ...props }) => (
            <h4 className="text-lg font-bold mt-4 mb-2 tracking-tight" {...props}>
                {children}
                <a href={`#${props.id}`} className="anchor ml-2 text-gray-500 hover:text-blue-500">
                    #
                </a>
            </h4>
        ),
        // ...existing code for other components...
    };

    // Function to safely copy URL to clipboard
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy URL: ', err);
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            textArea.style.position = 'fixed';  // Prevent scrolling to bottom
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand('copy');
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            } catch (err) {
                console.error('Fallback: Could not copy text: ', err);
            }

            document.body.removeChild(textArea);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="handwriting text-xl">Loading tutorial...</p>
                </div>
            </div>
        );
    }

    if (error || !tutorial) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4 handwriting">Tutorial Not Found</h1>
                    <p className="handwriting-alt mb-6">{error || "We couldn't find the tutorial you're looking for."}</p>
                    <Link href="/tutorials" className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                        Back to Tutorials
                    </Link>
                </div>
            </div>
        );
    }

    const difficultyColors = {
        'Beginner': 'green',
        'Intermediate': 'yellow',
        'Advanced': 'red'
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <Link href="/applications" className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Applications
                    </Link>

                    {/* Reading options toolbar */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={decreaseFontSize}
                            className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            aria-label="Decrease font size"
                            disabled={fontSize === 'text-base'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>
                        <button
                            onClick={increaseFontSize}
                            className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            aria-label="Increase font size"
                            disabled={fontSize === 'text-xl'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Tutorial Header */}
                <div className="content-box p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-${difficultyColors[tutorial.difficulty]}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                            {tutorial.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm handwriting-alt">
                            {tutorial.duration}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold mb-3 handwriting text-center">{tutorial.title}</h1>

                    <p className="handwriting-alt text-lg mb-4 text-gray-300">
                        {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
                        <div className="flex items-center">
                            <span className="text-gray-400 handwriting-alt">
                                By {tutorial.author}
                            </span>
                        </div>

                        {tutorial.date && (
                            <span className="text-gray-500 text-sm handwriting-alt">
                                {new Date(tutorial.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        )}
                    </div>
                </div>

                {/* Tutorial Layout with Table of Contents */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Table of Contents - Sidebar */}
                    {headings.length > 0 && (
                        <div className="lg:w-1/4 order-2 lg:order-1">
                            <div className="content-box p-4 sticky top-32">
                                <h3 className="text-xl font-bold mb-4 handwriting border-b border-gray-700 pb-2">Contents</h3>
                                <nav className="toc">
                                    <ul className="space-y-2">
                                        {headings.map((heading) => (
                                            <li
                                                key={heading.id}
                                                style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
                                            >
                                                <a
                                                    href={`#${heading.id}`}
                                                    className={`block py-1 hover:text-blue-300 transition-colors duration-200 text-sm ${activeTocItem === heading.id ? 'text-blue-400 font-medium active' : 'text-gray-300'}`}
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                <div className="mt-6 pt-4 border-t border-gray-700">
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        Back to top
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tutorial Content */}
                    <div className={`${headings.length > 0 ? 'lg:w-3/4' : 'w-full'} order-1 lg:order-2`}>
                        <div className="content-box p-6 mb-8" ref={contentRef}>
                            <article className={`prose prose-invert prose-lg max-w-none ${fontSize}`}>
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                                    components={MarkdownComponents}
                                >
                                    {tutorial.content}
                                </ReactMarkdown>
                            </article>
                        </div>

                        {/* Next Steps */}
                        <div className="content-box p-6 mt-8">
                            <h2 className="text-xl font-bold mb-4 handwriting">Continue Learning</h2>
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <Link href="/tutorials" className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors">
                                    Browse More Tutorials
                                </Link>
                                <div className="flex space-x-4">
                                    <button
                                        className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center transition-colors relative"
                                        onClick={copyToClipboard}
                                        aria-label="Copy link to clipboard"
                                    >
                                        {copySuccess ? 'Copied!' : 'Copy Link'}
                                        {copySuccess ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {copySuccess && (
                                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2">
                                                Copied!
                                            </span>
                                        )}
                                    </button>
                                    <button className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
