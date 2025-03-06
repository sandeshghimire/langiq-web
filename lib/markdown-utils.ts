import fs from 'fs';

/**
 * Sanitizes markdown frontmatter to ensure YAML compatibility
 * Especially helpful for titles with colons and other special characters
 */
export function sanitizeMarkdownFrontmatter(content: string): string {
    // Use regex to find the frontmatter section
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);

    if (!match) return content;

    const frontmatter = match[1];
    const frontmatterStart = match.index || 0;
    const frontmatterEnd = frontmatterStart + match[0].length;

    // Process the frontmatter to fix common YAML issues
    const processedFrontmatter = frontmatter
        .split('\n')
        .map(line => {
            // Find key-value pairs
            const keyValueMatch = line.match(/^(\w+):\s*(.*)/);
            if (!keyValueMatch) return line;

            const [_, key, value] = keyValueMatch;

            // If value contains a colon and is not already quoted, quote it
            if (value.includes(':') && !value.startsWith('"') && !value.startsWith("'")) {
                return `${key}: "${value.replace(/"/g, '\\"')}"`;
            }

            return line;
        })
        .join('\n');

    // Reconstruct the markdown with fixed frontmatter
    return content.substring(0, frontmatterStart) +
        '---\n' + processedFrontmatter + '\n---' +
        content.substring(frontmatterEnd);
}

/**
 * Read and sanitize a markdown file
 */
export function readSanitizedMarkdownFile(path: string): string {
    try {
        const content = fs.readFileSync(path, 'utf8');
        return sanitizeMarkdownFrontmatter(content);
    } catch (error) {
        console.error(`Error reading markdown file ${path}:`, error);
        return '';
    }
}
