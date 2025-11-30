// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey : "AIzaSyAyWXKhCBFz5JGMzny5FxCj59vs3_JB_yM" , 
  authDomain : "ana-tienda.firebaseapp.com" , 
  projectId : "ana-tienda" , 
  storageBucket: "ana-tienda.firebasestorage.app",
  messagingSenderId: "605725960657",
  appId: "1:605725960657:web:5c06af379c5bd895b498f0",
  measurementId: "G-TTEDN7VE5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Servicios listos para usar
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);