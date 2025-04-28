import React from "react";
import "./Header.css";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import Input from "../Input/Input";

export const Header = () => {
  return (
    <>
      <nav className="nav-items">
        <div>
          <button>
            <FaLightbulb />
          </button>
          <a href="">Top 10</a>
          <a href="">favorites</a>
        </div>
      </nav>
      <div className="title">
        <h1>AnimeHunter</h1>
      </div>
      <Input />
    </>
  );
};
