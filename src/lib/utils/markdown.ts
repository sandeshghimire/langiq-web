import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Application } from '../types';

const applicationsDirectory = path.join(process.cwd(), 'public/content/Applications');

export function getAllApplicationSlugs(): string[] {
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    let slugs: string[] = [];

    difficulties.forEach(difficulty => {
        const difficultyPath = path.join(applicationsDirectory, difficulty);
        try {
            if (!fs.existsSync(difficultyPath)) {
                console.warn(`Directory not found: ${difficultyPath}`);
                return;
            }
            const fileNames = fs.readdirSync(difficultyPath);

            fileNames.forEach(fileName => {
                if (fileName.endsWith('.md')) {
                    const slug = fileName.replace(/\.md$/, '');
                    slugs.push(`${difficulty}/${slug}`);
                }
            });
        } catch (error) {
            console.error(`Error reading directory ${difficultyPath}:`, error);
        }
    });

    return slugs;
}

export function getApplicationData(fullSlug: string): Application | null {
    if (!fullSlug) {
        console.error('Invalid slug provided');
        return null;
    }

    // Properly declare variables before using them
    let difficulty: string;
    let slug: string;

    if (fullSlug.includes('/')) {
        // Fix destructuring assignment
        const parts = fullSlug.split('/');
        difficulty = parts[0];
        slug = parts.slice(1).join('/');
    } else {
        // Try to find which difficulty folder contains this slug
        const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
        let found = false;

        for (const d of difficulties) {
            const testPath = path.join(applicationsDirectory, d, `${fullSlug}.md`);
            if (fs.existsSync(testPath)) {
                difficulty = d;
                slug = fullSlug;
                found = true;
                break;
            }
        }

        if (!found) {
            console.error(`Could not find application with slug: ${fullSlug}`);
            return null;
        }
    }

    const filePath = path.join(applicationsDirectory, difficulty, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return null;
    }

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Pre-process the frontmatter to handle unquoted colons in titles and descriptions
        const processedContent = preprocessMarkdown(fileContents);

        const { data, content } = matter(processedContent);

        return {
            slug: fullSlug,
            title: data.title || 'Untitled Application',
            author: data.author || 'Anonymous',
            description: data.description || '',
            keywords: Array.isArray(data.keywords) ? data.keywords : data.keywords ? [data.keywords] : [],
            date: data.date || new Date().toISOString(),
            difficulty: difficulty as Application['difficulty'],
            label: data.label || '',
            estimatedTime: data.estimatedTime || '',
            content,
        };
    } catch (error) {
        console.error(`Error parsing markdown file ${filePath}:`, error);
        // Return a default application object with error information
        return {
            slug: fullSlug,
            title: `Error Loading: ${slug}`,
            author: 'System',
            description: 'There was an error loading this application data.',
            keywords: ['error'],
            date: new Date().toISOString(),
            difficulty: difficulty as Application['difficulty'],
            label: 'Error',
            estimatedTime: '',
            content: 'Content could not be loaded due to a formatting error in the source markdown.',
        };
    }
}

// Helper function to preprocess markdown frontmatter
function preprocessMarkdown(content: string): string {
    const frontMatterRegex = /^---\s*\n([\s\S]*?\n)---\s*\n/;
    const match = content.match(frontMatterRegex);

    if (!match) return content;

    const frontMatter = match[1];
    const processedFrontMatter = frontMatter
        .split('\n')
        .map(line => {
            // If the line contains a key-value pair with a colon
            if (line.includes(':')) {
                const [key, ...valueParts] = line.split(':');
                const value = valueParts.join(':').trim();

                // If the value contains a colon, wrap it in quotes
                if (value.includes(':') && !value.startsWith('"') && !value.startsWith("'")) {
                    return `${key}: "${value.replace(/"/g, '\\"')}"`;
                }
            }
            return line;
        })
        .join('\n');

    return content.replace(frontMatterRegex, `---\n${processedFrontMatter}\n---\n`);
}

export function getAllApplications(): Application[] {
    const slugs = getAllApplicationSlugs();
    const applications = slugs
        .map(slug => getApplicationData(slug))
        .filter((app): app is Application => app !== null);

    return applications;
}

export function getApplicationsByDifficulty(difficulty: Application['difficulty']): Application[] {
    return getAllApplications().filter(app => app.difficulty === difficulty);
}
