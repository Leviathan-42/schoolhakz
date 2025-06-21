// Ensure this sw.js file is in the root of your GitHub Pages repository
// Define the base path for your repository
// This must match the base URL of your GitHub Pages site
const REPO_BASE_PATH = '/schoolhakz/';

// Construct the absolute paths for Ultraviolet files
// These paths must be correct relative to the root of your GitHub Pages domain
const UV_BUNDLE_PATH = REPO_BASE_PATH + 'uv/uv.bundle.js';
const UV_SW_PATH = REPO_BASE_PATH + 'uv/uv.sw.js';

// Import the Ultraviolet bundle first, then the Ultraviolet service worker.
// This order is critical for Ultraviolet v3.
try {
    importScripts(UV_BUNDLE_PATH);
    importScripts(UV_SW_PATH);
} catch (error) {
    console.error('Failed to load Ultraviolet service worker scripts:', error);
}

// Initialize the Ultraviolet Service Worker
const sw = new UVServiceWorker();

// Add the fetch event listener to handle proxied requests
self.addEventListener('fetch', event => {
    event.respondWith(sw.fetch(event));
});

// Optional: Add install and activate events for better service worker lifecycle manag
self.addEventListener('install', event => {
    // Forces the service worker to activate immediately without waiting
    self.skipWaiting();
    console.log('Service Worker installed and skipping waiting.');
});

self.addEventListener('activate', event => {
    // Claims clients immediately after activation, taking control of open tabs
    event.waitUntil(clients.claim());
    console.log('Service Worker activated and claiming clients.');
});