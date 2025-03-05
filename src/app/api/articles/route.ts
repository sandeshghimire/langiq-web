import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Interface for article metadata
interface ArticleMetadata {
    title: string;
    author: string;
    description: string;
    keywords: string[];
    date: string;
    difficultyLevel: string;
    estimatedTime: string;
    category: string;
    slug: string;
}

// Custom function to extract metadata from markdown content
function extractMetadata(content: string): Record<string, any> {
    // Look for the metadata section between triple dashes
    const metadataRegex = /---\s*([\s\S]*?)\s*---/;
    const metadataMatch = content.match(metadataRegex);

    if (!metadataMatch || !metadataMatch[1]) {
        return {};
    }

    const metadataText = metadataMatch[1];
    const metadata: Record<string, any> = {};

    // Extract each metadata field
    const lines = metadataText.split('\n');
    for (const line of lines) {
        const match = line.match(/^([^:]+):\s*(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            metadata[key] = value;
        }
    }

    return metadata;
}

export async function GET() {
    try {
        const articlesDirectory = path.join(process.cwd(), 'public/content/Articles');
        const categories = ['Advanced', 'Beginner', 'Intermediate'];

        let allArticles: ArticleMetadata[] = [];

        // Process each category directory
        for (const category of categories) {
            const categoryPath = path.join(articlesDirectory, category);

            // Check if directory exists
            if (!fs.existsSync(categoryPath)) {
                console.warn(`Directory not found: ${categoryPath}`);
                continue;
            }

            // Get all markdown files in the directory
            const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));

            // Process each file
            for (const file of files) {
                const filePath = path.join(categoryPath, file);
                const fileContents = fs.readFileSync(filePath, 'utf8');

                // Try parsing with gray-matter first
                const { data: matterData } = matter(fileContents);

                // Use custom extraction as fallback
                const customData = extractMetadata(fileContents);

                // Merge data, prioritizing matter data
                const data = { ...customData, ...matterData };

                // Create slug from filename
                const slug = file.replace(/\.md$/, '').toLowerCase();

                // Create article object with metadata - case-insensitive property access
                const article: ArticleMetadata = {
                    title: data.Title || data.title || 'Untitled',
                    author: data.Author || data.author || 'Unknown',
                    description: data.Description || data.description || '',
                    keywords: Array.isArray(data.Keywords || data.keywords) ?
                        (data.Keywords || data.keywords) :
                        (typeof (data.Keywords || data.keywords) === 'string' ?
                            (data.Keywords || data.keywords).split(',').map((k: string) => k.trim()) : []),
                    date: data.Date || data.date || new Date().toLocaleDateString(),
                    difficultyLevel: data.DifficultyLevel || data['Difficulty Level'] || data.difficultyLevel || category,
                    estimatedTime: data.EstimatedTime || data['Estimated Time'] || data.estimatedTime || '10 min',
                    category: category,
                    slug: slug
                };

                console.log('Parsed article metadata:', article);
                allArticles.push(article);
            }
        }

        // Sort articles by date (newest first)
        allArticles.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        // Select the first article as featured (could be the newest one)
        const featured = allArticles.length > 0 ? allArticles[0] : null;

        // Return the data with a 200 OK status
        return NextResponse.json({
            featured,
            articles: allArticles
        }, { status: 200 });

    } catch (error) {
        console.error('Error reading article files:', error);

        // Return a 500 error
        return NextResponse.json({
            error: 'Failed to load articles'
        }, { status: 500 });
    }
}
