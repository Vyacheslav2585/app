// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM9TArKpqor1Rbp0nnseyNtmA6WKRojTU",
  authDomain: "appp-1bee0.firebaseapp.com",
  projectId: "appp-1bee0",
  storageBucket: "appp-1bee0.appspot.com",
  messagingSenderId: "527768436766",
  appId: "1:527768436766:web:ee611c6515e5640366ae0f",
  measurementId: "G-Y302JJ61L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);