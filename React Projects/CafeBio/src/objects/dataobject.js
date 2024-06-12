// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set, update, get, off } from "firebase/database";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBBg1dITEEFHPF9vsX3NxF-YkLmbuvsQOc",
  authDomain: "cafebio-production.firebaseapp.com",
  databaseURL: "https://cafebio-production-default-rtdb.firebaseio.com",
  projectId: "cafebio-production",
  storageBucket: "cafebio-production.appspot.com",
  messagingSenderId: "630977158633",
  appId: "1:630977158633:web:4ff59c1634b0662b353f78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Updated to use getAuth for Firebase Auth
export const database = getDatabase(app);
 // For Firebase Realtime Database
const storage = getStorage(app);
export {storage} ;
// For Firebase Storage
export const dbset = set;
export const dbref = ref;
export const dbget = get;
export const dbupdate = update;
export const dbOnValue = onValue;
export const dbOffValue = off;
