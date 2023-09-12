import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar";
import Title from "../Title/Title"
import Radio from '../Radio/Radio';
import LateralCard from '../LateralCard/LateralCard';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

export default function Ranking() {
	const [animes, setAnimes] = useState([]);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		fetchAnimes();
	}, [page, filter])

	const fetchAnimes = async () => {
		const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}&limit=15&page=${page}`);
		const animeRecs = await response.json();
		setAnimes(page === 1 ? animeRecs.data : current => [...current , ...animeRecs.data]);
	}


	return (<div>
		<Navbar />
		<div className="container mt-5 ml-5 d-flex justify-content-between">
			<Title text="RANKING" className={'text-uppercase text-left'}></Title>
			<Radio onChange={(event) => {setFilter(event.target.value); setPage(1)}}></Radio>
		</div>
		<div className='container align-items-center mt-5'>
			<div className="container align-items-center"> {
				animes && animes.map(
					anime => {
						return (
							<LateralCard key={anime.mal_id} title={anime.title} imageUrl={anime.images.jpg.large_image_url} rank={anime.rank} animeId={anime.mal_id}></LateralCard>
						)
					}
				)
			}
			<Button text="Load more" onClick={() => setPage(page + 1)} />
			</div>
		</div>
		<div>
			<Footer className='text-center text-white mt-5' background='#f1f1f1'></Footer>
		</div>
	</div>);
}