import React from "react";
import "./About.css";
import aboutImg from "../../images/LibrosAbout.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">
            Sobre Nosotros
          </h2>
          <br></br>
          <div className="about-img">
            <img src={aboutImg} alt="Libros About" />
          </div>
          <div className="about-text">
            <br/>
            <h2 className="about-title">
              Libreria Apilados
            </h2>
            <p className="acercaDe">
              Bienvenidos a Librería Apilados, la nueva estrella en el universo
              de la lectura que llega para revolucionar la forma en que accedes
              a tus libros favoritos. Con la misión de hacer la literatura
              accesible para todos, nos enorgullecemos de ofrecer una amplia
              gama de títulos a precios increíblemente accesibles. En Librería
              Apilados, creemos que la cultura y el conocimiento deben estar al
              alcance de la mano, y es por eso que hemos diseñado un sistema de
              arriendo de libros exclusivo para nuestros miembros. Al
              convertirte en miembro de nuestra comunidad, no solo tendrás la
              oportunidad de disfrutar de descuentos especiales, sino también el
              privilegio de llevar a casa las obras que desees por un período
              determinado.
            </p>
            <p className="acercaDe">
              Nuestra selección incluye desde los clásicos atemporales hasta las
              últimas novedades editoriales, cubriendo una diversidad de géneros
              que satisfacen la curiosidad de lectores de todas las edades.
              Además, estamos comprometidos con el apoyo a autores locales,
              ofreciendo una plataforma para que sus voces sean escuchadas y sus
              libros descubiertos. En Librería Apilados, cada página que pasas
              es un paso hacia el descubrimiento de mundos nuevos y
              emocionantes. Únete a nosotros y sé parte de una comunidad que
              valora la riqueza de la literatura y la alegría de leer. 
            </p>
            <p className="acercaDe">
            ¡Te
              esperamos para compartir la aventura de leer!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
