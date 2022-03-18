// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ONFOoJsJQhy2c7c6tibUvE3448BTJ28",
  authDomain: "css---car-sentry-system.firebaseapp.com",
  projectId: "css---car-sentry-system",
  storageBucket: "css---car-sentry-system.appspot.com",
  messagingSenderId: "235726709305",
  appId: "1:235726709305:web:52c66c7f37ce269b6e23e8",
  measurementId: "G-MC5WRY5BRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);