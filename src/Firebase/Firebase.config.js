// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZrCM_ZIawCREIlQnL1OKQQQdlkKcUcT4",
  authDomain: "email-password-auth-3d124.firebaseapp.com",
  projectId: "email-password-auth-3d124",
  storageBucket: "email-password-auth-3d124.appspot.com",
  messagingSenderId: "960020199736",
  appId: "1:960020199736:web:6a14aa172ef79a17fd69cd",
  measurementId: "G-07EYRZEDDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;