import React from "react";
import girl from "../../images/codigo.jpg";
import "../../styles/casebuilder.css";
const Fondoinicio = () => {
  return (
    <>
      <section className="banner">
        {/* <header className='header'>
                <a href="" className='logo'></a>
                <div className='toggle'></div> 
                </header> */}
        <img src={girl} alt="Estudiante" className="girl" />
        <div className="content">
          <div className="contentBx">
            <h1>School Coder</h1>
            <h2>Ejecución de código HTML en tiempo real</h2>
            <h3>Herramienta didáctica de apoyo para la evaluación de practicas hechas en HTML y CSS</h3>
            <p>
              Presentamos "School Coder" – la aplicación ideal para que los
              estudiantes se sumerjan en el mundo de HTML y CSS directamente
              desde el aula. School Coder es una plataforma innovadora diseñada
              para facilitar el aprendizaje práctico y ejercicios de
              codificación en un entorno educativo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fondoinicio;
