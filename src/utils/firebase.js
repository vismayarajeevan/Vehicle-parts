// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIs1bUwSV0xvTYxPnYMrP8C0LMPr9VI2o",
  authDomain: "sparelinkweb.firebaseapp.com",
  projectId: "sparelinkweb",
  storageBucket: "sparelinkweb.firebasestorage.app",
  messagingSenderId: "119892762696",
  appId: "1:119892762696:web:4e407b47667887acca787d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth()
