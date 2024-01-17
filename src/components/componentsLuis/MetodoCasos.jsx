import React from "react";
import fondoimg from "../../../public/assets/whatis.png";
import "../../../public/styles/metodocasos.css";

const MetodoCasos = () => {
  return (
    <section className="what-is">
      <img src={fondoimg} alt="idea" className="fondoimg" />
      <div className="content">
        <div className="contentBx">
          <h1>¿Qué es el método de casos?</h1>
          <p>
            De acuerdo con Dirección de Investigación e Innovación Educativa en
            su libro "Método de Casos Técnicas didácticas" redacta que el método
            de casos es un modo de enseñanza en el que los alumnos construyen su
            aprendizaje a partir del análisis y discusión de experiencias y
            situaciones de la vida real.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MetodoCasos;
