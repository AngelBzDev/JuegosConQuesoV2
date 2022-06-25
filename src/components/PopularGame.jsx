import { useNavigate } from "react-router-dom";

const PopularGame = ({ genere, id, image, name, rating }) => {
  const navigate = useNavigate();

  const ratings = Math.round(rating);

  const start = [];
  for (let i = 0; i < ratings; i++) {
    start.push(<i className="fa-solid fa-star icon" key={i}></i>);
  }

  const NavigateToGame = () => {
    navigate(`/games/${id}`);
  };

  return (
    <div className="popular__game" onClick={NavigateToGame}>
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
