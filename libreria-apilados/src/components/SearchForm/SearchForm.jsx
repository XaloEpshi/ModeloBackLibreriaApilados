import React, { useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import conexion from "../../common/conexion";
import "./SearchForm.css";

const SearchForm = () => {
  const searchText = useRef('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim();
  
    if (!searchTerm) {
      setError('Por favor, ingresa un término de búsqueda.');
      return;
    }
  
    try {
      const response = await axios.get(`${conexion.urlApi}/libro/buscar/${searchTerm}`);
      navigate("/search-results", { state: { searchResults: response.data.libros } });
    } catch (error) {
      console.error('Error al buscar libros:', error);
      setError('Lo lamentamos pero no encontramos tu libro!.');
    }
  };
  

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Busca tu libro...' ref={searchText} />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='text-orange' size={32} />
              </button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
