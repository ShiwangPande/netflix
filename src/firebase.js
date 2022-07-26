import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC42xjnaDm2RXtasAJwHLy0nHA3CzB2qmA",
  authDomain: "netflix-clone-d0a12.firebaseapp.com",
  databaseURL:
    "https://netflix-clone-d0a12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-d0a12",
  storageBucket: "netflix-clone-d0a12.appspot.com",
  messagingSenderId: "710876610028",
  appId: "1:710876610028:web:a614b48bfd8c2f0122d4c9",
  measurementId: "G-E6S5MD9QEX",
};

const fireabseApp = firebase.initializeApp(firebaseConfig);
const db = fireabseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
