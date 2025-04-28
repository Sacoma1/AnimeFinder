import React from "react";
import "./../../useFetchaAnime";
import "./Card.css";
import { useFetchAnime } from "./../../useFetchaAnime";
import { MdFavoriteBorder } from "react-icons/md";

export const Card = ({}) => {
  const anime = useFetchAnime("https://api.jikan.moe/v4/seasons/now");
  const AnimeList = anime.map((a) => {
    return (
      <>
        <section className="card">
          <div className="image-container">
            <a href="">
              <img src={a.images.jpg.image_url} alt={a.title} />
            </a>
          </div>
          <h1>
            {" "}
            {a.title} <MdFavoriteBorder />
          </h1>
        </section>
      </>
    );
  });

  return (
    <>
      <div className="content">{AnimeList}</div>
    </>
  );
};
