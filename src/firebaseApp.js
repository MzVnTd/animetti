// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAUlauRo90L6jYlG0c8jZXS0gqiZGKXggg",
	authDomain: "animetti-1e19b.firebaseapp.com",
	projectId: "animetti-1e19b",
	storageBucket: "animetti-1e19b.appspot.com",
	messagingSenderId: "21509526407",
	appId: "1:21509526407:web:8eff1acd2fcf3a31783922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;