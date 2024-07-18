// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCypYlb4eMHDTdSDtewTHtrRsrXyvd-fZ8",
  authDomain: "zakaat-calculator.firebaseapp.com",
  projectId: "zakaat-calculator",
  storageBucket: "zakaat-calculator.appspot.com",
  messagingSenderId: "128085654866",
  appId: "1:128085654866:web:181428a734323419db8e8b",
  measurementId: "G-DNZH5D27PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
