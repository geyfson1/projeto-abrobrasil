
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtZkmnFci7-8jAB3OZzvinmiNRt7J_OXc",
  authDomain: "geyfsonifal513.firebaseapp.com",
  projectId: "geyfsonifal513",
  storageBucket: "geyfsonifal513.appspot.com",
  messagingSenderId: "647771366014",
  appId: "1:647771366014:web:d5414093495c55d8d6ae2f"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }