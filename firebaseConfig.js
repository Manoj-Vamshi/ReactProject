// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAScqGXieqGcMB1faHFGr1SNKoALi1ZRZs",
  authDomain: "reactfinalproject-489c7.firebaseapp.com",
  projectId: "reactfinalproject-489c7",
  storageBucket: "reactfinalproject-489c7.appspot.com",
  messagingSenderId: "140953777808",
  appId: "1:140953777808:web:ad863c3a0f54dd1aba4a15",
  measurementId: "G-R1JMEKGCB4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { auth, db, analytics };
