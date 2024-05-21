// Definimos un objeto llamado 'conexion' que contiene la configuración para la conexión la API
var conexion = {
    // La propiedad 'urlApi' almacena la URL base de la API a la que nos vamos a conectar
    urlApi: 'http://localhost:3000/api'
};

// Exportamos el objeto 'conexion' como la exportación por defecto del módulo
// Esto permite que otros archivos importen este objeto y utilicen la configuración de la API
export default conexion;
