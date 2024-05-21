import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./SearchForm.css";
import defaultCover from '../../images/cover_not_found.jpg';

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchResults } = location.state || [];

  const handleBackToHome = () => {
    navigate('/');
  };

  // Función para manejar la actualización de un libro
  const handleUpdateBook = (libro) => {
    navigate('/update-book', { state: { libro } });
  };

  // Función para manejar la eliminación de un libro
  const handleDeleteBook = async (isbn) => {
    try {
      const response = await fetch(`http://localhost:3000/api/eliminarLibro/${isbn}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (response.ok) {
        alert('Libro eliminado correctamente');
        navigate('/');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error al eliminar el libro');
    }
  };

  return (
    <div className='search-results'>
      <div className='container'>
        <h2 className="title-text">Resultados de la búsqueda</h2>
        <button onClick={handleBackToHome}>Volver al Inicio</button>
        {searchResults.length > 0 ? (
          <div className="results-grid">
            {searchResults.map(libro => (
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
                  {/* Botón para actualizar el libro */}
                  <button onClick={() => handleUpdateBook(libro)}>Actualizar</button>
                  {/* Botón para eliminar el libro */}
                  <button onClick={() => handleDeleteBook(libro.ISBN)}>Eliminar</button>
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

export default SearchResults;
