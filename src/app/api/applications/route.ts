import { NextResponse } from 'next/server';
import { getAllTutorials, getTutorialBySlug } from '../../../../lib/applications';

/**
 * Interface for article/tutorial metadata used by the API
 * Ensures consistent data structure between API and frontend
 */
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
    duration?: string;
    difficulty?: string;
    prerequisites?: string;
    image?: string;
    lastUpdated?: string;
}

/**
 * API handler for tutorial data requests
 * Supports two modes:
 * 1. Single tutorial retrieval via slug parameter
 * 2. All tutorials retrieval when no slug is provided
 *
 * @param request The incoming HTTP request object
 * @returns JSON response containing tutorial data or error message
 */
export async function GET(request: Request) {
    // Extract search parameters from the request URL
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    // Handle single tutorial request if slug is provided
    if (slug) {
        // Attempt to retrieve the specific tutorial by slug
        const tutorial = getTutorialBySlug(slug);

        // Return 404 if tutorial not found
        if (!tutorial) {
            return NextResponse.json(
                { error: 'Tutorial not found' },
                { status: 404 }
            );
        }

        // Return the found tutorial
        return NextResponse.json({ tutorial });
    }

    // When no slug provided, return all tutorials
    const tutorials = getAllTutorials();





    // Ensure all tutorials have consistent metadata fields
    const normalizedTutorials: ArticleMetadata[] = tutorials.map(tutorial => ({
        title: tutorial.title || '',
        author: tutorial.author || '',
        description: tutorial.description || '',
        keywords: Array.isArray(tutorial.keywords) ? tutorial.keywords :
            (tutorial.keywords ? tutorial.keywords.split(',').map(k => k.trim()) : []),
        date: tutorial.date || '',
        difficultyLevel: tutorial.difficultyLevel || tutorial.difficulty || '',
        estimatedTime: tutorial.estimatedTime || tutorial.duration || '',
        category: tutorial.category || '',
        slug: tutorial.slug || '',
        difficulty: tutorial.difficulty || tutorial.difficultyLevel || '',
        duration: tutorial.duration || tutorial.estimatedTime || '',
        prerequisites: tutorial.prerequisites || '',
        image: tutorial.image || '',
        lastUpdated: tutorial.lastUpdated || ''
    }));

    return NextResponse.json({ tutorials: normalizedTutorials });
}
