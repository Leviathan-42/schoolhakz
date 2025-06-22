# Firebase Setup for Real-Time Messaging

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name it: `schoolhakz-messaging`
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Add Web App
1. Click the web icon (</>) 
2. Register app with name: `schoolhakz-messaging`
3. Copy the config object

### Step 3: Update Configuration
1. Open `firebase-config.js`
2. Replace the placeholder config with your real config:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### Step 4: Enable Services
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to you

5. Go to "Realtime Database"
6. Click "Create database"
7. Choose "Start in test mode"
8. Select a location close to you

### Step 5: Update Security Rules

**Firestore Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // For development only
    }
  }
}
```

**Realtime Database Rules:**
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## ✅ What This Gives You

- **Real-time messaging**: Messages appear instantly
- **Persistent storage**: Messages never disappear
- **Multi-user support**: Multiple people can chat
- **Friend system**: Real friend code validation and profile pictures
- **Server creation**: Persistent custom servers

## 🔧 Troubleshooting

If you see errors in the console:
1. Check that Firebase config is correct
2. Ensure Firestore, Realtime Database, and Storage are enabled
3. Verify security rules for all three services allow read/write
4. Check browser console for specific error messages

## 🚀 Ready to Use!

Once setup is complete:
1. Open `messaging.html` in your browser
2. Create a profile
3. Start messaging - messages will persist forever!
4. Share friend codes with others
5. Create custom servers

The system will automatically fall back to localStorage if Firebase isn't configured, so it will still work for testing. 