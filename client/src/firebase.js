// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-52113.firebaseapp.com",
  projectId: "mern-estate-52113",
  storageBucket: "mern-estate-52113.appspot.com",
  messagingSenderId: "936777841060",
  appId: "1:936777841060:web:0fa2b875c8cd66b54f2931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);