import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-EmJ4vPdvp3OfEf3SSTXXsRjJyxWhRDE",
  authDomain: "telly-plus-test-2025.firebaseapp.com",
  projectId: "telly-plus-test-2025",
  storageBucket: "telly-plus-test-2025.firebasestorage.app",
  messagingSenderId: "127241611679",
  appId: "1:127241611679:web:68da8705867b502d56b5aa",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

