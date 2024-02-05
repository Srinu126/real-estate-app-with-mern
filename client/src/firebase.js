// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e57fb.firebaseapp.com",
  projectId: "mern-estate-e57fb",
  storageBucket: "mern-estate-e57fb.appspot.com",
  messagingSenderId: "264674094267",
  appId: "1:264674094267:web:bfdd72a4f0b48161440d9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);