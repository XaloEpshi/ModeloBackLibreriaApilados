import React from "react";
import Navbar from "../Navbar/Navbar"; // Importa el componente Navbar
import SearchForm from "../SearchForm/SearchForm"; // Importa el componente SearchForm
import "./Header.css"; // Importa el archivo CSS para estilos específicos del encabezado

const Header = () => {
  return (
    <div>
      {/* Define el encabezado */}
      <header>
        {/* Renderiza el componente Navbar */}
        <Navbar />
        {/* Contenido del encabezado */}
        <div className="header-content flex flex-c text-center text-white">
          {/* Espacio en blanco para ajustar el diseño */}
          <br />
          <br />
          <br />
          {/* Título del encabezado */}
          <h2>Buscas un libro? Tenemos miles.</h2>
          {/* Mensaje introductorio */}
          <br />
          <p>Descubre el rincón perfecto para los amantes de la lectura!</p>
          <p>
            En Librería Apilados, no solo encontrarás una vasta selección de
            títulos, sino también un espacio donde cada historia cobra vida.
          </p>
          <p>
            Desde aventuras épicas hasta los misterios más intrigantes, nuestra
            colección está cuidadosamente curada para inspirar, educar y
            entretener.
          </p>
          <p>
            ¿Listo para sumergirte en tu próxima gran lectura? Visítanos y
            déjate llevar por el encanto de las páginas que esperan ser
            descubiertas.
          </p>
          {/* Renderiza el componente SearchForm */}
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
