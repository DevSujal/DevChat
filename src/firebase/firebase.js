// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
  projectId: String(import.meta.env.VITE_FIREBASE_PROJECTID),
  storageBucket: String(import.meta.env.VITE_FIREBASE_BUCKETID),
  messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID),
  appId: String(import.meta.env.VITE_FIREBASE_APPID)
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)