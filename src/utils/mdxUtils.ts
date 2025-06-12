import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MDXMetadata {
    title: string;
    description?: string;
    date?: string;
    author?: string;
    slug: string;
    [key: string]: any;
}

export async function getMDXFiles(): Promise<MDXMetadata[]> {
    try {
        const response = await fetch('/api/mdx', {
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
