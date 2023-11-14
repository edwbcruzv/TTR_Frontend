import React, { Component } from "react";
import "./estilosLuis/section.css";
import fondo1 from "../componentsLuis/fondo1.png"
export default class Section extends Component {
  render() {
    return (
      <section className="section">
        <div className="div-imagen">
          <img src={this.props.imagen} alt="" />
        </div>
        <div className="div-texto">
          <h1>{this.props.titulo}</h1>
          <p>{this.props.texto}</p>
          <button className="boton boton-register">Registrarse</button>
          <button className="boton boton-login">Iniciar Sesión</button>
        </div>
      </section>
    );
  }
}
