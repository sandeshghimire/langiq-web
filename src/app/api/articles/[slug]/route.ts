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

                // Process and format metadata fields
                const rawMetadata = data;
                
                // Format date if it exists
                let formattedDate = null;
                if (rawMetadata.date) {
                    try {
                        const dateObj = new Date(rawMetadata.date);
                        formattedDate = dateObj.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                    } catch (e) {
                        // If date parsing fails, use the original string
                        formattedDate = rawMetadata.date;
                    }
                }

                // Ensure keywords is an array
                const keywords = Array.isArray(rawMetadata.keywords) 
                    ? rawMetadata.keywords 
                    : (rawMetadata.keywords ? rawMetadata.keywords.split(',').map((k: string) => k.trim()) : []);

                // Create structured article metadata
                articleMetadata = {
                    title: rawMetadata.title || 'Untitled Article',
                    author: rawMetadata.author || 'Unknown Author',
                    description: rawMetadata.description || '',
                    abstract: rawMetadata.abstract || rawMetadata.description || '',
                    keywords: keywords,
                    rawDate: rawMetadata.date || '',
                    date: formattedDate || 'Unpublished',
                    difficultyLevel: rawMetadata.difficultyLevel || 'Not specified',
                    estimatedTime: rawMetadata.estimatedTime || 'Not specified',
                    category: category || 'Uncategorized',
                    journal: rawMetadata.journal || null,
                    doi: rawMetadata.doi || null,
                    slug: slug,
                };

                articleContent = content;
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
