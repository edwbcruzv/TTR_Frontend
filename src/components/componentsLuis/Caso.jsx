import React from "react";
import teams from "../../../public/assets/teams.jpg";
import "../../../public/styles/caso.css"


const Caso = () => {
  return (
    <section className="case">
      <img src={teams} alt="Equipo" className="hands" />
      <div className="content">
        <div className="contentBx">
          <h1>Pero ... ¿Qué es un caso?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nihil ea alias officiis at, quas est quasi recusandae dolor
            voluptatum, ipsa tenetur nam. Reprehenderit esse repellendus nisi,
            illo provident reiciendis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Caso;
