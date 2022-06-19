import useFetchGames from "../hooks/useFetchGames";
import NewGame from "./NewGame";

const NewGames = () => {
  const { data } = useFetchGames(4);
  console.log(data)
  return (
    <div className="new__games mt-3">
      <div className="new__games--info">
        <h4 className="sub__title new__games--title">Nuevos Juegos</h4>
        <p className="new__games--text">
          Pasa horas de maxima diversion con estos nuevos juegos
        </p>
      </div>
      <div className="new__games--cards">
        {data.map((game) => (
          <NewGame key={game.name} {...game} />
        ))}
      </div>
    </div>
  );
};

export default NewGames;
