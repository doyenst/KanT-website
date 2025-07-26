// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFPfg_jvJjWQ1CfLIL0GZM5w1hubTxhBg",
  authDomain: "thekantapp.firebaseapp.com",
  projectId: "thekantapp",
  storageBucket: "thekantapp.firebasestorage.app",
  messagingSenderId: "804246425698",
  appId: "1:804246425698:web:2d2ce03f9bcff93ec0813b",
  measurementId: "G-1K78MX0FTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
