// This script creates a simple CORS proxy.
// It's used to bypass CORS restrictions when making API calls from a static HTML file.
// IMPORTANT: This is for development and educational purposes only.
// For a production environment, you should have a proper backend server to handle API keys and requests.

(function() {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

    // We're going to monkey-patch the original fetch function
    const originalFetch = window.fetch;

    window.fetch = function(url, options) {
        // Only proxy requests to the Together AI API
        if (typeof url === 'string' && url.startsWith('https://api.together.xyz')) {
            console.log('Proxying request to:', url);
            
            // Prepend the proxy URL to the original URL
            const proxiedUrl = PROXY_URL + url;

            // Create a new headers object or use existing one
            const newHeaders = new Headers(options ? options.headers : {});
            
            // Add the x-requested-with header, which is often required by proxies like cors-anywhere
            newHeaders.append('X-Requested-With', 'XMLHttpRequest');

            // Create a new options object with the updated headers
            const newOptions = {
                ...options,
                headers: newHeaders
            };

            // Call the original fetch with the proxied URL and new options
            return originalFetch(proxiedUrl, newOptions);
        }

        // For all other requests, use the original fetch function
        return originalFetch(url, options);
    };
})(); 