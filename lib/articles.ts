import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { readSanitizedMarkdownFile } from './markdown-utils';

/**
 * Comprehensive interface for article/tutorial metadata
 * Contains all possible fields that might be used across different content types
 */
export interface ArticleMetadata {
    title: string;           // Article headline or tutorial title
    author: string;          // Name of the content creator
    description: string;     // Brief summary of the content
    keywords: string[];      // Tags for SEO and categorization
    date: string;            // Publication date (formatted as string)
    difficultyLevel: string; // Indicates complexity (e.g., "Beginner", "Advanced")
    estimatedTime: string;   // Reading/completion time estimate
    category: string;        // Content category/section
    slug: string;            // URL-friendly identifier for routing
    content: string;         // The full markdown content
    duration?: string;       // Alternative time notation (e.g., "45 minutes")
    difficulty?: string;     // Alternative complexity notation
    prerequisites?: string;  // Required knowledge or setup before starting
    image?: string;          // Featured image URL
    lastUpdated?: string;    // Last modification date
}

// For backwards compatibility
export type Tutorial = ArticleMetadata;

const tutorialsDirectory = path.join(process.cwd(), 'public/content/Articles');

/**
 * Retrieves all tutorials from the filesystem
 * Parses markdown files with YAML frontmatter
 * @returns Array of tutorials with metadata and content
 */
export function getAllTutorials(): ArticleMetadata[] {
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    let tutorials: ArticleMetadata[] = [];

    difficulties.forEach(difficulty => {
        const difficultyPath = path.join(tutorialsDirectory, difficulty);

        if (!fs.existsSync(difficultyPath)) {
            console.warn(`Directory not found: ${difficultyPath}`);
            return;
        }

        const filenames = fs.readdirSync(difficultyPath);

        filenames.forEach(filename => {
            if (!filename.endsWith('.md')) return;

            try {
                const filePath = path.join(difficultyPath, filename);
                // Use sanitized file read to prevent YAML parsing errors
                const fileContents = readSanitizedMarkdownFile(filePath);

                if (!fileContents) {
                    console.warn(`Skipping empty or invalid file: ${filePath}`);
                    return;
                }

                // Parse frontmatter with error handling
                let data = {}, content = '';
                try {
                    const matterResult = matter(fileContents);
                    data = matterResult.data;
                    content = matterResult.content;
                } catch (e) {
                    console.error(`Error parsing frontmatter in ${filePath} even after sanitization:`, e);
                    return; // Skip this file if we can't parse it
                }

                // Create slug from filename
                const slug = filename.replace(/\.md$/, '');

                // Parse keywords if they exist as a string
                let keywords = data.Keywords || data.keywords || '';
                if (typeof keywords === 'string') {
                    keywords = keywords.split(',').map((k: string) => k.trim());
                } else if (!Array.isArray(keywords)) {
                    keywords = [];
                }

                tutorials.push({
                    slug,
                    title: data.Title || data.title || 'Untitled Tutorial',
                    description: data.Description || data.description || '',
                    author: data.Author || data.author || 'Unknown Author',
                    difficulty,
                    difficultyLevel: data['Difficulty Level'] || data.difficultyLevel || difficulty,
                    category: data.label || data.category || 'getting-started',
                    duration: data['Estimated Time'] || data.duration || '30 min',
                    estimatedTime: data['Estimated Time'] || data.estimatedTime || '30 min',
                    date: data.Date || data.date || '',
                    content,
                    keywords,
                    prerequisites: data.Prerequisites || data.prerequisites || '',
                    image: data.image || '',
                    lastUpdated: data.lastUpdated || data['Last Updated'] || ''
                });
            } catch (error) {
                console.error(`Error processing tutorial file ${filename}:`, error);
            }
        });
    });

    // Sort tutorials by date (newest first)
    return tutorials.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Retrieves a single tutorial by its slug
 * @param slug The unique identifier for the tutorial
 * @returns The tutorial or undefined if not found
 */
export function getTutorialBySlug(slug: string): ArticleMetadata | undefined {
    const tutorials = getAllTutorials();
    return tutorials.find(tutorial => tutorial.slug === slug);
}

/**
 * Retrieves tutorials by category
 * @param category The category to filter by, or 'all' for all tutorials
 * @returns Array of tutorials in the specified category
 */
export function getTutorialsByCategory(category: string): ArticleMetadata[] {
    const tutorials = getAllTutorials();
    if (category === 'all') return tutorials;
    return tutorials.filter(tutorial => tutorial.category === category);
}
