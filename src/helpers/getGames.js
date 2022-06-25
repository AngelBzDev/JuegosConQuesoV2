const getGames = async (size) => {
  const url = `https://api.rawg.io/api/games?key=48add53f7d224aae88ebe6826f55af90&page_size=${size}`;

  const respuesta = await fetch(url);
  const { results } = await respuesta.json();

  const games = results.map((game) => ({
    id: game.id,
    image: game.background_image,
    name: game.name,
    genere: game.genres[0],
    rating: game.rating,
  }));

  return games;
};

export default getGames;
