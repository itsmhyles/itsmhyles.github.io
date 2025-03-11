// Handle redirects for all paths using the centralized redirects.js
document.addEventListener('DOMContentLoaded', function() {
    // Call the handleRedirects function with isDev=false for production mode
    if (typeof handleRedirects === 'function') {
        handleRedirects(false);
    } else {
        console.error('handleRedirects function not found. Make sure redirects.js is loaded before spa-redirect.js');
    }
});
