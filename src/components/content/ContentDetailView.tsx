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
import { coldarkDark, coldarkCold } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Tutorial } from '../../lib/applications';
import { useTheme } from 'next-themes';
import Head from 'next/head';

// Add utility function for reading time estimate
const estimateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
};

interface ContentDetailViewProps {
    backLinkUrl: string;
    backLinkText: string;
    apiEndpoint: string;
    contentType: string;
}

export default function ContentDetailView({
    backLinkUrl,
    backLinkText,
    apiEndpoint,
    contentType = "Content"
}: ContentDetailViewProps) {
    const params = useParams();
    const router = useRouter();
    const { theme } = useTheme();
    const [tutorial, setTutorial] = useState<Tutorial | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTocItem, setActiveTocItem] = useState('');
    const [fontSize, setFontSize] = useState<string>('text-base');
    const contentRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);
    const [copySuccess, setCopySuccess] = useState<boolean>(false);
    const [readingTime, setReadingTime] = useState<number>(0);
    const [readingProgress, setReadingProgress] = useState<number>(0);
    const [showShareOptions, setShowShareOptions] = useState<boolean>(false);

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
                const res = await fetch(`${apiEndpoint}?slug=${slug}`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch ${contentType.toLowerCase()}`);
                }

                const data = await res.json();
                setTutorial(data.tutorial);

                // Calculate reading time
                if (data.tutorial?.content) {
                    setReadingTime(estimateReadingTime(data.tutorial.content));
                }

                setIsLoading(false);
            } catch (err) {
                setError(`Error loading ${contentType.toLowerCase()}`);
                setIsLoading(false);
            }
        }

        fetchTutorial();
    }, [params.slug, apiEndpoint, contentType]);

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

    // Calculate reading progress
    useEffect(() => {
        const handleScrollProgress = () => {
            if (!contentRef.current) return;

            const totalHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
            const windowScrollTop = window.scrollY - contentRef.current.offsetTop;
            if (windowScrollTop >= 0) {
                const scrolled = Math.min(100, Math.max(0, (windowScrollTop / totalHeight) * 100));
                setReadingProgress(scrolled);
            }
        };

        window.addEventListener('scroll', handleScrollProgress);
        return () => window.removeEventListener('scroll', handleScrollProgress);
    }, [tutorial]);

    // Custom renderers for markdown elements with improved typography
    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const syntaxTheme = theme === 'dark' ? coldarkDark : coldarkCold;

            return !inline && match ? (
                <div className="relative group">
                    <SyntaxHighlighter
                        style={syntaxTheme}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md my-4 shadow-lg"
                        showLineNumbers
                        wrapLongLines
                        {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(String(children));
                            alert('Code copied to clipboard!');
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy code"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>
            ) : (
                <code className={`bg-gray-800 dark:bg-gray-900 px-1.5 py-0.5 rounded text-sm ${className}`} {...props}>
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
        p: ({ children, ...props }) => (
            <p className="my-4 leading-relaxed" {...props}>{children}</p>
        ),
        a: ({ href, children, ...props }) => (
            <a
                href={href}
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
            >
                {children}
                {href?.startsWith('http') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                )}
            </a>
        ),
        ul: ({ children, ...props }) => (
            <ul className="list-disc list-outside pl-6 my-4 space-y-2" {...props}>{children}</ul>
        ),
        ol: ({ children, ...props }) => (
            <ol className="list-decimal list-outside pl-6 my-4 space-y-2" {...props}>{children}</ol>
        ),
        li: ({ children, ...props }) => (
            <li className="pl-1 leading-relaxed" {...props}>{children}</li>
        ),
        blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 dark:border-blue-600 pl-4 py-1 my-4 text-gray-300 dark:text-gray-400 bg-gray-800/40 dark:bg-gray-900/40 rounded-r" {...props}>
                {children}
            </blockquote>
        ),
        table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-gray-700 border border-gray-700 rounded" {...props}>
                    {children}
                </table>
            </div>
        ),
        thead: ({ children, ...props }) => (
            <thead className="bg-gray-800 dark:bg-gray-900" {...props}>{children}</thead>
        ),
        th: ({ children, ...props }) => (
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" {...props}>{children}</th>
        ),
        tbody: ({ children, ...props }) => (
            <tbody className="bg-gray-900 dark:bg-black divide-y divide-gray-700" {...props}>{children}</tbody>
        ),
        tr: ({ children, ...props }) => (
            <tr className="hover:bg-gray-800 dark:hover:bg-gray-900/60" {...props}>{children}</tr>
        ),
        td: ({ children, ...props }) => (
            <td className="px-4 py-3 whitespace-nowrap text-sm" {...props}>{children}</td>
        ),
        img: ({ src, alt, ...props }) => (
            <div className="my-6">
                <img
                    src={src}
                    alt={alt || ''}
                    className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
                    loading="lazy"
                    {...props}
                />
                {alt && <p className="text-center text-sm text-gray-400 mt-2 italic">{alt}</p>}
            </div>
        ),
        hr: (props) => (
            <hr className="my-8 border-gray-700 dark:border-gray-600" {...props} />
        ),
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

    // Social sharing functions
    const shareOnTwitter = () => {
        if (!tutorial) return;
        const text = `Check out this ${contentType.toLowerCase()}: ${tutorial.title}`;
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        if (!tutorial) return;
        const url = window.location.href;
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnFacebook = () => {
        if (!tutorial) return;
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-pulse">
                        <div className="content-box p-6 mb-8">
                            <div className="flex justify-between mb-4">
                                <div className="h-4 bg-gray-700 rounded w-24"></div>
                                <div className="h-4 bg-gray-700 rounded w-16"></div>
                            </div>
                            <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-full mb-3"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-3"></div>
                            <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                            <div className="flex justify-between mt-6 pt-4 border-t border-gray-700">
                                <div className="h-4 bg-gray-700 rounded w-32"></div>
                                <div className="h-4 bg-gray-700 rounded w-24"></div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="lg:w-1/4 order-2 lg:order-1">
                                <div className="content-box p-4">
                                    <div className="h-6 bg-gray-700 rounded w-24 mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-3/4 order-1 lg:order-2">
                                <div className="content-box p-6 mb-8">
                                    <div className="space-y-4">
                                        <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                                        <div className="h-6 bg-gray-700 rounded w-1/3"></div>
                                        <div className="h-4 bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-700 rounded w-11/12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !tutorial) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4 handwriting">{contentType} Not Found</h1>
                    <p className="handwriting-alt mb-6">{error || `We couldn't find the ${contentType.toLowerCase()} you're looking for.`}</p>
                    <Link href={backLinkUrl} className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                        {`Back to ${contentType}s`}
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
        <>
            <Head>
                <title>{tutorial.title} | LangIQ</title>
                <meta name="description" content={tutorial.description} />
                <meta property="og:title" content={tutorial.title} />
                <meta property="og:description" content={tutorial.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
                {tutorial.image && <meta property="og:image" content={tutorial.image} />}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={tutorial.title} />
                <meta name="twitter:description" content={tutorial.description} />
                {tutorial.image && <meta name="twitter:image" content={tutorial.image} />}
            </Head>

            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300 print:hidden"
                style={{ width: `${readingProgress}%` }}
            />

            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32 print:pt-10 print:bg-white print:text-black">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-6 print:hidden">
                        <Link href={backLinkUrl} className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {backLinkText}
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
                            <button
                                onClick={() => window.print()}
                                className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                aria-label="Print tutorial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Header */}
                    <div className="content-box p-6 mb-8 print:border print:border-gray-300 print:shadow-none">
                        <div className="flex items-center justify-between mb-4">
                            <span className={`text-${difficultyColors[tutorial.difficulty]}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 dark:bg-gray-900 rounded-full print:bg-gray-200 print:text-gray-800`}>
                                {tutorial.difficulty}
                            </span>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-400 text-sm handwriting-alt">
                                    {tutorial.duration}
                                </span>
                                {readingTime > 0 && (
                                    <span className="text-gray-400 text-sm handwriting-alt">
                                        ~{readingTime} min read
                                    </span>
                                )}
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold mb-3 handwriting text-center print:text-black">{tutorial.title}</h1>

                        {tutorial.image && (
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={tutorial.image}
                                    alt={tutorial.title}
                                    className="max-w-full h-auto rounded-lg max-h-60 object-cover"
                                />
                            </div>
                        )}

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

                    {/* Content Layout with Table of Contents */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Table of Contents - Sidebar */}
                        {headings.length > 0 && (
                            <div className="lg:w-1/4 order-2 lg:order-1 print:hidden">
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

                        {/* Content Main */}
                        <div className={`${headings.length > 0 ? 'lg:w-3/4' : 'w-full'} order-1 lg:order-2`}>
                            <div className={`content-box p-6 mb-8 ${fontSize} print:shadow-none print:border print:border-gray-300`} ref={contentRef}>
                                <article className="print:text-black">
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
                            <div className="content-box p-6 mt-8 print:hidden">
                                <h2 className="text-xl font-bold mb-4 handwriting">Continue Learning</h2>
                                <div className="flex flex-wrap justify-between items-center gap-4">
                                    <Link href={backLinkUrl} className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors">
                                        {`Browse More ${contentType}s`}
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
                                        <div className="relative">
                                            <button
                                                className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                                                onClick={() => setShowShareOptions(!showShareOptions)}
                                            >
                                                Share
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </button>
                                            {showShareOptions && (
                                                <div className="absolute right-0 bottom-8 bg-gray-800 rounded-md shadow-lg p-2 flex space-x-2 z-10">
                                                    <button
                                                        onClick={shareOnTwitter}
                                                        className="p-2 hover:bg-gray-700 rounded"
                                                        aria-label="Share on Twitter"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={shareOnLinkedIn}
                                                        className="p-2 hover:bg-gray-700 rounded"
                                                        aria-label="Share on LinkedIn"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={shareOnFacebook}
                                                        className="p-2 hover:bg-gray-700 rounded"
                                                        aria-label="Share on Facebook"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Print footer information - only visible when printing */}
                    <div className="hidden print:block mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
                        <p>Printed from LangIQ - {typeof window !== 'undefined' ? window.location.href : ''}</p>
                        <p>© {new Date().getFullYear()} LangIQ. All rights reserved.</p>
                    </div>
                </motion.div>
            </main>
        </>
    );
}