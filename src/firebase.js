// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Pc_nRJAcFlAGPvnk57s4uN53RZljEgU",
  authDomain: "phone-auth-982ee.firebaseapp.com",
  projectId: "phone-auth-982ee",
  storageBucket: "phone-auth-982ee.appspot.com",
  messagingSenderId: "600582587313",
  appId: "1:600582587313:web:80d2b0d8bd810a39f93390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




