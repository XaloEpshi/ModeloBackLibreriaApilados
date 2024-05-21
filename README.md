Hospital El Alerce - README

¡Bienvenido al proyecto Hospital El Alerce!

Este proyecto es una aplicación de gestión de pacientes para el Hospital El Alerce. Este archivo contiene información importante sobre cómo configurar, ejecutar y contribuir al proyecto.

## Configuración del Proyecto

1. **Clonar el Repositorio:** 
   Clona este repositorio en tu máquina local utilizando el siguiente comando:
git clone [URL del repositorio]

2. **Instalar Dependencias:** 
Una vez clonado el repositorio, accede al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
npm install

## Ejecución del Servidor

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:
nmp start



El servidor se ejecutará en `http://localhost:3000`.

## Uso de la API

La API RESTful proporciona las siguientes rutas:

- `GET /api/pacientes`: Obtener todos los pacientes.
- `POST /api/pacientes/paciente`: Crear un nuevo paciente.
- `PUT /api/pacientes/paciente/:id`: Actualizar un paciente existente.
- `DELETE /api/pacientes/paciente/:id`: Marcar un paciente como inactivo (no elimina físicamente el paciente, solo lo marca como inactivo).
- `GET /api/pacientes/paciente/:id`: Obtener un paciente por su ID.
- `GET /api/pacientes/pacientes/:last?`: Obtener todos los pacientes, con opción para obtener los últimos.
- `GET /api/pacientes/pacientes-eliminados/`: Obtener todos los pacientes eliminados.
- `GET /api/pacientes/paciente/search/:search`: Buscar pacientes por criterios de búsqueda.
- `POST /api/pacientes/pacientes/photo/:id?`: Subir una foto para un paciente específico por su ID.
- `GET /api/pacientes/paciente/photo/:filename`: Obtener la foto de un paciente por su nombre de archivo.

Para utilizar estas rutas, realiza solicitudes HTTP a la URL base de la API (por ejemplo, `http://localhost:3000/api/pacientes`) utilizando un cliente REST como Postman.

## Contribución

¡Siéntete libre de contribuir al proyecto! Abre una solicitud de extracción con tus mejoras o correcciones de errores.

## Contacto

Para más información, ponte en contacto con [nombre del responsable del proyecto] en [correo electrónico].

¡Gracias por tu interés en nuestro proyecto!.