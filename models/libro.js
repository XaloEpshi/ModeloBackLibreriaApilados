var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Definición del esquema para el modelo Libro
var libroSchema = new Schema({
  ISBN: { type: String, required: true }, // Campo para el ISBN del libro, requerido (El ISBN ​ es un identificador único para libros.)​
  nombreLibro: { type: String, required: true }, // Campo para el nombre del libro, requerido
  autor: { type: String, required: true }, // Campo para el autor del libro, requerido
  editorial: { type: String, required: true }, // Campo para la editorial del libro, requerido
  portada: String, // Campo para la portada sera una iamgen que podra ser de tipo null por defecto
  paginas: { type: Number, required: true }, // Campo para el número de páginas del libro, requerido
  
  //Cree este campo adicional para odenar por fecha de creacion de libros en la base de datos
  createdAt: { type: Date, default: Date.now }, // Campo para la fecha de creación.
});

// Exportación del modelo Libro basado en el esquema definido
module.exports = mongoose.model("Libro", libroSchema);
 