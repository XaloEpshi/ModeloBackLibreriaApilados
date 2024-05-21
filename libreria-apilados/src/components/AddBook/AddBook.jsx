// Importamos las dependencias necesarias de React y otras librerías
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conexion from "../../common/conexion";
import "./AddBook.css";
import { Link } from "react-router-dom";

// Definimos el componente funcional 'AddBook'
const AddBook = () => {
  // Utilizamos el hook useState para manejar el estado del formulario
  const [formData, setFormData] = useState({
    ISBN: "",
    nombreLibro: "",
    autor: "",
    editorial: "",
    portada: null,
    paginas: "",
  });
  
  // Estado para manejar errores
  const [error, setError] = useState("");
  
  // Hook useNavigate para redirigir al usuario a otra ruta
  const navigate = useNavigate();

  // Manejador para actualizar el estado cuando cambian los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejador para actualizar el estado cuando cambia el campo de la imagen
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      portada: e.target.files[0],
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creamos un objeto FormData para enviar los datos del formulario, incluyendo el archivo de imagen
    const formDataWithImage = new FormData();
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    try {
      // Hacemos una solicitud POST a la API para agregar el libro
      const response = await fetch(`${conexion.urlApi}/libro`, {
        method: "POST",
        body: formDataWithImage,
      });

      // Parseamos la respuesta a JSON
      const result = await response.json();

      // Si la respuesta es exitosa, redirigimos al usuario a la página de inicio
      if (response.ok) {
        navigate("/");
      } else {
        // Si hay un error, actualizamos el estado de error
        setError(result.message || "Ocurrió un error al agregar el libro");
      }
    } catch (err) {
      // Manejo de errores de conexión
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="container">
      <div className="add-book-form">
        <h2>Agregar Nuevo Libro</h2>
        {/* Mostrar mensaje de error si existe */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        {/* Formulario para agregar un nuevo libro */}
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
            {/* Enlace para volver a la página de inicio */}
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
