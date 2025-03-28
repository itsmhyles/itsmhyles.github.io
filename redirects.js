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
    let newUrl;
    
    console.log('Redirect handler running for path:', currentPath);
    
    // For local development, the path might include the port and localhost
    if (currentPath.includes('localhost') || currentPath.includes(':8000') || currentPath.includes(':5000')) {
        const urlParts = currentPath.split('/');
        // Remove the localhost part
        currentPath = '/' + urlParts.slice(3).join('/');
        console.log('Adjusted local path to:', currentPath);
    }
    
    // Normalize the path (remove trailing slashes if present)
    if (currentPath.endsWith('/') && currentPath !== '/') {
        currentPath = currentPath.slice(0, -1);
        console.log('Normalized path (removed trailing slash):', currentPath);
    }
    
    // Direct match check
    if (SITE_REDIRECTS[currentPath]) {
        newUrl = SITE_REDIRECTS[currentPath];
        console.log('Direct match found, redirecting to:', newUrl);
        if(isDev){
            newUrl = newUrl + queryString;
        }
        window.location.replace(newUrl);
        return true;
    }
    
    // Handle Jekyll baseurl issues
    if (currentPath.includes('/itsmhyles.github.io')) {
        const strippedPath = currentPath.replace('/itsmhyles.github.io', '');
        if (SITE_REDIRECTS[strippedPath]) {
            newUrl = SITE_REDIRECTS[strippedPath];
            console.log('Jekyll baseurl match found, redirecting to:', newUrl); // Debug log
            if(isDev){
                newUrl = newUrl + queryString;
            }
            window.location.replace(newUrl);
            return true;
        }
    }
    
    // Handle paths without .html extension - THIS SECTION WAS MISSING
    if (!currentPath.endsWith('.html') && !currentPath.endsWith('/')) {
        const htmlPath = currentPath + '.html';
        if (SITE_REDIRECTS[htmlPath]) {
            newUrl = SITE_REDIRECTS[htmlPath];
            console.log('HTML extension match found, redirecting to:', newUrl); // Debug log
            if(isDev){
                newUrl = newUrl + queryString;
            }
            window.location.replace(newUrl);
            return true;
        }
    }
    
    // Handle paths with just the filename (no directory) - THIS SECTION WAS MISSING
    const pathParts = currentPath.split('/');
    const filename = pathParts[pathParts.length - 1];
    if (filename && SITE_REDIRECTS['/' + filename]) {
        newUrl = SITE_REDIRECTS['/' + filename];
        console.log('Filename match found, redirecting to:', newUrl); // Debug log
        if(isDev){
            newUrl = newUrl + queryString;
        }
        window.location.replace(newUrl);
        return true;
    }
    
    // Handle paths without index.html
    if (!currentPath.endsWith('index.html') && !currentPath.endsWith('/')) {
        const indexPath = currentPath + '/index.html';
        if (SITE_REDIRECTS[indexPath]) {
            newUrl = SITE_REDIRECTS[indexPath];
            console.log('Index path match found, redirecting to:', newUrl); // Debug log
            if(isDev){
                newUrl = newUrl + queryString;
            }
            window.location.replace(newUrl);
            return true;
        }
    }
    
    console.log('No redirect match found for:', currentPath);
    return false;
}

// Make sure this runs when the page loads
window.onload = function() {
    console.log('Window loaded, initializing redirect handler');
    handleRedirects(true);
};

// Also keep the DOMContentLoaded event for redundancy
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing redirect handler');
    handleRedirects(true);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_REDIRECTS,
        handleRedirects
    };
}