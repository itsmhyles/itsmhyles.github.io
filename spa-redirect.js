// Handle redirects for all paths
document.addEventListener('DOMContentLoaded', function() {
    const redirects = {
        // Blog post redirects with variations
        '/blogs/thoughts/twenty-four': '/blogs/thoughts/twenty-four.html',
        '/blogs/thoughts/twenty-four.html': '/blogs/thoughts/twenty-four.html',
        '/blogs/thoughts/goodness': '/blogs/thoughts/goodness.html',
        '/blogs/thoughts/goodness.html': '/blogs/thoughts/goodness.html',
        '/blogs/thoughts/writing': '/blogs/thoughts/writing.html',
        '/blogs/thoughts/writing.html': '/blogs/thoughts/writing.html',

        // Old mhyles-list redirects
        '/blogs/mhyles-list/books': '/blogs/books/index.html',
        '/blogs/mhyles-list/books.html': '/blogs/books/index.html',
        '/blogs/mhyles-list/films': '/blogs/films/index.html',
        '/blogs/mhyles-list/films.html': '/blogs/films/index.html',
        '/blogs/mhyles-list/food': '/blogs/food/index.html',
        '/blogs/mhyles-list/food.html': '/blogs/food/index.html',

        // Section index pages with variations
        '/blogs': '/blogs/index.html',
        '/blogs/': '/blogs/index.html',
        '/projects': '/projects/index.html',
        '/projects/': '/projects/index.html',
        '/about': '/about/index.html',
        '/about/': '/about/index.html',

        // Blog sections
        '/blogs/books': '/blogs/books/index.html',
        '/blogs/books/': '/blogs/books/index.html',
        '/blogs/films': '/blogs/films/index.html',
        '/blogs/films/': '/blogs/films/index.html',
        '/blogs/food': '/blogs/food/index.html',
        '/blogs/food/': '/blogs/food/index.html',
        '/blogs/thoughts': '/blogs/thoughts/index.html',
        '/blogs/thoughts/': '/blogs/thoughts/index.html',
    };

    // Get current path without query string
    const currentPath = window.location.pathname;

    // Check if we need to redirect
    if (redirects[currentPath]) {
        window.location.replace(redirects[currentPath]);
    }
});
