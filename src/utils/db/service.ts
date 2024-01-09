//Pertama buat dulu database di firebase dan setup di file firebase.ts
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './firebase';

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return data;
}