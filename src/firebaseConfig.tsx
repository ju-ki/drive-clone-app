// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZHpb1GXZ2HiWTs6uu-yKnZKVJRUQp35Q",
  authDomain: "firedrive-clone.firebaseapp.com",
  projectId: "firedrive-clone",
  storageBucket: "firedrive-clone.appspot.com",
  messagingSenderId: "779333914314",
  appId: "1:779333914314:web:ff6cb361ff2b8fac7fee33",
  measurementId: "G-WZ3FXCX9FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);