import React from "react";

const PopularGame = ({ genere, id, image, name, rating }) => {
  const ratings = Math.round(rating);

  const start = [];
  for (let i = 0; i < ratings; i++) {
    start.push(<i className="fa-solid fa-star" key={i}></i>);
  }

  return (
    <div className="popular__game">
      <div className="popular__game-info">
        <img className="popular__game-img" src={image} alt={name} />
        <div className="popular__game-desc">
          <h4>{name}</h4>
          <p>{genere.name}</p>
          <p>{start}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularGame;
