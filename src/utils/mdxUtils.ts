export interface MDXMetadata {
    title: string;
    description?: string;
    date?: string;
    author?: string;
    slug: string;
    [key: string]: any;
}

export interface MDXContent {
    metadata: MDXMetadata;
    content: string;
}

// Client-side function for fetching MDX files via API
export async function getMDXFiles(folder?: string): Promise<MDXMetadata[]> {
    try {
        const url = folder ? `/api/mdx?folder=${encodeURIComponent(folder)}` : '/api/mdx';
        const response = await fetch(url, {
            next: { revalidate: 60 } // Revalidate every minute
        });

        if (!response.ok) {
            throw new Error('Failed to fetch MDX files');
        }

        const mdxFiles = await response.json();
        return mdxFiles;
    } catch (error) {
        console.error('Error fetching MDX files:', error);
        return [];
    }
}
