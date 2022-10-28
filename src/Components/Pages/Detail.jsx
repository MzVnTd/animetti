import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AnimeDetail from "../AnimeDetail/AnimeDetail";
import Navbar from '../NavBar';
import Footer from '../Footer/Footer';

const Detail = () => {
	const { id } = useParams();

	const [animeDetail, setAnimeDetail] = useState(null);

	useEffect(() => {
		getAnimeDetail(id)
	}, [id]);

	const getAnimeDetail = async (id) => {

		const response = await fetch(`https://api.jikan.moe/v4/anime/` + id + `/full`);
		const animeDetail = await response.json();
		setAnimeDetail(animeDetail.data);
	}

	return (
		<>
			<Navbar />
			<AnimeDetail details={animeDetail} />
			<Footer className='text-center text-white mt-5' background='#f1f1f1' />
		</>
	)
}

export default Detail;