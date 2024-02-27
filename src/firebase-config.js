import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCGuF04QxxqN1TLFfggjkqtZMwCB3EXHw",
  authDomain: "just-blog-f401c.firebaseapp.com",
  projectId: "just-blog-f401c",
  storageBucket: "just-blog-f401c.appspot.com",
  messagingSenderId: "534134783116",
  appId: "1:534134783116:web:8557db22de8f0875e04fa9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
