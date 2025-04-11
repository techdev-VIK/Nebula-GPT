// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFRs-8FOJmsQz94ATG740ljnH1j50CLo",
  authDomain: "nebulagpt-f5c18.firebaseapp.com",
  projectId: "nebulagpt-f5c18",
  storageBucket: "nebulagpt-f5c18.firebasestorage.app",
  messagingSenderId: "1054650958049",
  appId: "1:1054650958049:web:80b0e779447027c827b7a0",
  measurementId: "G-JBRLHJMJTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);