// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloudfilemanager-27561.firebaseapp.com",
  projectId: "cloudfilemanager-27561",
  storageBucket: "cloudfilemanager-27561.appspot.com",
  messagingSenderId: "508511524748",
  appId: "1:508511524748:web:421e9e96addd29e15428a9",
  measurementId: "G-8M8CSY1BZK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
