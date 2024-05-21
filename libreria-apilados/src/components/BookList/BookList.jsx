// Importamos las dependencias necesarias de React y otras librerías
import React, { useEffect, useState } from 'react';
import './BookList.css'; // Importamos el archivo de estilos CSS
import { Link } from 'react-router-dom'; // Importamos el componente Link para la navegación

// Definimos el componente funcional 'BooksList'
const BooksList = () => {
  // Utilizamos el hook useState para manejar el estado de los libros, la carga y los errores
  const [books, setBooks] = useState([]); // Estado para almacenar la lista de libros
  const [loading, setLoading] = useState(true); // Estado para manejar el indicador de carga
  const [error, setError] = useState(''); // Estado para manejar los mensajes de error

  // Utilizamos el hook useEffect para obtener la lista de libros al montar el componente
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Realizamos una solicitud GET a la API para obtener todos los libros
        const response = await fetch('http://localhost:3000/api/todosLibros');
        const result = await response.json(); // Parseamos la respuesta a JSON
        if (response.ok) {
          setBooks(result.libros); // Si la respuesta es exitosa, actualizamos el estado de libros
        } else {
          setError(result.message); // Si hay un error en la respuesta, actualizamos el estado de error
        }
      } catch (err) {
        // Manejo de errores de conexión
        setError('Error al obtener los libros');
      } finally {
        // Desactivamos el indicador de carga
        setLoading(false);
      }
    };

    fetchBooks(); // Llamamos a la función para obtener los libros
  }, []); // El array vacío como segundo argumento asegura que el efecto se ejecute solo una vez al montar el componente

  // Si está cargando, mostramos un mensaje de carga
  if (loading) return <div>Cargando...</div>;
  // Si hay un error, mostramos el mensaje de error
  if (error) return <div>{error}</div>;

  return (
    <div className="books-list">
      <h2 className="title">Nuestro catálogo completo</h2>
      <ul className="books-container">
        {books.map((book) => (
          // Iteramos sobre la lista de libros y renderizamos un elemento <li> para cada libro
          <li key={book.ISBN} className="book-card">
            <h3>{book.nombreLibro}</h3>
            <p><strong>Autor:</strong> {book.autor}</p>
            <p><strong>Editorial:</strong> {book.editorial}</p>
            <p><strong>Páginas:</strong> {book.paginas}</p>
            {book.portada && (
              // Si el libro tiene una portada, mostramos la imagen de la portada
              <img
                src={`http://localhost:3000/uploads/${book.portada}`}
                alt={`Portada de ${book.nombreLibro}`}
                className="book-cover"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="back-to-home">
        {/* Enlace para volver a la página de inicio */}
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default BooksList;
