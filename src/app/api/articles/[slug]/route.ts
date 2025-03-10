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

        console.log(`API: Looking for article with slug: ${slug}`);

        // The base content directory - change this if your structure is different
        const baseContentDir = path.join(process.cwd(), 'public/content');

        // Let's search in both Articles and any other relevant directories
        const searchDirectories = [
            path.join(baseContentDir, 'Articles/Advanced'),
            path.join(baseContentDir, 'Articles/Intermediate'),
            path.join(baseContentDir, 'Articles/Beginner'),
            // Add any other potential directories
        ];

        let articleContent = null;
        let articleMetadata = null;
        let found = false;
        let category = '';
        let filePath = '';

        // Log all search directories for debugging
        console.log('Searching in these directories:');
        searchDirectories.forEach(dir => {
            if (fs.existsSync(dir)) {
                console.log(`- ${dir} (exists)`);
            } else {
                console.log(`- ${dir} (does not exist)`);
            }
        });

        // Search through all directories
        for (const directoryPath of searchDirectories) {
            if (found) break;

            // Skip if directory doesn't exist
            if (!fs.existsSync(directoryPath)) continue;

            // Get the category from the directory path
            const pathParts = directoryPath.split(path.sep);
            const difficultyLevel = pathParts[pathParts.length - 1];
            category = pathParts[pathParts.length - 2];

            console.log(`Checking directory: ${directoryPath}`);

            // Get all markdown files in this directory
            try {
                const files = fs.readdirSync(directoryPath);
                console.log(`Found ${files.length} files in ${directoryPath}`);

                // Log all files for debugging
                console.log(`Files in ${directoryPath}:`, files);

                // Try different matching strategies

                // 1. Exact filename match
                const exactMatch = files.find(file => file === `${slug}.md`);

                // 2. Filename includes the slug
                const includesSlug = files.find(file => file.includes(slug));

                // 3. Any markdown file with the slug pattern (date format)
                const datePattern = /\d{8}-\d{6}/; // Matches date patterns like 20250305-092337
                const matchingDateFile = files.find(file => {
                    // If the slug has a date pattern, match files with that pattern
                    if (datePattern.test(slug)) {
                        return file.includes(slug.match(datePattern)?.[0] || '');
                    }
                    return false;
                });

                const matchingFile = exactMatch || includesSlug || matchingDateFile;

                if (matchingFile) {
                    found = true;
                    filePath = path.join(directoryPath, matchingFile);
                    console.log(`Found matching file: ${filePath}`);

                    // Read and parse the markdown file
                    const fileContents = fs.readFileSync(filePath, 'utf8');
                    // Extract frontmatter data and main content
                    const { content, data } = matter(fileContents);

                    // Process the metadata using our helper function
                    // If the helper isn't available, create basic metadata
                    if (typeof processArticleMetadata === 'function') {
                        articleMetadata = processArticleMetadata(data, slug, category);
                    } else {
                        // Fallback if helper isn't available
                        articleMetadata = {
                            ...data,
                            slug: slug,
                            category: category,
                            difficultyLevel: difficultyLevel
                        };
                    }

                    // Store the main article content
                    articleContent = content;
                    break;
                }
            } catch (error) {
                console.error(`Error reading directory ${directoryPath}:`, error);
            }
        }

        // If no article was found in any category, return 404
        if (!found || !articleContent) {
            console.log(`Article not found for slug: ${slug}`);
            console.log(`Searched in directories:`, searchDirectories);
            return NextResponse.json(
                { error: 'Article not found', slug, searchedDirectories: searchDirectories },
                { status: 404 }
            );
        }

        // Return both metadata and content if article was found
        console.log(`Successfully found article at: ${filePath}`);
        return NextResponse.json({
            metadata: articleMetadata,
            content: articleContent
        }, { status: 200 });

    } catch (error) {
        // Log the error for debugging
        console.error('Error reading article:', error);

        // Return a user-friendly error response
        return NextResponse.json(
            { error: 'Failed to load article', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}