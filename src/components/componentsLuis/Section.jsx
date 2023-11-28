import React from "react";
import "../../../public/styles/section.css"

const Section = (props) =>{
    return (
      <section className="section">
        <div className="div-imagen">
          <img src={props.imagen} />
        </div>
        <div className="div-texto">
          <h1>{props.titulo}</h1>
          <p>{props.texto}</p>
          <button className="boton boton-register">Registrarse</button>
          <button className="boton boton-login">Iniciar Sesión</button>
        </div>
      </section>
    )
}

export default Section
