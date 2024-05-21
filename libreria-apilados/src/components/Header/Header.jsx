import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Buscas un libro? Tenemos miles.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Descubre el rincón perfecto para los amantes de la lectura! 
            </p>
          <p className="header-text fs-18 fw-3">
            En Librería Apilados, no solo encontrarás una vasta selección de
            títulos, sino también un espacio donde cada historia cobra vida.
            Desde aventuras épicas hasta los misterios más intrigantes, nuestra
            colección está cuidadosamente curada para inspirar, educar y
            entretener. ¿Listo para sumergirte en tu próxima gran lectura?
            Visítanos y déjate llevar por el encanto de las páginas que esperan
            ser descubiertas.
          </p>
          <SearchForm /> 
        </div>
      </header>
    </div>
  );
};

export default Header;
