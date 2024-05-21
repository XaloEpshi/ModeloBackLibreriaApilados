import React, { useEffect, useState } from 'react';
import './BookList.css';
import { Link } from 'react-router-dom';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/todosLibros');
        const result = await response.json();
        if (response.ok) {
          setBooks(result.libros);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError('Error al obtener los libros');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="books-list">
      <h2 className="title">Nuestro catálogo completo</h2>
      <ul className="books-container">
        {books.map((book) => (
          <li key={book.ISBN} className="book-card">
            <h3>{book.nombreLibro}</h3>
            <p><strong>Autor:</strong> {book.autor}</p>
            <p><strong>Editorial:</strong> {book.editorial}</p>
            <p><strong>Páginas:</strong> {book.paginas}</p>
            {book.portada && (
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
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default BooksList;
