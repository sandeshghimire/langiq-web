import { MDXMetadata } from "./mdxUtils";

export async function getAdjacentCaseStudies(currentSlug: string): Promise<{
    previous: MDXMetadata | null;
    next: MDXMetadata | null;
}> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/mdx`, {
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            return { previous: null, next: null };
        }

        const mdxFiles: MDXMetadata[] = await response.json();
        const currentIndex = mdxFiles.findIndex(mdx => mdx.slug === currentSlug);

        if (currentIndex === -1) {
            return { previous: null, next: null };
        }

        return {
            previous: currentIndex > 0 ? mdxFiles[currentIndex - 1] : null,
            next: currentIndex < mdxFiles.length - 1 ? mdxFiles[currentIndex + 1] : null,
        };
    } catch (error) {
        console.error('Error fetching adjacent case studies:', error);
        return { previous: null, next: null };
    }
}
