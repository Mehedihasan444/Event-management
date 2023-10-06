
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCfABDdVUFiQvcpH8eVq1Qzilm8UuTBUw",
  authDomain: "event-management-45623.firebaseapp.com",
  projectId: "event-management-45623",
  storageBucket: "event-management-45623.appspot.com",
  messagingSenderId: "725348009865",
  appId: "1:725348009865:web:90f096009f24f5c0854358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);