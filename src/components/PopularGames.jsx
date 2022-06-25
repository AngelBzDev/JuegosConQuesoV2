import useFetchGames from "../hooks/useFetchGames";
import useSizeWindow from "../hooks/useSizeWindow";
import PopularGame from "./PopularGame";
import SubTitle from "./SubTitle";

const PopularGames = () => {
  const sizeWindow = useSizeWindow();
  const { data: games } = useFetchGames(150);

  return (
    <div>
      <SubTitle subtitle="juegos 🧀 mas populares" />
      <div className="popular__games mb-2">
        {sizeWindow > 768
          ? games.map((game) => <PopularGame key={game.id} {...game} />)
          : games
              .slice(0, 100)
              .map((game) => <PopularGame key={game.id} {...game} />)}
      </div>
    </div>
  );
};

export default PopularGames;
