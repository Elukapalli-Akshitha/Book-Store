// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUeKy4PwSwI6SyvXFdtzmCwwvhCpEqAUs",
  authDomain: "book-store-bb7f6.firebaseapp.com",
  projectId: "book-store-bb7f6",
  storageBucket: "book-store-bb7f6.firebasestorage.app",
  messagingSenderId: "1089829735220",
  appId: "1:1089829735220:web:f453b49598b3db42d17361",
  measurementId: "G-D5YMSFKFCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;