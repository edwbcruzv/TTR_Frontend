import React from "react";
import teams from "../../../public/assets/teams.jpg";
import "../../../public/styles/caso.css";

const Caso = () => {
  return (
    <section className="case">
      <img src={teams} alt="Equipo" className="hands" />
      <div className="content">
        <div className="contentBx">
          <h1>Pero ... ¿Qué es un caso?</h1>
          <p>
            Isias Álvarez en su libro " Los estudios de caso como estrategia
            para la formación en gestión" explica que un caso es una descripción
            de una situación real, en un espacio y tiempo determinado. El caso
            contiene información que se transmite a lo largo del texto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Caso;
