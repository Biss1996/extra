// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; // ✅ Required for analytics
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl0TQeBQ_uYem8OVAN-XTW1_DpuoqqnfA",
  authDomain: "inuachapaa-550600.firebaseapp.com",
  projectId: "inuachapaa-550600",
 storageBucket: "inuachapaa-550600.appspot.com",
  messagingSenderId: "845277323383",
  appId: "1:845277323383:web:7d330106c6b29c189b2672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optional: Initialize analytics (only in browser environments)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

