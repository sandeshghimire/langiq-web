import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Application {
    slug: string;
    title: string;
    author: string;
    description: string;
    keywords: string[];
    date: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    label: string;
    estimatedTime: string;
    content: string;
}

const applicationsDirectory = path.join(process.cwd(), 'public/content/Applications');

export function getDifficultyLevels(): string[] {
    return ['Beginner', 'Intermediate', 'Advanced'];
}

export function getApplicationSlugs(difficulty: string): string[] {
    const difficultyPath = path.join(applicationsDirectory, difficulty);
    if (!fs.existsSync(difficultyPath)) return [];

    return fs.readdirSync(difficultyPath)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace(/\.md$/, ''));
}

export function getAllApplications(): Application[] {
    const applications: Application[] = [];

    getDifficultyLevels().forEach(difficulty => {
        const difficultyPath = path.join(applicationsDirectory, difficulty);
        if (!fs.existsSync(difficultyPath)) return;

        const fileNames = fs.readdirSync(difficultyPath);

        fileNames.forEach(fileName => {
            if (!fileName.endsWith('.md')) return;

            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(difficultyPath, fileName);

            try {
                const fileContents = fs.readFileSync(fullPath, 'utf8');

                // Use gray-matter with default settings
                const { data, content } = matter(fileContents);

                // Extract all possible field names with case insensitivity
                const title = data.title || data.Title || '';
                const author = data.author || data.Author || '';
                const description = data.description || data.Description || '';
                const rawKeywords = data.keywords || data.Keywords || [];
                const date = data.date || data.Date || '';
                const label = data.label || data.Label || '';
                const estimatedTime = data.estimatedTime || data['Estimated Time'] || '';

                // Handle keywords that might be strings or arrays
                const keywords = Array.isArray(rawKeywords)
                    ? rawKeywords
                    : typeof rawKeywords === 'string'
                        ? rawKeywords.split(',').map(k => k.trim())
                        : [];

                applications.push({
                    slug,
                    title,
                    author,
                    description,
                    keywords,
                    date,
                    difficulty: difficulty as Application['difficulty'],
                    label,
                    estimatedTime,
                    content
                });
            } catch (error) {
                console.error(`Error parsing file ${fileName}:`, error);
                // Add a fallback application with error information
                applications.push({
                    slug,
                    title: `Error loading: ${fileName}`,
                    author: 'System',
                    description: `There was an error loading this application: ${(error as Error).message}`,
                    keywords: ['error'],
                    date: new Date().toISOString(),
                    difficulty: difficulty as Application['difficulty'],
                    label: 'Error',
                    estimatedTime: 'N/A',
                    content: '**Error loading content**'
                });
            }
        });
    });

    // Sort by date (newest first)
    return applications.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });
}

export function getApplicationBySlug(difficulty: string, slug: string): Application | null {
    const fullPath = path.join(applicationsDirectory, difficulty, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter with default settings
        const { data, content } = matter(fileContents);

        // Extract all possible field names with case insensitivity
        const title = data.title || data.Title || '';
        const author = data.author || data.Author || '';
        const description = data.description || data.Description || '';
        const rawKeywords = data.keywords || data.Keywords || [];
        const date = data.date || data.Date || '';
        const label = data.label || data.Label || '';
        const estimatedTime = data.estimatedTime || data['Estimated Time'] || '';

        // Handle keywords that might be strings or arrays
        const keywords = Array.isArray(rawKeywords)
            ? rawKeywords
            : typeof rawKeywords === 'string'
                ? rawKeywords.split(',').map(k => k.trim())
                : [];

        return {
            slug,
            title,
            author,
            description,
            keywords,
            date,
            difficulty: difficulty as Application['difficulty'],
            label,
            estimatedTime,
            content
        };
    } catch (error) {
        console.error(`Error parsing file ${slug}.md:`, error);
        return {
            slug,
            title: `Error loading: ${slug}`,
            author: 'System',
            description: `There was an error loading this application: ${(error as Error).message}`,
            keywords: ['error'],
            date: new Date().toISOString(),
            difficulty: difficulty as Application['difficulty'],
            label: 'Error',
            estimatedTime: 'N/A',
            content: '**Error loading content**'
        };
    }
}
