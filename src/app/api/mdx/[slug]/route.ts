import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const mdxDir = path.join(process.cwd(), 'public/markdown');

    try {
        // Find the MDX file with the matching slug
        const fileNames = fs.readdirSync(mdxDir).filter(file =>
            file.endsWith('.mdx') || file.endsWith('.md')
        );

        const matchingFile = fileNames.find(fileName => {
            const fileSlug = fileName.replace(/\.mdx?$/, '');
            return fileSlug === slug;
        });

        if (!matchingFile) {
            return NextResponse.json(
                { error: 'Case study not found' },
                { status: 404 }
            );
        }

        const fullPath = path.join(mdxDir, matchingFile);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Extract metadata and content using gray-matter
        const { data, content } = matter(fileContents);

        // Check if this is a demo/code file that shouldn't be rendered as content
        if (content.includes('import {') || content.includes('export ') ||
            matchingFile.includes('demo') || matchingFile.includes('component')) {
            return NextResponse.json(
                { error: 'This file contains interactive components and cannot be displayed as a case study' },
                { status: 400 }
            );
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

        return NextResponse.json({
            metadata: {
                ...(data as object),
                slug,
            },
            content: cleanedContent,
        });
    } catch (error) {
        console.error('Error reading MDX file:', error);
        return NextResponse.json(
            { error: 'Failed to fetch case study' },
            { status: 500 }
        );
    }
}
