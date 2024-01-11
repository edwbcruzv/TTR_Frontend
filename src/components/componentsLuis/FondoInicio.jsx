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
            <h3>Herramienta de apoyo para la creación de casos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nisi maxime voluptatibus officia reiciendis amet animi debitis
              impedit maiores expedita recusandae provident vero eaque facilis
              minus ipsum, nesciunt quidem dolore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fondoinicio;
