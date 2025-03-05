import fs from 'fs';
import path from 'path';

export interface ArticleMetadata {
    title: string;
    author: string;
    description: string;
    keywords: string[];
    date: string;
    difficultyLevel: string;
    estimatedTime: string;
    category: string; // Derived from folder name
    slug: string; // Derived from filename
}

export function getArticles(): ArticleMetadata[] {
    const articlesDir = path.join(process.cwd(), 'public/content/Articles');
    const categories = ['Advanced', 'Beginner', 'Intermediate'];
    const articles: ArticleMetadata[] = [];

    categories.forEach(category => {
        const categoryDir = path.join(articlesDir, category);

        if (!fs.existsSync(categoryDir)) {
            console.warn(`Directory doesn't exist: ${categoryDir}`);
            return;
        }

        const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.md'));

        files.forEach(file => {
            const filePath = path.join(categoryDir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // Extract metadata section between --- marks
            const metadataMatch = content.match(/^---\n([\s\S]*?)\n---/);

            if (metadataMatch && metadataMatch[1]) {
                const metadataStr = metadataMatch[1];
                const metadata: Record<string, string> = {};

                // Parse each metadata line
                metadataStr.split('\n').forEach(line => {
                    const [key, ...valueParts] = line.split(':').map(part => part.trim());
                    if (key && valueParts.length) {
                        metadata[key.toLowerCase()] = valueParts.join(':').trim();
                    }
                });

                // Create slug from filename
                const slug = file.replace('.md', '');

                // Convert to our article metadata format
                articles.push({
                    title: metadata.title || 'Untitled Article',
                    author: metadata.author || 'Anonymous',
                    description: metadata.description || '',
                    keywords: metadata.keywords ? metadata.keywords.split(',').map(k => k.trim()) : [],
                    date: metadata.date || 'Unknown Date',
                    difficultyLevel: metadata.difficultylevel || category,
                    estimatedTime: metadata.estimatedtime || 'Unknown',
                    category: category,
                    slug: slug
                });
            }
        });
    });

    // Sort by date (newest first)
    articles.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return articles;
}

export function getFeaturedArticle(): ArticleMetadata | null {
    const articles = getArticles();
    return articles.length > 0 ? articles[0] : null;
}
