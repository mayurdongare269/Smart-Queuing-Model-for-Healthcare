// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEIwIKAI_hktCfyC6teAFwUI15nNbGJN0",
  authDomain: "easy-med-2324.firebaseapp.com",
  projectId: "easy-med-2324",
  storageBucket: "easy-med-2324.firebasestorage.app",
  messagingSenderId: "956498554026",
  appId: "1:956498554026:web:c05106e938b1ad554b74d3",
  measurementId: "G-TK8Z9D8DPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const db = getFirestore(app);

import { getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app);

