// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8nqXMcvRwkrXYOipzKvSUgV0FoDnkDuM",
  authDomain: "fir-practice-e3b3f.firebaseapp.com",
  projectId: "fir-practice-e3b3f",
  storageBucket: "fir-practice-e3b3f.firebasestorage.app",
  messagingSenderId: "48357748767",
  appId: "1:48357748767:web:46442ca9e026847806252a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();