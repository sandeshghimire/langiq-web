const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Path to applications
const applicationsDir = path.join(process.cwd(), 'public/content/Applications');

// Function to fix YAML frontmatter in markdown files
function fixYamlFrontmatter() {
    // Get all markdown files in the applications directory and its subdirectories
    const files = glob.sync(path.join(applicationsDir, '**/*.md'));

    console.log(`Found ${files.length} markdown files to process.`);

    files.forEach(filePath => {
        console.log(`Processing ${filePath}...`);

        try {
            let content = fs.readFileSync(filePath, 'utf8');

            // Check if file has YAML frontmatter
            if (!content.startsWith('---')) {
                console.log(`File ${filePath} doesn't have frontmatter. Skipping.`);
                return;
            }

            // Split the content to get the frontmatter
            const parts = content.split('---');
            if (parts.length < 3) {
                console.log(`Invalid frontmatter format in ${filePath}. Skipping.`);
                return;
            }

            let frontmatter = parts[1];

            // Normalize field names to lowercase
            const normalizedFrontmatter = frontmatter
                .split('\n')
                .map(line => {
                    // Skip empty lines or lines without a colon
                    if (!line.trim() || !line.includes(':')) return line;

                    const colonIndex = line.indexOf(':');
                    const fieldName = line.substring(0, colonIndex).trim();
                    const fieldValue = line.substring(colonIndex + 1).trim();

                    // Specific field name normalizations
                    const normalizedFieldName = fieldName.toLowerCase();

                    // Add quotes to field values with colons
                    if (fieldValue.includes(':')) {
                        return `${fieldName}: "${fieldValue.replace(/"/g, '\\"')}"`;
                    }

                    return line;
                })
                .join('\n');

            // Reconstruct the file content
            const newContent = `---${normalizedFrontmatter}---${parts.slice(2).join('---')}`;

            // Write the fixed content back to the file
            fs.writeFileSync(filePath, newContent, 'utf8');

            console.log(`Fixed frontmatter in ${filePath}`);
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
        }
    });

    console.log('All files processed!');
}

// Run the function
fixYamlFrontmatter();
