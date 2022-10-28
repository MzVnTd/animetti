import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar";
import Title from "../Title/Title"
import Radio from '../Radio/Radio';
import LateralCard from '../LateralCard/LateralCard';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

export default function Ranking() {

	/*    */

	const [animes, setAnimes] = useState([]);

	useEffect(() => {
		fetchAnimes();
	}, [])

	const fetchAnimes = async (selectedFilter) => {
		console.log(this)
		const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${selectedFilter}&limit=15`);
		const animeRecs = await response.json();
		setAnimes(animeRecs.data);
	}


	return (<div>
		<Navbar />
		<div className="container mt-5 ml-5 d-flex justify-content-between">
			<Title text="RANKING" className={'text-uppercase text-left'}></Title>
			<Radio onChange={(event) => fetchAnimes(event.target.value)}></Radio>
		</div>
		<div className='container align-items-center mt-5'>
			<div className="container align-items-center"> {
				animes && animes.map(
					anime => {
						return (
							<LateralCard key={anime.mal_id} title={anime.title} imageUrl={anime.images.jpg.large_image_url} rank={anime.rank} ratings={anime.score} animeId={anime.mal_id}></LateralCard>
						)
					}
				)
			}
			</div>
		</div>
		<div>
			<Footer className='text-center text-white mt-5' background='#f1f1f1'></Footer>
		</div>
	</div>);
}