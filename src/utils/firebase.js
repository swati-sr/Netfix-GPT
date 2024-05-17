// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAosoRgQfDentmjG7ivQ6OecZmUZUTXWdI",
  authDomain: "netflixgpt-fd2d0.firebaseapp.com",
  projectId: "netflixgpt-fd2d0",
  storageBucket: "netflixgpt-fd2d0.appspot.com",
  messagingSenderId: "120334096359",
  appId: "1:120334096359:web:bb1e7e4f3cb02ffe770f42",
  measurementId: "G-MV5RSJN3J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
