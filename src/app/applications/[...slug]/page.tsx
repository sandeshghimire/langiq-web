import { getApplicationData, getAllApplicationSlugs } from '@/lib/utils/markdown';
import { notFound, redirect } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';

export async function generateStaticParams() {
    try {
        const slugs = getAllApplicationSlugs();
        return slugs.map(fullSlug => {
            const parts = fullSlug.split('/');
            return {
                slug: parts,
            };
        });
    } catch (error) {
        console.error('Error generating static paths:', error);
        return [];
    }
}

// Error component as a regular component, not a client component
function ErrorDisplay({ message }: { message: string }) {
    return (
        <div className="content-box p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Error Loading Application</h2>
            <p className="mb-4 text-gray-300">{message}</p>
            <Link href="/applications">
                <button className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-all">
                    Return to Applications
                </button>
            </Link>
        </div>
    );
}

// Safely get application from params without directly accessing params.slug
async function getApplicationFromParams(params: any) {
    // If no params or slug, return null
    if (!params || !params.slug) {
        return null;
    }

    // Extract slug parts
    const slugParts = Array.isArray(params.slug) ? params.slug : [params.slug];

    // If no slug parts, return null
    if (slugParts.length === 0) {
        return null;
    }

    // Build the fullSlug string
    const fullSlug = slugParts.join('/');

    // For decoded URLs, check if the slug contains a manually encoded slash
    // This handles cases where the URL might be /applications/Beginner%2Fapplications-123456
    const decodedFullSlug = decodeURIComponent(fullSlug);

    // Get application data using the fullSlug format that our markdown reader expects
    return getApplicationData(decodedFullSlug);
}

export default async function ApplicationPage({ params }: { params: any }) {
    try {
        // Get the application using our safe helper function
        const application = await getApplicationFromParams(params);

        // If no application was found, show a 404
        if (!application) {
            notFound();
        }

        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/applications"
                        className="inline-flex items-center handwriting text-blue-400 hover:text-blue-300 mb-6"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Applications
                    </Link>

                    <div className="content-box p-8 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 handwriting">{application.title}</h1>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
                            <div className="flex items-center">
                                <User className="mr-1 h-4 w-4" /> {application.author}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" /> {new Date(application.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" /> {application.estimatedTime}
                            </div>
                            <div className="flex items-center">
                                <Tag className="mr-1 h-4 w-4" /> {application.difficulty}
                            </div>
                        </div>

                        <p className="handwriting-alt text-xl text-gray-200 mb-8">{application.description}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {application.keywords?.map((keyword) => (
                                <span
                                    key={keyword}
                                    className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-invert handwriting-alt max-w-none">
                            {application.content ? (
                                <MDXRemote source={application.content} />
                            ) : (
                                <p className="text-yellow-400">This application has no content.</p>
                            )}
                        </div>
                    </div>

                    <div className="text-center mt-10 mb-6">
                        <Link href="/applications">
                            <button className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
                                Explore More Applications
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error('Error in ApplicationPage:', error);
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <ErrorDisplay message={error instanceof Error ? error.message : 'An unexpected error occurred'} />
                </div>
            </main >
        );
    }
}

// A catch-all route to redirect old URLs to the new format
export function LegacyApplicationPage({
    params
}: {
    params: { slug: string[] }
}) {
    if (!params.slug || params.slug.length < 2) {
        redirect('/applications');
    }

    // Get the difficulty and slug from the array
    const difficulty = params.slug[0];
    const slug = params.slug.slice(1).join('/');

    // Redirect to the new route format
    redirect(`/applications/${difficulty}/${slug}`);
}
