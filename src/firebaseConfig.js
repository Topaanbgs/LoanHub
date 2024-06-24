// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // Tambahkan ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxjmYnkkI1JRWHJWV_F8g8fi0QixZBxMM",
  authDomain: "loanhub-e961b.firebaseapp.com",
  projectId: "loanhub-e961b",
  storageBucket: "loanhub-e961b.appspot.com",
  messagingSenderId: "545058752660",
  appId: "1:545058752660:web:1abafd02b8ddd9e3d24c81",
  measurementId: "G-52MYGFH59Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Inisialisasi Firestore

export { db };  // Ekspor instance Firestore
