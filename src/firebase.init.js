// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC05CMty83zU8v_-9PTTDDUstnf8ajm-Zo",
  authDomain: "ema-john-simple-e92fd.firebaseapp.com",
  projectId: "ema-john-simple-e92fd",
  storageBucket: "ema-john-simple-e92fd.appspot.com",
  messagingSenderId: "341970781957",
  appId: "1:341970781957:web:b8c6b35ac5fab83048596c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;