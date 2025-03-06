import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // gray-matter parses front-matter from markdown files

/**
 * Interface defining the structure of article metadata
 * These properties are extracted from the markdown frontmatter
 */
interface ArticleMetadata {
    title: string;       // Article title
    author: string;      // Author's name
    description: string; // Brief summary of the article
    keywords: string[];  // Tags/keywords for search and categorization
    date: string;        // Publication date
    difficultyLevel: string; // Beginner, Intermediate, Advanced
    estimatedTime: string;   // Reading time estimate
    category: string;    // Content category
    slug: string;        // URL-friendly identifier
}

/**
 * Custom function to extract metadata from markdown content
 * This provides a fallback in case gray-matter fails to parse the frontmatter
 * 
 * @param content - The full markdown content as a string
 * @returns Record<string, any> - Object containing extracted metadata key-value pairs
 */
function extractMetadata(content: string): Record<string, any> {
    // Look for the metadata section between triple dashes (YAML frontmatter format)
    const metadataRegex = /---\s*([\s\S]*?)\s*---/;
    const metadataMatch = content.match(metadataRegex);

    // If no metadata section found, return empty object
    if (!metadataMatch || !metadataMatch[1]) {
        return {};
    }

    const metadataText = metadataMatch[1];
    const metadata: Record<string, any> = {};

    // Extract each metadata field by parsing individual lines
    const lines = metadataText.split('\n');
    for (const line of lines) {
        // Match key-value pairs in format "key: value"
        const match = line.match(/^([^:]+):\s*(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            metadata[key] = value;
        }
    }

    return metadata;
}

/**
 * GET handler for the /api/articles endpoint
 * Retrieves all article metadata from markdown files in the content directory
 * Files are organized in category folders (Advanced, Beginner, Intermediate)
 * 
 * @returns NextResponse with article data or error message
 */
export async function GET() {
    try {
        // Define the base directory for article content
        const articlesDirectory = path.join(process.cwd(), 'public/content/Articles');
        // Categories correspond to difficulty levels and directory structure
        const categories = ['Advanced', 'Beginner', 'Intermediate'];

        let allArticles: ArticleMetadata[] = [];

        // Process each category directory to find all articles
        for (const category of categories) {
            const categoryPath = path.join(articlesDirectory, category);

            // Skip directory if it doesn't exist
            if (!fs.existsSync(categoryPath)) {
                console.warn(`Directory not found: ${categoryPath}`);
                continue;
            }

            // Get all markdown files in the directory
            const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));

            // Process each markdown file to extract metadata
            for (const file of files) {
                const filePath = path.join(categoryPath, file);
                const fileContents = fs.readFileSync(filePath, 'utf8');



                // Try parsing with gray-matter first (more robust YAML parser)
                const { data: matterData } = matter(fileContents);

                // Use custom extraction as fallback for any edge cases
                const customData = extractMetadata(fileContents);

                // Merge data, prioritizing matter data over custom extraction
                const data = { ...customData, ...matterData };

                // Create slug from filename (for URL routing)
                const slug = file.replace(/\.md$/, '').toLowerCase();

                // Create article object with metadata - using case-insensitive property access
                // to handle inconsistencies in frontmatter property casing
                const article: ArticleMetadata = {
                    title: data.Title || data.title || 'Untitled',
                    author: data.Author || data.author || 'Unknown',
                    description: data.Description || data.description || '',
                    keywords: Array.isArray(data.Keywords || data.keywords) ?
                        // Use keywords as-is if already an array
                        (data.Keywords || data.keywords) :
                        // Otherwise, split comma-separated string into array if string exists
                        (typeof (data.Keywords || data.keywords) === 'string' ?
                            (data.Keywords || data.keywords).split(',').map((k: string) => k.trim()) : []),
                    date: data.Date || data.date || new Date().toLocaleDateString(),
                    difficultyLevel: data.DifficultyLevel || data['Difficulty Level'] || data.difficultyLevel || category,
                    estimatedTime: data.EstimatedTime || data['Estimated Time'] || data.estimatedTime || '10 min',
                    category: category, // Category is derived from the directory structure
                    slug: slug
                };

                // Add the article to our collection
                allArticles.push(article);
            }
        }

        // Sort articles by date (newest first)
        // This enables showing the most recent content at the top of lists
        allArticles.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        // Select the first (newest) article as featured
        // This can be used for highlighting on the homepage or landing page
        const featured = allArticles.length > 0 ? allArticles[0] : null;

        // Return the data with a 200 OK status
        // The response includes both the featured article and the full article list
        return NextResponse.json({
            featured,
            articles: allArticles
        }, { status: 200 });

    } catch (error) {
        // Log the full error for server-side debugging
        console.error('Error reading article files:', error);

        // Return a 500 error with a user-friendly message
        // Client will receive this message rather than the full error details
        return NextResponse.json({
            error: 'Failed to load articles'
        }, { status: 500 });
    }
}
