
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDtETlAsJmlhtoSLFJ-y5l3WmPTvb7bcGs",
  authDomain: "your-phone-de9d0.firebaseapp.com",
  projectId: "your-phone-de9d0",
  storageBucket: "your-phone-de9d0.appspot.com",
  messagingSenderId: "860612224072",
  appId: "1:860612224072:web:ca72bbcaf83b67a00ce47d",
  measurementId: "G-Q0LQ6J865R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
