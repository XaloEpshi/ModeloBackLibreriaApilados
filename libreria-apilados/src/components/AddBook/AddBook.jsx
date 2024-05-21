import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conexion from "../../common/conexion";
import "./AddBook.css";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    ISBN: "",
    nombreLibro: "",
    autor: "",
    editorial: "",
    portada: null,
    paginas: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      portada: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();

    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${conexion.urlApi}/libro`, {
        method: "POST",
        body: formDataWithImage,
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        setError(result.message || "Ocurrió un error al agregar el libro");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="container">
      <div className="add-book-form">
        <h2>Agregar Nuevo Libro</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label>ISBN:</label>
            <input
              type="text"
              name="ISBN"
              value={formData.ISBN}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Nombre del Libro:</label>
            <input
              type="text"
              name="nombreLibro"
              value={formData.nombreLibro}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Autor:</label>
            <input
              type="text"
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Editorial:</label>
            <input
              type="text"
              name="editorial"
              value={formData.editorial}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Portada:</label>
            <input type="file" name="portada" onChange={handleImageChange} />
          </div>
          <br />
          <div>
            <label>Páginas:</label>
            <input
              type="number"
              name="paginas"
              value={formData.paginas}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Agregar Libro</button>
          <div>
            <br />
            <br />
            <Link to="/" className="back-button">
              Volver a la página de inicio
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
