import { useEffect, useState } from "react";
import getGameById from "../helpers/getGameById";

const useFetchGamesById = (id) => {
  const [games, setGames] = useState({
    data: [],
  });

  useEffect(() => {
    getGameById(id).then((games) =>
      setGames({
        data: games,
      })
    );
  }, [id]);

  return games;
};

export default useFetchGamesById;
