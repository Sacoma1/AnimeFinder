import React, { useState } from "react";
import { SiKatana } from "react-icons/si";
import "./input.css";
import { useFetchAnime } from "./../../useFetchaAnime";
import { MdFavoriteBorder } from "react-icons/md";
import { Card } from "../Card/Card";


const Input = () => {
  const [input, setInput] = useState("");
  // const [animeName, setAnimeName] = useState("");
  const anime = useFetchAnime(`https://api.jikan.moe/v4/anime?q=${input}`);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setAnimeName(input);
    setInput("");
  };

  const animeData = anime.map((a) => {
    return (
      <>
        <section className="card">
          <div className="image-container">
            <a href="">
              <img src={a.images.jpg.image_url} alt={a.title} />
            </a>
          </div>
          <h1>
            {a.title} <MdFavoriteBorder />
          </h1>
        </section>
      </>
    );
  });

  const render = input.length > 0 ? animeData : <Card />;

  return (
    <>
      <section className="input-field">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find your next adventure"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit">
            <SiKatana />
          </button>
          <div className="content"></div>
        </form>
      </section>
      {render}
    </>
  );
};

export default Input;
