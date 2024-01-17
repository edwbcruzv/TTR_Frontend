import React from "react";
import girl from "../../../public/assets/chicafondo.png";
import "../../../public/styles/casebuilder.css";
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
            <h1>Casebuilder</h1>
            <h2>Creador de casos</h2>
            <h3>Herramienta didáctica de apoyo para la creación de casos</h3>
            <p>
              Esta herramienta web le permitirá a los profesores de la ESCOM, a crear
              ejericicios basado en el método de casos el cual reciben el nombre de casos.
              Los profesores podrán añadir contenido digital multimedia para generar los 
              casos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fondoinicio;
