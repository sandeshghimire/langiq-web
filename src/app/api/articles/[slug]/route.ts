import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
    request: NextRequest,
    context: { params: { slug: string } | Promise<{ slug: string }> }
) {
    try {
        const params = await context.params;
        const slug = params.slug;
        const articlesDirectory = path.join(process.cwd(), 'public/content/Articles');
        const categories = ['Advanced', 'Beginner', 'Intermediate'];

        let articleContent = null;
        let articleMetadata = null;
        let found = false;

        // Search through each category for the article
        for (const category of categories) {
            if (found) break;

            const categoryPath = path.join(articlesDirectory, category);

            // Skip if directory doesn't exist
            if (!fs.existsSync(categoryPath)) {
                continue;
            }

            // Check if file exists with the slug name
            const possiblePath = path.join(categoryPath, `${slug}.md`);

            if (fs.existsSync(possiblePath)) {
                found = true;
                const fileContents = fs.readFileSync(possiblePath, 'utf8');
                const { content, data } = matter(fileContents);

                articleContent = content;
                articleMetadata = {
                    ...data,
                    category,
                    slug
                };
            }
        }

        if (!found) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            metadata: articleMetadata,
            content: articleContent
        }, { status: 200 });

    } catch (error) {
        console.error('Error reading article:', error);
        return NextResponse.json(
            { error: 'Failed to load article' },
            { status: 500 }
        );
    }
}
