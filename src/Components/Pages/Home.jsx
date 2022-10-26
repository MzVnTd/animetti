import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar";
import TopAnimes from "../TopAnimes/TopAnimes";
import PreviewCard from "../PreviewCard/PreviewCard";
import { useEffect, useState } from 'react';
import Title from '../Title/Title';


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

      const cardArray= new Array(3);
      
      animeRecs.forEach(anime => {
        return(
            cardArray.push(<PreviewCard title={anime.title} imageUrl={anime.images.jpg.large_image_url} small={true} link={anime.trailer.url}></PreviewCard>)
        )
    }
    );

    console.log(cardArray);

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
  </div>
  
  )
}



export default Home;