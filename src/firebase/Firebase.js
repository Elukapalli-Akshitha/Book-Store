// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOEdUYAfRA7ifXk9X9SJurjOzVHpgtnA",
  authDomain: "bookstore-b5d81.firebaseapp.com",
  projectId: "bookstore-b5d81",
  storageBucket: "bookstore-b5d81.appspot.com",
  messagingSenderId: "26480644410",
  appId: "1:26480644410:web:38dcbfe32f8b58f9318003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;