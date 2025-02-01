// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoeHF5Pc4z1DTaxKIXg9fSF3Hy9LBm6w",
  authDomain: "sparelink-dbb49.firebaseapp.com",
  projectId: "sparelink-dbb49",
  storageBucket: "sparelink-dbb49.firebasestorage.app",
  messagingSenderId: "193336426064",
  appId: "1:193336426064:web:378c8a7835d15dfe429b55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth()
