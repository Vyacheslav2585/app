// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6Si6LkfmZTcKAFjD2DJ7vXj5SG2qE7E",
  authDomain: "auth-1344d.firebaseapp.com",
  projectId: "auth-1344d",
  storageBucket: "auth-1344d.appspot.com",
  messagingSenderId: "61611744309",
  appId: "1:61611744309:web:94df9ceac98daea0ee657c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);