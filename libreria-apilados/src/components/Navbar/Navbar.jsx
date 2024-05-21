import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/LogoLA.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setToggleMenu(false); // Oculta el menú después de hacer clic en un enlace
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content">
        <div className="brand-and-toggler">
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">
              Libreria Apilados
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: toggleMenu ? "#fff" : "#010101" }}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick}
              >
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/agregar-libro"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick}
              >
                Agregar Libro
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/listar-todos"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick}
              >
                Todos los libros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
