// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmX4-lBeU5ve7fjduImuN7D3EYEl0bdoc",
  authDomain: "abcdown-c9f29.firebaseapp.com",
  projectId: "abcdown-c9f29",
  storageBucket: "abcdown-c9f29.appspot.com",
  messagingSenderId: "310697493560",
  appId: "1:310697493560:web:2ae7a82eb91521c562d2cd",
  measurementId: "G-SV0XT2EZ60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)