import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="logo" alt="logo" />
        <p className="navbar__logo--title">Juegos con Queso🧀</p>
      </div>
      <button
        className="btn"
        id="btn__menu"
        type="button"
        onClick={handleShowMenu}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`${showMenu ? "flex" : "hidden"} navbar__options`}>
        <div className="searchbar__container">
          <div className="searchbar">
            <input type="text" placeholder="Busca el 🧀Juego !" name="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="info_user">
          <div className="info__user--login">
            <button className="btn" id="iniciar">
              <i className="fa-solid fa-user-ninja"></i>
            </button>
            <p className="info__user--text" id="user-name">
              Inicia Sesión / Registrate
            </p>
          </div>
          <button className="btn" id="carrito">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
