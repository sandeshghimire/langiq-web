import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Library for parsing markdown frontmatter
import { processArticleMetadata } from '@/utils/metadataHelper';

/**
 * GET handler for retrieving a specific article by its slug
 * This endpoint serves individual article content and metadata
 * 
 * @param request - The incoming request object
 * @param context - Contains route parameters, including the article slug
 * @returns NextResponse with article data or appropriate error
 */
export async function GET(
    request: NextRequest,
    context: { params: { slug: string } | Promise<{ slug: string }> }
) {
    try {
        // Extract the slug parameter from the URL
        const params = await context.params;
        const slug = params.slug;

        // Define the directory structure for article content
        const articlesDirectory = path.join(process.cwd(), 'public/content/Articles');
        // Articles are organized into difficulty level categories
        const categories = ['Advanced', 'Beginner', 'Intermediate'];

        let articleContent = null;
        let articleMetadata = null;
        let found = false;

        // Search through each category directory for the article with matching slug
        for (const category of categories) {
            // Exit early if we've already found the article
            if (found) break;

            const categoryPath = path.join(articlesDirectory, category);

            // Skip categories that don't exist as directories
            if (!fs.existsSync(categoryPath)) {
                continue;
            }

            // Construct the full path to the potential article file
            const possiblePath = path.join(categoryPath, `${slug}.md`);

            // Check if the article exists in this category
            if (fs.existsSync(possiblePath)) {
                found = true;
                // Read and parse the markdown file
                const fileContents = fs.readFileSync(possiblePath, 'utf8');
                // Extract frontmatter data and main content
                const { content, data } = matter(fileContents);

                // Process the metadata using our helper function
                articleMetadata = processArticleMetadata(data, slug, category);

                // Store the main article content
                articleContent = content;
            }
        }

        // If no article was found in any category, return 404
        if (!found) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        // Return both metadata and content if article was found
        return NextResponse.json({
            metadata: articleMetadata,
            content: articleContent
        }, { status: 200 });

    } catch (error) {
        // Log the error for debugging
        console.error('Error reading article:', error);

        // Return a user-friendly error response
        return NextResponse.json(
            { error: 'Failed to load article' },
            { status: 500 }
        );
    }
}
