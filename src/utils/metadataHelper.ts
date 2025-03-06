/**
 * Utility functions for handling article metadata
 */

/**
 * Maps raw metadata fields to standardized keys
 * This handles variations in frontmatter field names (e.g., Title vs title)
 * 
 * @param rawMetadata - The raw frontmatter data
 * @returns Normalized metadata object with standardized keys
 */
export function mapMetadataFields(rawMetadata: Record<string, any>): Record<string, any> {
    const normalizedMetadata: Record<string, any> = {};

    // Define mapping of common field variations to standardized keys
    const fieldMappings: Record<string, string> = {
        'title': 'title',
        'Title': 'title',
        'author': 'author',
        'Author': 'author',
        'description': 'description',
        'Description': 'description',
        'abstract': 'abstract',
        'Abstract': 'abstract',
        'keywords': 'keywords',
        'Keywords': 'keywords',
        'date': 'date',
        'Date': 'date',
        'difficultyLevel': 'difficultyLevel',
        'Difficulty Level': 'difficultyLevel',
        'difficulty': 'difficultyLevel',
        'estimatedTime': 'estimatedTime',
        'Estimated Time': 'estimatedTime',
        'readTime': 'estimatedTime',
        'journal': 'journal',
        'Journal': 'journal',
        'doi': 'doi',
        'DOI': 'doi'
    };

    // Process each raw metadata field
    for (const [key, value] of Object.entries(rawMetadata)) {
        // If the key has a mapping, use the standardized key
        const normalizedKey = fieldMappings[key] || key.toLowerCase();

        // Only set the field if it doesn't already exist or is empty
        if (!normalizedMetadata[normalizedKey] || !normalizedMetadata[normalizedKey].length) {
            normalizedMetadata[normalizedKey] = value;
        }
    }

    return normalizedMetadata;
}

/**
 * Processes frontmatter data to handle potential duplicate fields
 * Returns cleaned and normalized metadata
 * 
 * @param rawMetadata - The raw frontmatter data from gray-matter
 * @param slug - The article slug
 * @param category - The category the article was found in
 * @returns Processed metadata object with standardized fields
 */
export function processArticleMetadata(rawMetadata: any, slug: string, category: string) {
    // First normalize the metadata fields
    const normalizedMetadata = mapMetadataFields(rawMetadata);

    // Format the date for display if available
    let formattedDate = null;
    if (normalizedMetadata.date) {
        try {
            const dateObj = new Date(normalizedMetadata.date);
            formattedDate = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            formattedDate = normalizedMetadata.date;
        }
    }

    // Ensure keywords are properly formatted as an array
    const keywords = Array.isArray(normalizedMetadata.keywords)
        ? normalizedMetadata.keywords
        : (normalizedMetadata.keywords ? normalizedMetadata.keywords.split(',').map((k: string) => k.trim()) : []);

    // Construct a standardized metadata object
    return {
        title: normalizedMetadata.title || 'Untitled Article',
        author: normalizedMetadata.author || 'Unknown Author',
        description: normalizedMetadata.description || '',
        abstract: normalizedMetadata.abstract || normalizedMetadata.description || '',
        keywords: keywords,
        rawDate: normalizedMetadata.date || '',
        date: formattedDate || 'Unpublished',
        difficultyLevel: normalizedMetadata.difficultyLevel || 'Not specified',
        estimatedTime: normalizedMetadata.estimatedTime || 'Not specified',
        category: category || 'Uncategorized',
        journal: normalizedMetadata.journal || null,
        doi: normalizedMetadata.doi || null,
        slug: slug,
    };
}
