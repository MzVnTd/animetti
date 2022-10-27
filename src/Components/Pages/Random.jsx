import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Navbar from "../NavBar";
import Title from "../Title/Title";
import Button from "../Button/Button";
import FullWidthCard from "../FullWidthCard/FullWidthCard";
import Footer from "../Footer/Footer";

const Random = () => {
  const [randAnime, setRandAnime] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/random/anime`);
    const anime = await response.json();
    setRandAnime(anime.data);
    console.log(anime.data);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 ml-5 d-flex justify-content-between">
        <Title text="GET A RANDOM ANIME" className={"text-uppercase"}></Title>
        <Button text="ANOTHER ONE" onClick={getRandom}></Button>
      </div>
      <div className="container d-flex justify-content-center mt-5">
            <FullWidthCard
              title={randAnime.title}
              imageUrl={
                randAnime.images === undefined
                  ? ""
                  : randAnime.images.jpg.large_image_url
              }
              genre=""
              rating={randAnime.score}
              sypnosys={randAnime.synopsis}
              status={randAnime.status}
              link={
                randAnime.trailer === undefined ? "" : randAnime.trailer.url
              }
            />
          </div>
          <div>
        <Footer className='text-center text-white mt-5' background='#f1f1f1'></Footer>
        </div>
        </div>
  );
};

export default Random;
