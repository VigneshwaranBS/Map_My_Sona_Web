import firebase from "firebase";
import "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApnHQIjBWzHbr2eWIZ4zm9mM7Oejq5vA4",
  authDomain: "map-my-sona.firebaseapp.com",
  databaseURL: "https://map-my-sona-default-rtdb.firebaseio.com",
  projectId: "map-my-sona",
  storageBucket: "map-my-sona.appspot.com",
  messagingSenderId: "854269454784",
  appId: "1:854269454784:web:9bc09a36b591fe6c29c025",
  measurementId: "G-DREPXB3P6W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize functions
const functions = firebaseApp.functions();
// Initialize Firestore
const db = firebaseApp.firestore();
//Initialize storage
const st = firebaseApp.storage().ref();
const stR = firebaseApp.storage();
// Authentication From Firebase
const auth = firebase.auth();

//Initialize Realtime database
const rdb = getDatabase();

export { db, st, stR, auth, functions, rdb };
