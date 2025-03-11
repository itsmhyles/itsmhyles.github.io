// Handle redirects for development environment
document.addEventListener('DOMContentLoaded', function() {
    // Map of redirects for development
    const redirects = {
        // Blog post redirects
        '/blogs/thoughts/twenty-four': '/blogs/thoughts/twenty-four.html',
        '/blogs/thoughts/twenty-four.html': '/blogs/thoughts/twenty-four.html',
        '/blogs/thoughts/goodness': '/blogs/thoughts/goodness.html',
        '/blogs/thoughts/goodness.html': '/blogs/thoughts/goodness.html',
        '/blogs/thoughts/writing': '/blogs/thoughts/writing.html',
        '/blogs/thoughts/writing.html': '/blogs/thoughts/writing.html',

        // Section redirects
        '/blogs': '/blogs/index.html',
        '/blogs/': '/blogs/index.html',
        '/projects': '/projects/index.html',
        '/projects/': '/projects/index.html',
        '/about': '/about/index.html',
        '/about/': '/about/index.html',

        // Blog sections
        '/blogs/thoughts': '/blogs/thoughts/index.html',
        '/blogs/thoughts/': '/blogs/thoughts/index.html',
        '/blogs/books': '/blogs/books/index.html',
        '/blogs/books/': '/blogs/books/index.html',
        '/blogs/films': '/blogs/films/index.html',
        '/blogs/films/': '/blogs/films/index.html',
        '/blogs/food': '/blogs/food/index.html',
        '/blogs/food/': '/blogs/food/index.html',

        // Handle old mhyles-list paths
        '/blogs/mhyles-list/books': '/blogs/books/index.html',
        '/blogs/mhyles-list/books.html': '/blogs/books/index.html',
        '/blogs/mhyles-list/films': '/blogs/films/index.html',
        '/blogs/mhyles-list/films.html': '/blogs/films/index.html',
        '/blogs/mhyles-list/food': '/blogs/food/index.html',
        '/blogs/mhyles-list/food.html': '/blogs/food/index.html'
    };

    // Get current path without query string
    const currentPath = window.location.pathname;

    // Check if we need to redirect
    if (redirects[currentPath]) {
        // For development, we want to preserve any query parameters
        const queryString = window.location.search;
        window.location.replace(redirects[currentPath] + queryString);
    }
});
