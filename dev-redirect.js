// Handle redirects for development environment using the centralized redirects.js
document.addEventListener('DOMContentLoaded', function() {
    // Call the handleRedirects function with isDev=true for development mode
    if (typeof handleRedirects === 'function') {
        handleRedirects(true);
    } else {
        console.error('handleRedirects function not found. Make sure redirects.js is loaded before dev-redirect.js');
    }
});
