//CONTROLADOR DE GUARDADO DE DCTOS

var validator = require("validator");
var Libro = require("../models/libro");

//const fs = require("fs");
//const path = require("path");

var controllers = {
  // Controlador para agregar un nuevo libro
  nuevoLibro: async (req, res) => {
    // Obtener los parámetros del cuerpo de la solicitud
    var params = req.body;

    // Validación de datos del libro
    try {
      // Validar que los campos obligatorios no estén vacíos y cumplan con ciertos criterios
      var isbnValido = !validator.isEmpty(params.ISBN);
      var nombreLibroValido = !validator.isEmpty(params.nombreLibro);
      var autorValido = !validator.isEmpty(params.autor);
      var editorialValida = !validator.isEmpty(params.editorial);
      var paginasValidas =
        !validator.isEmpty(params.paginas) &&
        validator.isInt(params.paginas, { min: 1 });

      // Verificar si los datos del libro son válidos
      if (
        isbnValido &&
        nombreLibroValido &&
        autorValido &&
        editorialValida &&
        paginasValidas
      ) {
        // Crear un nuevo objeto libro utilizando el modelo Libro
        var libro = new Libro({
          ISBN: params.ISBN,
          nombreLibro: params.nombreLibro,
          autor: params.autor,
          editorial: params.editorial,
          portada: params.portada || null, // Si no se proporciona una portada, se guarda como null
          paginas: params.paginas,
        });

        // Guardar el libro en la base de datos
        var libroGuardado = await libro.save();

        // Enviar respuesta exitosa con el libro guardado
        return res.status(200).send({
          status: "Libro Agregado Correctamente",
          libro: libroGuardado,
        });
      } else {
        // Enviar respuesta de error si los datos del libro no son válidos
        return res.status(400).send({
          status: "error",
          message: "Los datos no son válidos",
        });
      }
    } catch (err) {
      // Enviar respuesta de error si ocurre algún problema al guardar el libro en la base de datos
      return res.status(500).send({
        status: "error",
        message: "No se pudo guardar el libro en la base de datos",
      });
    }
  },

  // Controlador para actualizar (MODIFICAR) un libro existente
  actualizarLibro: async (req, res) => {
    // Obtener el ISBN del libro de los parámetros de la solicitud
    var isbn = req.params.ISBN;
    // Obtener los parámetros del cuerpo de la solicitud
    var params = req.body;

    // Validación de los datos del libro
    try {
      // Validar que los campos obligatorios no estén vacíos y cumplan con ciertos criterios
      var isbnValido = !validator.isEmpty(params.ISBN);
      var nombreLibroValido = !validator.isEmpty(params.nombreLibro);
      var autorValido = !validator.isEmpty(params.autor);
      var editorialValida = !validator.isEmpty(params.editorial);
      var paginasValidas =
        !validator.isEmpty(params.paginas) &&
        validator.isInt(params.paginas, { min: 1 });

      // Verificar si los datos del libro son válidos
      if (
        isbnValido &&
        nombreLibroValido &&
        autorValido &&
        editorialValida &&
        paginasValidas
      ) {
        // Actualizar el libro con los nuevos datos proporcionados
        var libroActualizado = await Libro.findOneAndUpdate(
          { ISBN: isbn },
          params,
          { new: true }
        ).exec();
        // Verificar si se encontró y actualizó correctamente el libro
        if (!libroActualizado) {
          return res.status(404).send({
            status: "error",
            message: "No existe un libro con ISBN: " + isbn,
          });
        }
        // Enviar respuesta exitosa con el libro actualizado
        return res.status(200).send({
          status: "Libro Actualizado Correctamente",
          libro: libroActualizado,
        });
      } else {
        // Enviar respuesta de error si la validación de los datos del libro falla
        return res.status(400).send({
          status: "error",
          message: "La validación de los datos falló",
        });
      }
    } catch (err) {
      // Enviar respuesta de error si ocurre algún problema al actualizar el libro
      return res.status(500).send({
        status: "error",
        message: "Error al actualizar",
      });
    }
  },

  // Controlador para eliminar un libro
  eliminarLibro: async (req, res) => {
    // Obtener el ISBN del libro de los parámetros de la solicitud
    var isbn = req.params.ISBN;

    try {
      // Eliminar el libro por su ISBN
      var libroEliminado = await Libro.findOneAndDelete({ ISBN: isbn }).exec();

      // Verificar si se encontró y eliminó correctamente el libro
      if (!libroEliminado) {
        return res.status(404).send({
          status: "error",
          message: "No se encontró el libro con ISBN: " + isbn,
        });
      }

      // Enviar respuesta exitosa con el libro eliminado
      return res.status(200).send({
        status: "Libro Eliminado correctamente",
        libro: libroEliminado,
      });
    } catch (err) {
      // Enviar respuesta de error si ocurre algún problema al eliminar el libro
      return res.status(500).send({
        status: "error",
        message: "Error al eliminar el libro",
      });
    }
  },

  // Controlador para obtener los últimos 3 libros
  obtenerUltimosLibros: async (req, res) => {
    try {
      // Ejecutar la consulta y ordenar los libros por fecha de creación de forma descendente
      const ultimosLibros = await Libro.find()
        .sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
        .limit(3) // Limitar a los últimos tres libros
        .exec();

      // Verificar si se encontraron libros
      if (!ultimosLibros || ultimosLibros.length === 0) {
        // Si no se encontraron libros, devolver un error 404
        return res.status(404).send({
          status: "error",
          message: "No se encontraron libros recientes",
        });
      }

      // Si se encontraron libros, devolver una respuesta exitosa con los últimos libros encontrados
      return res.status(200).send({
        status: "success",
        libros: ultimosLibros,
      });
    } catch (err) {
      // Si ocurre un error durante la ejecución de la consulta, devolver un error 500
      return res.status(500).send({
        status: "error",
        message: "Error interno del servidor al obtener los últimos libros",
      });
    }
  },

  // Controlador para obtener todos los libros
  obtenerTodosLosLibros: async (req, res) => {
    try {
      // Ejecutar la consulta y obtener todos los libros
      var todosLosLibros = await Libro.find().exec();

      // Verificar si se encontraron libros
      if (!todosLosLibros || todosLosLibros.length === 0) {
        // Si no se encontraron libros, devolver un error 404
        return res.status(404).send({
          status: "error",
          message: "No se encontraron libros en la base de datos",
        });
      }

      // Si se encontraron libros, devolver una respuesta exitosa con todos los libros
      return res.status(200).send({
        status: "success",
        libros: todosLosLibros,
      });
    } catch (err) {
      // Si ocurre un error durante la ejecución de la consulta, devolver un error 500
      return res.status(500).send({
        status: "error",
        message: "Error interno del servidor al obtener los libros",
      });
    }
  },

  // Controlador para obtener libros por nombre, autor o editorial
  buscarLibros: async (req, res) => {
    // Construir la consulta para buscar libros por nombre, autor o editorial
    var query = Libro.find({
      $or: [
        { nombreLibro: { $regex: req.params.busqueda, $options: "i" } },
        { autor: { $regex: req.params.busqueda, $options: "i" } },
        { editorial: { $regex: req.params.busqueda, $options: "i" } },
      ],
    });

    try {
      // Ejecutar la consulta y ordenar los libros por el nombre de forma ascendente
      var libros = await query.sort("nombreLibro").exec();

      // Verificar si se encontraron libros
      if (!libros || libros.length === 0) {
        // Si no se encontraron libros, devolver un error 404
        return res.status(404).send({
          status: "error",
          message:
            "No se encontraron libros con los criterios de búsqueda proporcionados",
        });
      }

      // Si se encontraron libros, devolver una respuesta exitosa con los libros encontrados
      return res.status(200).send({
        status: "success",
        libros,
      });
    } catch (err) {
      // Si ocurre un error durante la ejecución de la consulta, devolver un error 500
      return res.status(500).send({
        status: "error",
        message: "Error interno del servidor al buscar libros",
      });
    }
  },
};

module.exports = controllers;
