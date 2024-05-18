Hospital El Alerce - README

¡Bienvenido al proyecto Libreria Apilados!

Este proyecto es el Backend incial para un proyecto CURD para una libreria, esto es un trabajo de universidad

## Configuración del Proyecto

**Instalar Dependencias:** 
Una vez clonado el repositorio, accede al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
npm install

## Ejecución del Servidor

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:
nmp start



El servidor se ejecutará en `http://localhost:3000`.

## Uso de la API

La API RESTful proporciona las siguientes rutas:

// Rutas para el manejo de libros

//Agregar Un Libro (funcionando)
router.post('/libro', upload, libroController.nuevoLibro); // Ruta para crear un nuevo libro, incluyendo la carga de la portada

//Actualizar Un Libro
router.put('/libro/:ISBN', libroController.actualizarLibro); // Ruta para actualizar un libro por su ISBN

//Eliminar un Libro
router.delete('/libro/:ISBN', libroController.eliminarLibro); // Ruta para eliminar un libro por su ISBN

//Listar los Ulitmos 3 Libros (Funcionando)
router.get('/libros', libroController.obtenerUltimosLibros); // Ruta para obtener los utlimos 3 libros

//Listar Todos los libros de la base de datos(Funcionando)
router.get('/todosLibros', libroController.obtenerTodosLosLibros);//Ruta para listar todos los libros encontrados en la base de datos.

//Buscar Libro (Funcionando)
router.get('/libro/buscar/:busqueda', libroController.buscarLibros); // Ruta para buscar libros por criterio de búsqueda

module.exports = router; // Exporta el router para ser utilizado por la aplicación


Para utilizar estas rutas, realiza solicitudes HTTP a la URL base de la API (por ejemplo, `http://localhost:3000/api/pacientes`) utilizando un cliente REST como Postman.

## Contribución

¡Siéntete libre de contribuir al proyecto! Abre una solicitud de extracción con tus mejoras o correcciones de errores.


