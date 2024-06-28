// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoiumT7XPv8XqlHuHeVCGqsuMSSmBFEuY",
  authDomain: "users-d11a1.firebaseapp.com",
  projectId: "users-d11a1",
  storageBucket: "users-d11a1.appspot.com",
  messagingSenderId: "51828793138",
  appId: "1:51828793138:web:ee676041cb05291ed9c12b",
  measurementId: "G-3QV77765R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);