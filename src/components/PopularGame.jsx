import React from "react";

const PopularGame = ({ genere, id, image, name, rating }) => {
  return (
    <div className="popular__game">
      <div className="popular__game-info">
        <img className="popular__game-img" src={image} alt="${juego.slug}" />
        <div className="popular__game-desc">
          <h4>{name}</h4>
          <p>{genere.name}</p>
          <p>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularGame;
