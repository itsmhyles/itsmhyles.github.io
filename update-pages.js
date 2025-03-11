// Script to update all HTML files
// - Remove cursor.css references
// - Remove cursor.js references
// - Add dev-redirect.js and spa-redirect.js
// - Update navigation to use clean URLs

const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(findHtmlFiles(filePath));
        } else if (path.extname(file) === '.html') {
            results.push(filePath);
        }
    }
    
    return results;
}

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove cursor.css reference
    content = content.replace('<link rel="stylesheet" href="/styles/cursor.css">\n', '');
    content = content.replace('<link rel="stylesheet" href="../../styles/cursor.css">\n', '');
    
    // Remove cursor.js reference
    content = content.replace('<script src="/scripts/cursor.js"></script>\n', '');
    content = content.replace('<script src="../../scripts/cursor.js"></script>\n', '');
    
    // Add redirect scripts if not present
    const hasDevRedirect = content.includes('dev-redirect.js');
    const hasSpaRedirect = content.includes('spa-redirect.js');
    
    if (!hasDevRedirect || !hasSpaRedirect) {
        const redirectScripts = `    <script src="/dev-redirect.js"></script>
    <script src="/spa-redirect.js"></script>`;
        content = content.replace('</head>', `    ${redirectScripts}\n</head>`);
    }
    
    // Update navigation links to use clean URLs
    content = content.replace(/href="\/blogs\/thoughts\/index\.html"/g, 'href="/blogs/thoughts"');
    content = content.replace(/href="\/blogs\/books\/index\.html"/g, 'href="/blogs/books"');
    content = content.replace(/href="\/blogs\/films\/index\.html"/g, 'href="/blogs/films"');
    content = content.replace(/href="\/blogs\/food\/index\.html"/g, 'href="/blogs/food"');
    content = content.replace(/href="\/projects\/index\.html"/g, 'href="/projects"');
    content = content.replace(/href="\/about\/index\.html"/g, 'href="/about"');
    content = content.replace(/href="\/blogs\/thoughts\/index\.html"/g, 'href="/blogs/thoughts"');
    content = content.replace(/href="\/blogs\/mhyles-list\/books\.html"/g, 'href="/blogs/books"');
    content = content.replace(/href="\/blogs\/mhyles-list\/films\.html"/g, 'href="/blogs/films"');
    content = content.replace(/href="\/blogs\/mhyles-list\/food\.html"/g, 'href="/blogs/food"');
    
    fs.writeFileSync(filePath, content);
}

const rootDir = process.cwd();
const htmlFiles = findHtmlFiles(rootDir);

for (const file of htmlFiles) {
    console.log(`Updating ${file}...`);
    updateFile(file);
}

console.log('All files updated successfully!');
