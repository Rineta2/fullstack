// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdOQaP8JidK3QP-pRk0Pa6VclIvadTu8A",
  authDomain: "login-8eb3c.firebaseapp.com",
  projectId: "login-8eb3c",
  storageBucket: "login-8eb3c.appspot.com",
  messagingSenderId: "675777127532",
  appId: "1:675777127532:web:861cafdb933b2d08032449",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
