import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/ui/breadcrumb-custom";
import type { Metadata } from "next";
import { getAdjacentCaseStudies } from "@/utils/navigationUtils";
import { getMDXFileFromFS } from "@/utils/mdxUtils.server";
import WavyBackground from "../../components/WavyBackground";

function getCaseStudy(slug: string) {
    try {
        // Try the slug as-is first
        let result = getMDXFileFromFS(slug);

        // If not found and the slug contains encoded characters, try decoding it
        if (!result && slug.includes('%')) {
            const decodedSlug = decodeURIComponent(slug);
            // Create a URL-safe version of the decoded slug
            const urlSafeSlug = decodedSlug
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
                .replace(/\s+/g, '-') // Replace spaces with hyphens
                .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
                .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

            result = getMDXFileFromFS(urlSafeSlug);
        }

        return result;
    } catch (error) {
        console.error('Error fetching case study:', error);
        return null;
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = getCaseStudy(slug);

    if (!caseStudy) {
        return {
            title: "Case Study Not Found | LangIQ",
            description: "The requested case study could not be found.",
        };
    }

    return {
        title: `${caseStudy.metadata.title} | LangIQ Case Studies`,
        description: caseStudy.metadata.description || "Explore this case study from LangIQ",
        keywords: caseStudy.metadata.tags?.join(", ") || "AI, case study, automation",
        authors: caseStudy.metadata.author ? [{ name: caseStudy.metadata.author }] : undefined,
        openGraph: {
            title: caseStudy.metadata.title,
            description: caseStudy.metadata.description || "Explore this case study from LangIQ",
            type: "article",
            publishedTime: caseStudy.metadata.date,
            authors: caseStudy.metadata.author ? [caseStudy.metadata.author] : undefined,
            images: caseStudy.metadata.image ? [caseStudy.metadata.image] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: caseStudy.metadata.title,
            description: caseStudy.metadata.description || "Explore this case study from LangIQ",
            images: caseStudy.metadata.image ? [caseStudy.metadata.image] : undefined,
        },
    };
}

// Custom MDX components for light theme
const mdxComponents = {
    h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }: any) => (
        <h2 className="text-3xl font-semibold mb-4 mt-8 text-gray-900">{children}</h2>
    ),
    h3: ({ children }: any) => (
        <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">{children}</h3>
    ),
    h4: ({ children }: any) => (
        <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-900">{children}</h4>
    ),
    p: ({ children }: any) => (
        <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }: any) => (
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>
    ),
    ol: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>
    ),
    li: ({ children }: any) => (
        <li className="text-gray-700">{children}</li>
    ),
    blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-600 pl-4 my-6 text-gray-600 italic bg-blue-50 py-2">
            {children}
        </blockquote>
    ),
    code: ({ children }: any) => (
        <code className="bg-gray-100 text-blue-600 px-2 py-1 rounded text-sm font-mono border">
            {children}
        </code>
    ),
    pre: ({ children }: any) => (
        <pre className="bg-gray-50 text-gray-800 p-4 rounded-lg mb-6 overflow-x-auto border">
            {children}
        </pre>
    ),
    strong: ({ children }: any) => (
        <strong className="text-gray-900 font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => (
        <em className="text-blue-600 italic">{children}</em>
    ),
    a: ({ href, children }: any) => (
        <a
            href={href}
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {children}
        </a>
    ),
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = getCaseStudy(slug);
    const { previous, next } = await getAdjacentCaseStudies(slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <div className="min-h-screen text-gray-900 p-24 relative">
            <WavyBackground />
            {/* Header */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <Breadcrumb
                        items={[
                            { label: "Case Studies", href: "/case-studies" },
                            { label: caseStudy.metadata.title }
                        ]}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
                <article className="prose prose-lg max-w-none">
                    {(() => {
                        try {
                            return <MDXRemote source={caseStudy.content} components={mdxComponents} />;
                        } catch (error) {
                            console.error('MDX compilation error:', error);
                            return (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-red-600 font-semibold mb-2">Content Loading Error</h3>
                                    <p className="text-gray-700 mb-4">
                                        There was an issue loading this content. The raw content is displayed below:
                                    </p>
                                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto whitespace-pre-wrap text-gray-800">
                                        {caseStudy.content}
                                    </pre>
                                </div>
                            );
                        }
                    })()}
                </article>
            </div>
        </div>
    );
}

// Generate static params for better performance
export async function generateStaticParams() {
    try {
        const { getMDXFilesFromFS } = await import("@/utils/mdxUtils.server");
        const mdxFiles = getMDXFilesFromFS();

        return mdxFiles.map((mdx: any) => ({
            slug: mdx.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}
