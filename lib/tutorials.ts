import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { readSanitizedMarkdownFile } from './markdown-utils';

export interface Tutorial {
    slug: string;
    title: string;
    description: string;
    author: string;
    difficulty: string;
    category: string;
    duration: string;
    date: string;
    content: string;
    keywords?: string[];
}

const tutorialsDirectory = path.join(process.cwd(), 'public/content/Tutorials');

export function getAllTutorials(): Tutorial[] {
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    let tutorials: Tutorial[] = [];

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

                tutorials.push({
                    slug,
                    title: data.title || 'Untitled Tutorial',
                    description: data.description || '',
                    author: data.author || 'Unknown Author',
                    difficulty,
                    category: data.label || 'getting-started',
                    duration: data.estimatedTime || '30 min',
                    date: data.date || '',
                    content,
                    keywords: data.keywords || []
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

export function getTutorialBySlug(slug: string): Tutorial | undefined {
    const tutorials = getAllTutorials();
    return tutorials.find(tutorial => tutorial.slug === slug);
}

export function getTutorialsByCategory(category: string): Tutorial[] {
    const tutorials = getAllTutorials();
    if (category === 'all') return tutorials;
    return tutorials.filter(tutorial => tutorial.category === category);
}
