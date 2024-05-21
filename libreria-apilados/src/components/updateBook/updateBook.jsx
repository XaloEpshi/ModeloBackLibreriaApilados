import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import conexion from "../../common/conexion";
import "./updateBook.css"; // Asegúrate de tener los estilos adecuados para UpdateBook
import { Link } from "react-router-dom";

const UpdateBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { libro } = location.state || {}; // Asegúrate de pasar el objeto libro al componente cuando navegues a él

  const [formData, setFormData] = useState({
    ISBN: libro?.ISBN || '',
    nombreLibro: libro?.nombreLibro || '',
    autor: libro?.autor || '',
    editorial: libro?.editorial || '',
    paginas: libro?.paginas || '',
    portada: libro?.portada || null, // Si tienes un valor por defecto para la portada, puedes inicializarlo aquí
  });
  const [error, setError] = useState("");

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

    const formDataToUpdate = new FormData();

    for (const key in formData) {
      formDataToUpdate.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${conexion.urlApi}/actualizarLibro/${formData.ISBN}`, {
        method: "PUT",
        body: formDataToUpdate,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Libro actualizado correctamente');
        navigate("/");
      } else {
        setError(result.message || "Ocurrió un error al actualizar el libro");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="container">
      <div className="update-book-form">
        <h2>Actualizar Libro</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label>ISBN</label>
            <input
              type="text"
              name="ISBN"
              value={formData.ISBN}
              readOnly // Esto hace que el campo sea de solo lectura
            />
          </div>
          <div className="form-group">
            <label>Nombre del Libro</label>
            <input
              type="text"
              name="nombreLibro"
              value={formData.nombreLibro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Autor</label>
            <input
              type="text"
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Editorial</label>
            <input
              type="text"
              name="editorial"
              value={formData.editorial}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Páginas</label>
            <input
              type="number"
              name="paginas"
              value={formData.paginas}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Portada:</label>
            <input type="file" name="portada" onChange={handleImageChange} />
          </div>
          <button type="submit">Actualizar Libro</button>
          <div>
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

export default UpdateBook;
