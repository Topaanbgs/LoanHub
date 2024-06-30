// src/services/item.js
import { firestore } from './firebase';
import { collection, query, where, getDocs, doc, getDoc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";

export const getItems = async () => {
  const q = query(collection(firestore, 'items'), where('available', '==', true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getItemById = async (id) => {
  const docRef = doc(firestore, 'items', id);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
};

export const borrowItem = async (itemId, userId) => {
  const itemRef = doc(firestore, 'items', itemId);
  await updateDoc(itemRef, { available: false });
  await addDoc(collection(firestore, 'loans'), {
    itemId: itemId,
    userId: userId,
    borrowDate: serverTimestamp(),
  });
};
