import React, { useState } from 'react'; // Importa React y useState desde React
import { useLocation, useNavigate } from 'react-router-dom'; // Importa hooks de React Router
import "./updateBook.css"; // Importa el archivo de estilos CSS

const UpdateBookForm = () => {
  const location = useLocation(); // Hook para acceder a la ubicación actual de la ruta
  const navigate = useNavigate(); // Hook para navegar programáticamente
  const { libro } = location.state || {}; // Obtiene el libro desde el estado de la ubicación (si existe)

  // Estado local para los datos del formulario
  const [formData, setFormData] = useState({
    nombreLibro: libro?.nombreLibro || '', // Inicializa el campo nombreLibro con el valor del libro (si existe)
    autor: libro?.autor || '', // Inicializa el campo autor con el valor del libro (si existe)
    editorial: libro?.editorial || '', // Inicializa el campo editorial con el valor del libro (si existe)
    paginas: libro?.paginas || '', // Inicializa el campo paginas con el valor del libro (si existe)
    portada: null, // Inicializa el campo portada como null
  });

  // Manejador de cambios para los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Actualiza el estado local con el nuevo valor del campo
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Manejador de cambios para el campo de archivo
  const handleFileChange = (e) => {
    setFormData({ ...formData, portada: e.target.files[0] }); // Actualiza el estado local con el archivo seleccionado
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la acción predeterminada del formulario (recargar la página)
    const form = new FormData();
    form.append('nombreLibro', formData.nombreLibro);
    form.append('autor', formData.autor);
    form.append('editorial', formData.editorial);
    form.append('paginas', formData.paginas);
    if (formData.portada) {
      form.append('portada', formData.portada); // Agrega el archivo de portada si se ha seleccionado uno
    }

    try {
      // Realiza una solicitud PUT para actualizar el libro
      const response = await fetch(`http://localhost:3000/api/actualizarLibro/${libro.ISBN}`, {
        method: 'PUT',
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Libro actualizado correctamente'); // Muestra una alerta de éxito
        navigate('/'); // Navega de vuelta a la página principal
      } else {
        alert(`Error: ${result.message}`); // Muestra una alerta de error con el mensaje del servidor
      }
    } catch (error) {
      alert('Error al actualizar el libro'); // Muestra una alerta de error genérica si hay un problema con la solicitud
    }
  };

  return (
    <div className="update-book-form">
      <h2>Actualizar Libro</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Portada</label>
          <input
            type="file"
            name="portada"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Actualizar Libro</button>
      </form>
      <button onClick={handleBackToHome}>Volver al Inicio</button>
    </div>
    
  );
};

export default UpdateBookForm;
