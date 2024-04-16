import React from "react";
import teams from "../../../public/assets/teams.jpg";
import "../../../public/styles/caso.css";

const Caso = () => {
  return (
    <section className="case">
      <img src={teams} alt="Equipo" className="hands" />
      <div className="content">
        <div className="contentBx">
          <h1>Pero ... ¿Cómo ayuda School Coder?</h1>
          <p>
            Los profesores pueden integrar School Coder en su plan de estudios
            con facilidad, aprovechando sus capacidades interactivas para
            mejorar las lecciones de codificación y asignar ejercicios
            atractivos. Al incorporar School Coder en las actividades en el
            aula, los educadores pueden potenciar a los estudiantes para que
            desarrollen habilidades esenciales de alfabetización digital y
            codificación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Caso;
