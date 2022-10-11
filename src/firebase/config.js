import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJL5u_w8K-oeryaXUhMff0si3nQrw02V8",
  authDomain: "chat-7bd50.firebaseapp.com",
  projectId: "chat-7bd50",
  storageBucket: "chat-7bd50.appspot.com",
  messagingSenderId: "166029180632",
  appId: "1:166029180632:web:3d2b9c2a8ac07d043ce1ad",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
