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

export interface MDXContent {
    metadata: MDXMetadata;
    content: string;
}

// Utility function to create URL-safe slugs
function createSlugFromFilename(filename: string): string {
    return filename
        .replace(/\.mdx?$/, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Server-side function to get all MDX files from filesystem
export function getMDXFilesFromFS(): MDXMetadata[] {
    const mdxDir = path.join(process.cwd(), 'public/markdown');

    try {
        // Get all MDX files, but filter out demo/component files
        const fileNames = fs.readdirSync(mdxDir).filter(file => {
            if (!file.endsWith('.mdx') && !file.endsWith('.md')) return false;

            // Skip demo and component files that contain React code
            if (file.includes('demo') || file.includes('component')) return false;

            const fullPath = path.join(mdxDir, file);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { content } = matter(fileContents);

            // Skip files with imports/exports
            if (content.includes('import {') || content.includes('export ')) return false;

            return true;
        });

        // Map through each file to get metadata
        const mdxData = fileNames.map(fileName => {
            const fullPath = path.join(mdxDir, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Extract metadata using gray-matter
            const { data } = matter(fileContents);

            // Create URL-safe slug from filename
            const slug = createSlugFromFilename(fileName);

            return {
                ...(data as object),
                slug,
            } as MDXMetadata;
        });

        // Sort by date if available
        return mdxData.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0;
        });
    } catch (error) {
        console.error('Error reading MDX files:', error);
        return [];
    }
}

// Server-side function to get a specific MDX file from filesystem
export function getMDXFileFromFS(slug: string): MDXContent | null {
    const mdxDir = path.join(process.cwd(), 'public/markdown');

    try {
        // Find the MDX file with the matching slug
        const fileNames = fs.readdirSync(mdxDir).filter(file =>
            file.endsWith('.mdx') || file.endsWith('.md')
        );

        const matchingFile = fileNames.find(fileName => {
            const fileSlug = createSlugFromFilename(fileName);
            return fileSlug === slug;
        });

        if (!matchingFile) {
            return null;
        }

        const fullPath = path.join(mdxDir, matchingFile);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Extract metadata and content using gray-matter
        const { data, content } = matter(fileContents);

        // Check if this is a demo/code file that shouldn't be rendered as content
        if (content.includes('import {') || content.includes('export ') ||
            matchingFile.includes('demo') || matchingFile.includes('component')) {
            return null;
        }

        // Fix common MDX parsing issues for content files
        const cleanedContent = content
            .replace(/<(\d+)/g, '&lt;$1') // Fix <number patterns
            .replace(/(\d+)>/g, '$1&gt;') // Fix number> patterns
            .replace(/\*\*([^*]+)\*\*([A-Z])/g, '**$1** $2') // Fix bold text followed by caps
            .replace(/<([^>]*[^\s>])>/g, (match, p1) => {
                // Only escape if it doesn't look like valid HTML/JSX
                if (!/^[a-zA-Z][a-zA-Z0-9]*(\s|$|\/|>)/.test(p1) &&
                    !/^\/[a-zA-Z][a-zA-Z0-9]*$/.test(p1)) {
                    return `&lt;${p1}&gt;`;
                }
                return match;
            });

        // Create URL-safe slug from filename
        const urlSafeSlug = createSlugFromFilename(matchingFile);

        return {
            metadata: {
                ...(data as object),
                slug: urlSafeSlug,
            } as MDXMetadata,
            content: cleanedContent,
        };
    } catch (error) {
        console.error('Error reading MDX file:', error);
        return null;
    }
}
