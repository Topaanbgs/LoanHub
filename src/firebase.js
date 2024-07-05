import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxjmYnkkI1JRWHJWV_F8g8fi0QixZBxMM",
  authDomain: "loanhub-e961b.firebaseapp.com",
  projectId: "loanhub-e961b",
  storageBucket: "loanhub-e961b.appspot.com",
  messagingSenderId: "545058752660",
  appId: "1:545058752660:web:1abafd02b8ddd9e3d24c81",
  measurementId: "G-52MYGFH59Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
