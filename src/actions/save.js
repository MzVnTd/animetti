import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

function saveRating(db, id, value) {
    const showsCol = collection(db,'show')

}