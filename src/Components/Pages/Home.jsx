import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TopAnimes from "../TopAnimes/TopAnimes";
import PreviewCard from "../PreviewCard/PreviewCard";
import { useEffect, useState } from 'react';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';


const Home = () => {
	const [animeRecs, setAnimeRecs] = useState([]);

	useEffect(() => {
		getRecs();
	}, [])

	const getRecs = async () => {

		const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=3`);
		const animeRecs = await response.json();
		setAnimeRecs(animeRecs.data);
		console.log(animeRecs.data)
	}

	const cardArray = new Array(3);

  return (
  <div>
  <Navbar/>
  <div className="mt-5">
    <Title text={"TOP CURRENT ANIMES"} className={'text-uppercase text-center'}></Title>
  </div>
  <div className='container align-items-center mt-5'>
  <div className="container align-items-center">
  <TopAnimes cards={cardArray}></TopAnimes>      
  </div> 
  </div>
  <div>
  <Footer className='text-center text-white mt-5' background='#f1f1f1'></Footer>
  </div>
  </div>
  
  )
}

	console.log(cardArray);

	return (
		<>
			<div className="mt-5">
				<Title text={"TOP CURRENT ANIMES"} className={'text-uppercase text-center'} />
			</div>
			<div className='container align-items-center mt-5'>
				<div className="container align-items-center">
					<TopAnimes cards={cardArray} />
				</div>
			</div>
		</>
	)
}


export default Home;