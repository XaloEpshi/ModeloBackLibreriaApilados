import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "./Navbar.css"; // Importa el archivo CSS para estilos específicos de la barra de navegación
import logoImg from "../../images/LogoLA.png"; // Importa la imagen del logo
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Importa el icono del menú

const Navbar = () => {
  // Estado para controlar la visibilidad del menú
  const [toggleMenu, setToggleMenu] = useState(false);

  // Función para alternar la visibilidad del menú
  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  // Función para ocultar el menú después de hacer clic en un enlace
  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    // Barra de navegación
    <nav className="navbar" id="navbar">
      <div className="navbar-content">
        {/* Logotipo y botón de menú */}
        <div className="brand-and-toggler">
          {/* Enlace al inicio */}
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="site logo" /> {/* Imagen del logotipo */}
            <span className="text-uppercase fw-7 fs-24 ls-1">
              Libreria Apilados {/* Texto del logotipo */}
            </span>
          </Link>
          {/* Botón para alternar el menú en dispositivos móviles */}
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: toggleMenu ? "#fff" : "#010101" }} // Cambia el color del icono dependiendo del estado del menú
            />
          </button>
        </div>
        {/* Menú de navegación */}
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse" // Muestra el menú si toggleMenu es true
              : "navbar-collapse" // Oculta el menú si toggleMenu es false
          }
        >
          <ul className="navbar-nav">
            {/* Enlace a la página Acerca de */}
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick} // Oculta el menú después de hacer clic
              >
                Acerca de
              </Link>
            </li>
            {/* Enlace a la página Agregar Libro */}
            <li className="nav-item">
              <Link
                to="/agregar-libro"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick} // Oculta el menú después de hacer clic
              >
                Agregar Libro
              </Link>
            </li>
            {/* Enlace a la página Listar Todos */}
            <li className="nav-item">
              <Link
                to="/listar-todos"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                onClick={handleLinkClick} // Oculta el menú después de hacer clic
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
