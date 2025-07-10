import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG4d77Lqjm_yEpak6W1w_adjuawwlOZhQ",
  authDomain: "avril-b6c4c.firebaseapp.com",
  projectId: "avril-b6c4c",
  storageBucket: "avril-b6c4c.appspot.com",
  messagingSenderId: "119702755561",
  appId: "1:119702755561:web:637eaa4730618468cef878",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
