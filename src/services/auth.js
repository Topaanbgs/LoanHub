// src/services/auth.js
import { auth, firestore } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

export const register = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(firestore, 'users', user.uid), {
    email: user.email,
    name: name,
    createdAt: serverTimestamp(),
  });
  return user;
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
