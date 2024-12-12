// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXvmXUUFFgWlcddr7UjNb9WsWUFZynRZo",
  authDomain: "royale-play-casino.firebaseapp.com",
  projectId: "royale-play-casino",
  storageBucket: "royale-play-casino.firebasestorage.app",
  messagingSenderId: "511101362061",
  appId: "1:511101362061:web:0075c2c6f76d9cc98ce7c4",
  measurementId: "G-TC7Z7CDT2G"

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
