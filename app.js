var express = require('express') // Importa el framework Express
var cors = require('cors') // Importa el módulo CORS para habilitar el intercambio de recursos entre distintos orígenes
var app = express(); // Crea una instancia de la aplicación Express

// Requerir el archivo de rutas de libros
var libroRoutes = require('./routes/libroRoutes'); // Importa el archivo de rutas de libros que definiste anteriormente

// Usar las rutas de libros en la aplicación
app.use(express.urlencoded({ extended: true })); // Permite procesar los datos codificados en la URL
app.use(express.json()); // Permite procesar los datos en formato JSON
app.use(cors()); // Habilita CORS para permitir solicitudes desde otros dominios
app.use('/api', libroRoutes); // Monta las rutas de libros bajo el prefijo '/api'

module.exports = app; // Exporta la aplicación para que pueda ser utilizada en otros archivos
