import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Application } from './types';

const APPLICATIONS_DIRECTORY = path.join(process.cwd(), 'public/content/Applications');
const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

// Helper to get icon based on keywords
const getIconForApplication = (keywords: string[]): string => {
    const keywordIconMap: Record<string, string> = {
        'document': '📄',
        'knowledge': '🧠',
        'content': '✍️',
        'data': '📊',
        'conversation': '💬',
        'code': '💻',
        'language': '🌐',
        'meeting': '🗓️',
        'email': '📧',
        'research': '🔍',
        'learning': '📚',
        'trend': '📈',
        'compliance': '⚖️',
        'feedback': '🔊',
        'product': '🛍️',
        'social': '📱',
        'resume': '📋',
        'grant': '💰',
        'medical': '🏥',
        'writing': '🖋️',
    };

    for (const keyword of keywords) {
        for (const [key, icon] of Object.entries(keywordIconMap)) {
            if (keyword.toLowerCase().includes(key.toLowerCase())) {
                return icon;
            }
        }
    }

    return '🔮'; // Default icon
};

// Read an application file and parse its metadata
export function parseApplicationFile(filePath: string): Application {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    const fileName = path.basename(filePath, '.md');
    const difficulty = DIFFICULTY_LEVELS.find(level =>
        filePath.includes(`/${level}/`)) || 'Beginner';

    const keywords = Array.isArray(data.keywords) ?
        data.keywords :
        (data.keywords ? data.keywords.split(',').map((k: string) => k.trim()) : []);

    return {
        title: data.title || fileName,
        author: data.author || 'LangIQ Team',
        description: data.description || '',
        keywords: keywords,
        difficulty: difficulty as Application['difficulty'],
        estimatedTime: data.estimatedTime || '10 minutes',
        slug: fileName,
        content: content
    };
}

// Function to get all applications
export async function getAllApplications(): Promise<Application[]> {
    try {
        const applications: Application[] = [];

        // Check if directory exists
        if (!fs.existsSync(APPLICATIONS_DIRECTORY)) {
            console.warn('Applications directory not found:', APPLICATIONS_DIRECTORY);
            return [];
        }

        // Loop through each difficulty level
        for (const difficulty of DIFFICULTY_LEVELS) {
            const difficultyPath = path.join(APPLICATIONS_DIRECTORY, difficulty);

            if (fs.existsSync(difficultyPath)) {
                const files = fs.readdirSync(difficultyPath).filter(file => file.endsWith('.md'));

                for (const file of files) {
                    try {
                        const filePath = path.join(difficultyPath, file);
                        const application = parseApplicationFile(filePath);

                        // Add the formatted slug that includes the difficulty level
                        application.slug = `${difficulty}/${application.slug}`;

                        applications.push(application);
                    } catch (e) {
                        console.error(`Error reading application file ${file}:`, e);
                    }
                }
            }
        }

        return applications;
    } catch (error) {
        console.error('Error getting all applications:', error);
        return [];
    }
}

// Get a single application by slug (just the filename part)
export function getApplicationBySlug(slug: string): Application | null {
    for (const difficultyLevel of DIFFICULTY_LEVELS) {
        const difficultyPath = path.join(APPLICATIONS_DIRECTORY, difficultyLevel);

        if (fs.existsSync(difficultyPath)) {
            const files = fs.readdirSync(difficultyPath).filter(file => file.endsWith('.md'));

            for (const file of files) {
                if (file.replace(/\.md$/, '') === slug) {
                    const filePath = path.join(difficultyPath, file);
                    return parseApplicationFile(filePath);
                }
            }
        }
    }

    return null;
}

// Get a single application by full slug (difficulty/filename format)
export async function getApplicationByFullSlug(fullSlug: string): Promise<Application> {
    try {
        // Split the slug to get difficulty and filename parts
        const [difficulty, slug] = fullSlug.split('/');

        if (!difficulty || !slug) {
            throw new Error(`Invalid full slug format: ${fullSlug}`);
        }

        // Construct path to the application file
        const filePath = path.join(APPLICATIONS_DIRECTORY, difficulty, `${slug}.md`);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            console.error(`Application not found for path: ${filePath}`);
            throw new Error(`Application not found for slug: ${fullSlug}`);
        }

        // Parse the application file
        const application = parseApplicationFile(filePath);

        // Set the full slug
        application.slug = fullSlug;

        return application;
    } catch (error) {
        console.error(`Error getting application data for full slug ${fullSlug}:`, error);
        throw error;
    }
}

// Get application content - if not already included in the application object
export function getApplicationContent(slug: string): string | null {
    const application = getApplicationBySlug(slug);
    if (application && application.content) {
        return application.content;
    }
    return null;
}
