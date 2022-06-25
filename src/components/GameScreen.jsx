import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

import moment from "moment";
import Button from "./Button";

const GameScreen = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  const peticion = async () => {
    const soli = await fetch(
      `https://api.rawg.io/api/games/${id}?key=48add53f7d224aae88ebe6826f55af90`
    );
    const resp = await soli.json();
    return await resp;
  };

  useEffect(() => {
    peticion().then((res) => setGame({ ...res }));
  }, [id]);

  const date = moment(game.released).format("MMM D, YYYY").toUpperCase();

  const platforms = [
    {
      name: "xbox",
      icon: <i className="fa-brands fa-xbox"></i>,
    },
    {
      name: "playstation",
      icon: <i className="fa-brands fa-playstation"></i>,
    },
    {
      name: "pc",
      icon: <i className="fa-solid fa-laptop"></i>,
    },
  ];

  const images = [game.background_image, game.background_image_additional];

  return (
    <>
      <Navbar />
      <div className="container-min">
        <section className="game__info-container">
          <div className="game__info">
            <div>
              <h3>{game.name}</h3>
              <div className="game__platforms">
                <p>{date}</p>
                <div>
                  {platforms.map((platform) => (
                    <span key={platform.name}>{platform.icon}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4>About</h4>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: game?.description }}
              ></div>
            </div>
            <div>
              <p className="price mb-25px">
                $ <span>Gratis</span>
              </p>
              <Button style={{ width: "100%" }}>
                Agregar al carrito <i className="fa-solid fa-cart-shopping"></i>
              </Button>
            </div>
          </div>
          <div className="image__container">
            {images.map((image, i) => (
              <img src={image} alt={`image ${i + 1}`} key={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GameScreen;
