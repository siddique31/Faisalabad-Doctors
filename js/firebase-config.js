// js/firebase-config.js

// Gojra Doctors - Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBCwSZsTSj36ujatL0JIGidgodkxcJA0s",
  authDomain: "gojra-doctors.firebaseapp.com",
  projectId: "gojra-doctors",
  storageBucket: "gojra-doctors.firebasestorage.app",
  messagingSenderId: "161551428132",
  appId: "1:161551428132:web:32e7d805239e5648e246b1",
  measurementId: "G-XFNXPJ1ZGG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// Set Firestore settings
db.settings({
  timestampsInSnapshots: true
});

console.log("✅ Gojra Doctors - Firebase Connected Successfully!");
