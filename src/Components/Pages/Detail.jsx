import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AnimeDetail from "../AnimeDetail/AnimeDetail";


const Detail = () => {
	const {id} = useParams();

	const [animeDetail, setAnimeDetail] = useState(null);

	useEffect(() => {
		getAnimeDetail(id)
	}, [id]);

	const getAnimeDetail = async (id) => {

		const response = await fetch(`https://api.jikan.moe/v4/anime/`+id+`/full`);
        const animeDetail = await response.json();
        setAnimeDetail(animeDetail.data);
	}

	return (
		<AnimeDetail details={animeDetail}/>
	)
}

export default Detail;