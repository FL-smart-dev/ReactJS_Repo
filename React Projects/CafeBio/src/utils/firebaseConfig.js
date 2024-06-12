import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
firebase.initializeApp(firebaseConfig);

export default firebase;