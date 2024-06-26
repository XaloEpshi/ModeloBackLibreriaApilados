var express = require("express");
var libroController = require("../controllers/libroController"); // Importa el controlador de libros
var upload = require("../multer_config"); // Importa la configuración de multer para la carga de archivos
var router = express.Router(); // Crea un router de Express

// Ruta de prueba
router.get("/", (req, res) => {
  return res.send("Ruta de Prueba para libros");
}); // http://localhost:3000/api

// Rutas para el manejo de libros

//Agregar Un Libro (funcionando)
router.post("/libro", upload, libroController.nuevoLibro); // Ruta para crear un nuevo libro, incluyendo la carga de la portada

//Actualizar Un Libro
router.put("/actualizarLibro/:ISBN", upload, libroController.actualizarLibro); // Ruta para actualizar un libro por su ISBN, incluyendo la carga de la portada

//Eliminar un Libro
router.delete("/eliminarLibro/:ISBN", libroController.eliminarLibro); // Ruta para eliminar un libro por su ISBN

//Listar los Ulitmos 3 Libros (Funcionando)
router.get("/libros", libroController.obtenerUltimosLibros); // Ruta para obtener los utlimos 3 libros

//Listar Todos los libros de la base de datos(Funcionando)
router.get("/todosLibros", libroController.obtenerTodosLosLibros); //Ruta para listar todos los libros encontrados en la base de datos.

//Buscar Libro (Funcionando)
router.get("/libro/buscar/:busqueda", libroController.buscarLibros); // Ruta para buscar libros por criterio de búsqueda

//Subir imagenes de portada
router.post("libro/foto/:ISBN", libroController.uploadPortada); //Ruta para actualizar la portada de un libro

// Ruta para cargar y actualizar la portada del libro
router.post('/uploadPortada/:ISBN',upload, libroController.uploadPortada);


module.exports = router; // Exporta el router para ser utilizado por la aplicación
