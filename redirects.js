// Central redirects configuration for the website
// This file contains all redirects in one place to make maintenance easier

// Define all redirects in a single object
const SITE_REDIRECTS = {
    // Blog post redirects with variations
    '/blogs/thoughts/twenty-four': '/blogs/thoughts/twenty-four.html',
    '/blogs/thoughts/twenty-four.html': '/blogs/thoughts/twenty-four.html',
    '/blogs/thoughts/goodness': '/blogs/thoughts/goodness.html',
    '/blogs/thoughts/goodness.html': '/blogs/thoughts/goodness.html',
    '/blogs/thoughts/writing': '/blogs/thoughts/writing.html',
    '/blogs/thoughts/writing.html': '/blogs/thoughts/writing.html',

    // Project page redirects with all possible variations
    '/projects/nereus': '/projects/2024/11/nereus.html',
    '/projects/2024/11/nereus': '/projects/2024/11/nereus.html',
    '/projects/nereus.html': '/projects/2024/11/nereus.html',
    '/nereus': '/projects/2024/11/nereus.html',
    '/nereus.html': '/projects/2024/11/nereus.html',
    '/projects/2024/11/nereus/': '/projects/2024/11/nereus.html',
    '/itsmhyles.github.io/projects/nereus': '/projects/2024/11/nereus.html',
    '/itsmhyles.github.io/projects/2024/11/nereus': '/projects/2024/11/nereus.html',
    '/itsmhyles.github.io/projects/nereus.html': '/projects/2024/11/nereus.html',

    // Blog post redirects with additional variations
    '/twenty-four': '/blogs/thoughts/twenty-four.html',
    '/twenty-four.html': '/blogs/thoughts/twenty-four.html',
    '/goodness': '/blogs/thoughts/goodness.html',
    '/goodness.html': '/blogs/thoughts/goodness.html',
    '/writing': '/blogs/thoughts/writing.html',
    '/writing.html': '/blogs/thoughts/writing.html',
    '/itsmhyles.github.io/blogs/thoughts/twenty-four': '/blogs/thoughts/twenty-four.html',
    '/itsmhyles.github.io/blogs/thoughts/goodness': '/blogs/thoughts/goodness.html',
    '/itsmhyles.github.io/blogs/thoughts/writing': '/blogs/thoughts/writing.html',

    // Old mhyles-list redirects
    '/blogs/mhyles-list/books': '/blogs/books/index.html',
    '/blogs/mhyles-list/books.html': '/blogs/books/index.html',
    '/blogs/mhyles-list/films': '/blogs/films/index.html',
    '/blogs/mhyles-list/films.html': '/blogs/films/index.html',
    '/blogs/mhyles-list/food': '/blogs/food/index.html',
    '/blogs/mhyles-list/food.html': '/blogs/food/index.html',
    '/blogs/mhyles-list': '/blogs/index.html',
    '/blogs/mhyles-list/': '/blogs/index.html',
    '/mhyles-list': '/blogs/index.html',
    '/mhyles-list/': '/blogs/index.html',

    // Section index pages with variations
    '/blogs': '/blogs/index.html',
    '/blogs/': '/blogs/index.html',
    '/projects': '/projects/index.html',
    '/projects/': '/projects/index.html',
    '/about': '/about/index.html',
    '/about/': '/about/index.html',

    // Blog sections with variations
    '/blogs/books': '/blogs/books/index.html',
    '/blogs/books/': '/blogs/books/index.html',
    '/blogs/books/index': '/blogs/books/index.html',
    '/blogs/films': '/blogs/films/index.html',
    '/blogs/films/': '/blogs/films/index.html',
    '/blogs/films/index': '/blogs/films/index.html',
    '/blogs/food': '/blogs/food/index.html',
    '/blogs/food/': '/blogs/food/index.html',
    '/blogs/food/index': '/blogs/food/index.html',
    '/blogs/thoughts': '/blogs/thoughts/index.html',
    '/blogs/thoughts/': '/blogs/thoughts/index.html',
    '/blogs/thoughts/index': '/blogs/thoughts/index.html',
};

// Function to handle redirects
function handleRedirects(isDev = false) {
    // Get current path without query string
    let currentPath = window.location.pathname;
    const queryString = window.location.search;
    
    // Normalize the path (remove trailing slashes if present)
    if (currentPath.endsWith('/') && currentPath !== '/') {
        currentPath = currentPath.slice(0, -1);
    }
    
    // Direct match check
    if (SITE_REDIRECTS[currentPath]) {
        window.location.replace(SITE_REDIRECTS[currentPath] + (isDev ? queryString : ''));
        return true;
    }
    
    // Handle Jekyll baseurl issues
    if (currentPath.includes('/itsmhyles.github.io')) {
        const strippedPath = currentPath.replace('/itsmhyles.github.io', '');
        if (SITE_REDIRECTS[strippedPath]) {
            window.location.replace(SITE_REDIRECTS[strippedPath] + (isDev ? queryString : ''));
            return true;
        }
    }
    
    // Handle paths without .html extension
    if (!currentPath.endsWith('.html') && !currentPath.endsWith('/')) {
        const htmlPath = currentPath + '.html';
        if (SITE_REDIRECTS[htmlPath]) {
            window.location.replace(SITE_REDIRECTS[htmlPath] + (isDev ? queryString : ''));
            return true;
        }
    }
    
    // Handle paths with just the filename (no directory)
    const pathParts = currentPath.split('/');
    const filename = pathParts[pathParts.length - 1];
    if (filename && SITE_REDIRECTS['/' + filename]) {
        window.location.replace(SITE_REDIRECTS['/' + filename] + (isDev ? queryString : ''));
        return true;
    }
    
    // Handle paths without index.html
    if (!currentPath.endsWith('index.html') && !currentPath.endsWith('/')) {
        const indexPath = currentPath + '/index.html';
        if (SITE_REDIRECTS[indexPath]) {
            window.location.replace(SITE_REDIRECTS[indexPath] + (isDev ? queryString : ''));
            return true;
        }
    }
    
    return false;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_REDIRECTS,
        handleRedirects
    };
}
