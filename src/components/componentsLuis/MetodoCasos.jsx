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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          error consectetur delectus sequi numquam sint, nulla maiores veritatis
          culpa vero modi! Deserunt velit harum architecto possimus magnam
          libero atque veritatis!
        </p>
        </div>
      </div>
    </section>
  );
};
export default MetodoCasos;
