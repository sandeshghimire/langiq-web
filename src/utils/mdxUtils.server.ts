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
    const allMdxData: MDXMetadata[] = [];

    try {
        // Function to recursively get MDX files from a directory
        function getMDXFilesFromDirectory(dir: string): void {
            const items = fs.readdirSync(dir);

            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    // Recursively search subdirectories
                    getMDXFilesFromDirectory(fullPath);
                } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
                    // Skip demo and component files that contain React code
                    if (item.includes('demo') || item.includes('component')) continue;

                    try {
                        const fileContents = fs.readFileSync(fullPath, 'utf8');
                        const { data, content } = matter(fileContents);

                        // Skip files with imports/exports
                        if (content.includes('import {') || content.includes('export ')) continue;

                        // Create URL-safe slug from filename
                        const slug = createSlugFromFilename(item);

                        allMdxData.push({
                            ...(data as object),
                            slug,
                        } as MDXMetadata);
                    } catch (error) {
                        console.error(`Error reading file ${fullPath}:`, error);
                    }
                }
            }
        }

        getMDXFilesFromDirectory(mdxDir);

        // Sort by date if available
        return allMdxData.sort((a, b) => {
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
        // Function to recursively search for the file with matching slug
        function findMDXFileBySlug(dir: string): string | null {
            const items = fs.readdirSync(dir);

            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    // Recursively search subdirectories
                    const result = findMDXFileBySlug(fullPath);
                    if (result) return result;
                } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
                    const fileSlug = createSlugFromFilename(item);
                    if (fileSlug === slug) {
                        return fullPath;
                    }
                }
            }
            return null;
        }

        const matchingFilePath = findMDXFileBySlug(mdxDir);

        if (!matchingFilePath) {
            return null;
        }

        const fileContents = fs.readFileSync(matchingFilePath, 'utf8');

        // Extract metadata and content using gray-matter
        const { data, content } = matter(fileContents);

        // Get just the filename for checks
        const fileName = path.basename(matchingFilePath);

        // Check if this is a demo/code file that shouldn't be rendered as content
        if (content.includes('import {') || content.includes('export ') ||
            fileName.includes('demo') || fileName.includes('component')) {
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
        const urlSafeSlug = createSlugFromFilename(fileName);

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
