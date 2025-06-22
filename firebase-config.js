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

// Initialize Firebase services
const db = firebase.firestore();
const realtimeDb = firebase.database();
// const storage = firebase.storage(); // This service is not used

// Firebase Authentication (if you add it later)
// const auth = firebase.auth();

// Export for use in other files
// No need to export services if they are used in the same script tag context,
// but it's good practice if you split your JS into modules later. 