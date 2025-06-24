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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');

    let mdxDir = path.join(process.cwd(), 'public/markdown');
    if (folder) {
        mdxDir = path.join(mdxDir, folder);
    }

    try {
        // Check if directory exists
        if (!fs.existsSync(mdxDir)) {
            return NextResponse.json([]);
        }

        // Get all MDX files, handling both specific folders and recursive search
        let fileNames: string[] = [];
        let filePaths: string[] = [];

        if (folder) {
            // Get files from specific folder only
            fileNames = fs.readdirSync(mdxDir).filter(file =>
                file.endsWith('.mdx') || file.endsWith('.md')
            );
            filePaths = fileNames.map(fileName => path.join(mdxDir, fileName));
        } else {
            // Recursively get all MDX files from all subdirectories
            function getAllMDXFiles(dir: string): void {
                const items = fs.readdirSync(dir);

                for (const item of items) {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);

                    if (stat.isDirectory()) {
                        getAllMDXFiles(fullPath);
                    } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
                        fileNames.push(item);
                        filePaths.push(fullPath);
                    }
                }
            }

            getAllMDXFiles(mdxDir);
        }

        // Filter out demo/component files
        const validFiles = filePaths.filter((fullPath, index) => {
            const fileName = fileNames[index];

            // Skip demo and component files that contain React code
            if (fileName.includes('demo') || fileName.includes('component')) return false;

            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { content } = matter(fileContents);

            // Skip files with imports/exports
            if (content.includes('import {') || content.includes('export ')) return false;

            return true;
        });

        // Map through each valid file to get metadata
        const mdxData = validFiles.map(fullPath => {
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Extract metadata using gray-matter
            const { data } = matter(fileContents);

            // Create slug from filename
            const fileName = path.basename(fullPath);
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
