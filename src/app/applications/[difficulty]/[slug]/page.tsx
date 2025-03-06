import { notFound } from 'next/navigation';
import { getApplicationByFullSlug } from '@/lib/applications';
import { Application } from '@/lib/types';
import { Metadata } from 'next';

// Define the params type for TypeScript
interface ApplicationPageParams {
    params: {
        difficulty: string;
        slug: string;
    };
}

// Generate metadata for the page
export async function generateMetadata({
    params
}: ApplicationPageParams): Promise<Metadata> {
    try {
        // Await the params properties when accessing them
        const difficulty = await params.difficulty;
        const slug = await params.slug;
        const fullSlug = `${difficulty}/${slug}`;

        const application = await getApplicationByFullSlug(fullSlug);

        return {
            title: `${application.title} | LangIQ Applications`,
            description: application.description,
        };
    } catch (error) {
        return {
            title: 'Application | LangIQ',
            description: 'LangIQ Application Details',
        };
    }
}

// Make the page component async to handle params properly
export default async function ApplicationPage({
    params
}: ApplicationPageParams) {
    try {
        // Await the params properties when accessing them
        const difficulty = await params.difficulty;
        const slug = await params.slug;
        const fullSlug = `${difficulty}/${slug}`;

        // Get application data
        const application = await getApplicationByFullSlug(fullSlug);

        if (!application) {
            notFound();
        }

        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-6xl mx-auto">
                    <div className="content-box p-8">
                        <h1 className="text-4xl font-bold mb-4 handwriting">{application.title}</h1>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                                {application.difficulty}
                            </span>
                            <span className="text-gray-400">By {application.author}</span>
                            <span className="text-gray-400">{application.estimatedTime}</span>
                        </div>

                        <p className="handwriting-alt mb-8 text-lg">
                            {application.description}
                        </p>

                        {/* Application content would go here */}
                        <div className="prose prose-invert max-w-none">
                            {/* Render application content */}
                            <p>This application demonstrates how to use LangIQ for {application.title.toLowerCase()} tasks.</p>

                            {/* Show keywords if available */}
                            {application.keywords && application.keywords.length > 0 && (
                                <div className="mt-8">
                                    <h3>Related Topics</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {application.keywords.map(keyword => (
                                            <span
                                                key={keyword}
                                                className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full text-sm"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error('Error in ApplicationPage:', error);
        notFound();
    }
}
