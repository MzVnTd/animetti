import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AnimeDetail from "../AnimeDetail/AnimeDetail";
import Navbar from '../NavBar';
import Footer from '../Footer/Footer';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc,updateDoc, arrayUnion, setDoc, onSnapshot } from 'firebase/firestore';

const Detail = () => {

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
	const {id} = useParams();


	const [animeDetail, setAnimeDetail] = useState(null);

	useEffect(() => {
		getAnimeDetail(id)
	}, [id]);

	const getAnimeDetail = async (id) => {

		const response = await fetch(`https://api.jikan.moe/v4/anime/` + id + `/full`);
		const animeDetail = await response.json();
		setAnimeDetail(animeDetail.data);
	}

	const [rating, setRating] = useState(null);

	useEffect(() => {
		getRatings(db,id)
	}, [id]);


	const [scoredBy, setScoredBy] = useState(0);

	async function getRatings() {
			const docRef = onSnapshot(doc(db, "show", id), (doc) => {
				console.log("Current data: ", doc.data())
				const data = doc.data()
				const total = (data.ratings[0]*1 + data.ratings[1]*2 + data.ratings[2]*3 + data.ratings[3]*4 + data.ratings[4]*5);
				const sum = (data.ratings[0] + data.ratings[1] + data.ratings[2] + data.ratings[3] + data.ratings[4])
				const average = total / sum;
				console.log(average);
				setRating(average);
				setScoredBy(sum);
			})
		}


		const [userRating, setUserRating] = useState(null);

		async function createShow(id, newValue) {

			const docData = {
				ratings: [0, 0, 0, 0, 0]
			}
			if (newValue === 1) {docData.ratings[0]++}
			if (newValue === 2) {docData.ratings[1]++}
			if (newValue === 3) {docData.ratings[2]++}
			if (newValue === 4) {docData.ratings[3]++}
			if (newValue === 5) {docData.ratings[4]++}

			await setDoc(doc(db, "show", id), docData);
		}

		const handleRatingChange = async (newValue) => {
			setUserRating(newValue);
			const docRef = doc(db, "show", id);
			const docSnap = await getDoc(docRef)
			if (!docSnap.exists()) {
				createShow(id, newValue)
			}
			const data = docSnap.data()
			if (newValue === 1) {data.ratings[0]++}
			if (newValue === 2) {data.ratings[1]++}
			if (newValue === 3) {data.ratings[2]++}
			if (newValue === 4) {data.ratings[3]++}
			if (newValue === 5) {data.ratings[4]++}
			console.log(newValue)

			updateDoc(docRef, data)
				.then(console.log(data))


		};

		return (
			<>
				<Navbar/>
				<div className='container mt-5'>
					<AnimeDetail details={animeDetail} value={rating} onRatingChange={handleRatingChange} scoredBy ={scoredBy}/>
				</div>
				<Footer className='text-center text-white mt-5' background='#f1f1f1'/>
			</>
		)
}


export default Detail;