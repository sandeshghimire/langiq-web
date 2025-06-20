import { NextResponse } from 'next/server';
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

export async function GET() {
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

            // Create slug from filename
            const slug = fileName.replace(/\.mdx?$/, '');

            return {
                ...(data as object),
                slug,
            } as MDXMetadata;
        });

        // Sort by date if available
        const sortedData = mdxData.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0;
        });

        return NextResponse.json(sortedData);
    } catch (error) {
        console.error('Error reading MDX files:', error);
        return NextResponse.json({ error: 'Failed to fetch MDX files' }, { status: 500 });
    }
}
