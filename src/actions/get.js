import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUlauRo90L6jYlG0c8jZXS0gqiZGKXggg",
    authDomain: "animetti-1e19b.firebaseapp.com",
    projectId: "animetti-1e19b",
    storageBucket: "animetti-1e19b.appspot.com",
    messagingSenderId: "21509526407",
    appId: "1:21509526407:web:8eff1acd2fcf3a31783922"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getRatings(db, id) {
    const docRef = doc(db, "show", id);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data();
    }

}