import { MDXMetadata, getMDXFilesFromFS } from "./mdxUtils.server";

export async function getAdjacentCaseStudies(currentSlug: string): Promise<{
    previous: MDXMetadata | null;
    next: MDXMetadata | null;
}> {
    try {
        const mdxFiles: MDXMetadata[] = getMDXFilesFromFS();
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
