// This service worker simply loads the main Ultraviolet service worker.
// This is necessary because GitHub Pages serves from a subdirectory.

importScripts('/schoolhakz/uv/uv.bundle.js');    // Load the Ultraviolet bundle first
importScripts('/schoolhakz/uv/uv.sw.js');          // Then load the Ultraviolet service work

// Initialize the Ultraviolet service worker
const sw = new UVServiceWorker();

// Add the fetch event listener
self.addEventListener('fetch', event => {
    event.respondWith(sw.fetch(event));
});

// Optional: Add an Install event to skip waiting for immediate activation
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Optional: Add an activate event to claim clients for immediate control
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});