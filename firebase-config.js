// Firebase configuration for real-time messaging
const firebaseConfig = {
    apiKey: "AIzaSyB1NxdTZWlwQAPByNWVsg4tMNRfS5jxclM",
    authDomain: "schoolhakz-messaging.firebaseapp.com",
    projectId: "schoolhakz-messaging",
    storageBucket: "schoolhakz-messaging.firebasestorage.app",
    messagingSenderId: "452896408397",
    appId: "1:452896408397:web:724aa5a7fc3b504de92d04"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore for database
const db = firebase.firestore();

// Initialize Realtime Database for instant messaging
const realtimeDb = firebase.database();

// Initialize Cloud Storage
const storage = firebase.storage();

// Export for use in other files
window.db = db;
window.realtimeDb = realtimeDb;
window.storage = storage; 