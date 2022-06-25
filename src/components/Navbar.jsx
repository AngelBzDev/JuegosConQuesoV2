import React, { useState } from "react";
import {Link} from 'react-router-dom'
import logo from "../assets/logo.png";
import Input from "./Input";
import Login from "./Login";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="navbar">
      <Link to={'/'} className="navbar__logo">
        <img src={logo} className="logo" alt="logo" />
        <p className="navbar__logo--title">Juegos con Queso🧀</p>
      </Link>
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
          <Input placeholder="Busca el 🧀Juego !" name="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Input>
        </div>
        <div className="info_user">
          <div className="info__user--login">
            <div>
              <button className="btn" id="iniciar" onClick={handleShowLogin}>
                <i className="fa-solid fa-user-ninja"></i>
              </button>
              {showLogin && <Login />}
            </div>
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
