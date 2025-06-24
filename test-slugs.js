const fs = require('fs');
const path = require('path');

function createSlugFromFilename(filename) {
    return filename
        .replace(/\.mdx?$/, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

const mdxDir = path.join(process.cwd(), 'public/markdown');
const fileNames = fs.readdirSync(mdxDir).filter(file =>
    file.endsWith('.mdx') || file.endsWith('.md')
);

console.log('Files and their generated slugs:');
fileNames.forEach(fileName => {
    const slug = createSlugFromFilename(fileName);
    console.log(`File: ${fileName}`);
    console.log(`Slug: ${slug}`);
    console.log(`URL: /case-studies/${slug}`);
    console.log('---');
});
