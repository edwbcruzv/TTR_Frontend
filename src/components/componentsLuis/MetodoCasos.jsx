import React from "react";
import fondoimg from "../../../public/assets/whatis.png";
import "../../../public/styles/metodocasos.css";

const MetodoCasos = () => {
  return (
    <section className="what-is">
      <img src={fondoimg} alt="idea" className="fondoimg" />
      <div className="content">
        <div className="contentBx">
          <h1>¿Cómo funciona School Coder?</h1>
          <p>
            School Coder funciona como un potente compilador de HTML y CSS,
            ofreciendo a los estudiantes un ambiente perfecto para escribir,
            experimentar y mejorar su código en tiempo real. Ya sea que los
            estudiantes estén explorando el desarrollo web por primera vez o
            perfeccionando sus habilidades para proyectos más avanzados, School
            Coder proporciona una interfaz intuitiva adaptada a sus necesidades
            educativas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MetodoCasos;
