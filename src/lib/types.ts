// Application type definition
export interface Application {
    title: string;
    slug: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    author: string;
    estimatedTime: string;
    keywords?: string[];
    content?: string; // Markdown content or reference
}

// Add other types as needed
