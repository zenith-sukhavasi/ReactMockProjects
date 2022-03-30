// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfQQYMbRYug0CzR9UyB4IMAV4Ni1JdGd4",
  authDomain: "auth-test-779b2.firebaseapp.com",
  projectId: "auth-test-779b2",
  storageBucket: "auth-test-779b2.appspot.com",
  messagingSenderId: "485161026829",
  appId: "1:485161026829:web:b53cb71f279b3c1a529c44",
  measurementId: "G-K3C6WZSG00"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app);
const analytics = getAnalytics(app);