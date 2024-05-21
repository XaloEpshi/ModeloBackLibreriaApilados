import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultCover from '../../images/cover_not_found.jpg'; // Asegúrate de tener esta imagen en tu proyecto
import "./featureBooks.css";

const FeaturedBooks = () => {
  // Estado para almacenar la lista de libros y el estado de carga
  const [libros, setLibros] = useState([]); // Inicialmente vacío
  const [loading, setLoading] = useState(true); // Inicialmente true (cargando)

  // Efecto para cargar los libros al montar el componente
  useEffect(() => {
    // Función asincrónica para realizar la solicitud HTTP
    const fetchLibros = async () => {
      try {
        // Obtener datos de la API
        const response = await axios.get('http://localhost:3000/api/libros');
        // Almacenar los libros en el estado y cambiar el estado de carga a false
        setLibros(response.data.libros);
        setLoading(false);
      } catch (error) {
        // Manejar errores de solicitud
        console.error('Error al obtener los libros:', error);
        setLoading(false);
      }
    };

    // Llamar a la función para cargar los libros
    fetchLibros();
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Renderizado condicional mientras se cargan los libros
  if (loading) {
    return <p>Cargando libros...</p>; // Se podria usar un componente de carga
  }

  // Renderizado de la lista de libros
  return (
    <div className='search-results'>
      <div className='container'>
        <h2 className="title-text">Libros Destacados</h2>
        {libros.length > 0 ? ( // Verificar si hay libros en la lista
          <div className="results-grid">
            {libros.map(libro => ( // Mapear sobre la lista de libros
              <div key={libro._id} className="result-item"> {/* Usar el ID del libro como clave */}
                <div className="book-cover">
                  <img src={libro.portada || defaultCover} alt={libro.nombreLibro} /> {/* Mostrar la portada del libro o la imagen predeterminada */}
                </div>
                <div className="book-details">
                  {/* Mostrar detalles del libro */}
                  <p><strong className="result-text">Nombre Libro :</strong> {libro.nombreLibro}</p>
                  <p><strong className="result-text">ISBN :</strong> {libro.ISBN}</p>
                  <p><strong className="result-text">Autor :</strong> {libro.autor}</p>
                  <p><strong className="result-text">Editorial :</strong> {libro.editorial}</p>
                  <p><strong className="result-text">Páginas :</strong> {libro.paginas}</p>
                  {/* Botones para acciones adicionales como actualizar o eliminar */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="noFound-text">No se encontraron libros.</p> // Mensaje si no hay libros en la lista
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
