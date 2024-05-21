import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultCover from '../../images/cover_not_found.jpg'; // Asegúrate de tener esta imagen en tu proyecto
import "./featureBooks.css";

const FeaturedBooks = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        // Reemplaza 'http://localhost:3000/api' con la URL base de tu API
        const response = await axios.get('http://localhost:3000/api/libros');
        setLibros(response.data.libros);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los libros:', error);
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  if (loading) {
    return <p>Cargando libros...</p>; // O puedes usar un componente de carga
  }

  return (
    <div className='search-results'>
      <div className='container'>
        <h2 className="title-text">Libros Destacados</h2>
        {libros.length > 0 ? (
          <div className="results-grid">
            {libros.map(libro => (
              <div key={libro._id} className="result-item">
                <div className="book-cover">
                  <img src={libro.portada || defaultCover} alt={libro.nombreLibro} />
                </div>
                <div className="book-details">
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
          <p className="noFound-text">No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
