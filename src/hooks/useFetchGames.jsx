import { useEffect, useState } from "react";
import getGames from "../helpers/getGames";

const useFetchGames = (size) => {
  const [games, setGames] = useState({
    data: [],
  });

  useEffect(() => {
    getGames(size).then((games) =>
      setGames({
        data: games,
      })
    );
  }, [size]);

  return games;
};

export default useFetchGames;
