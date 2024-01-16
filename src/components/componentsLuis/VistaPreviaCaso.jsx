import React from "react";
import "../../../public/styles/vistapreviacaso.css";
import img from "../../../public/assets/alumnos.png";

const VistaPreviaCaso = (props) => {
  return (
    <div className="vista-previa">
      <h1>{props.titulo}</h1>
      <div className="content-caso">
        <h2>Introducción</h2>
        <p>
          {props.introduccion}
        </p>
        <h2>Resumen</h2>
        <p className="resumencaso">
          {props.resumen}
        </p>
        <div className="apartados-caso">
          <div className="apartado">
            <h3>Protagonistas</h3>
            <p>
              {props.protagonistas}
            </p>
          </div>
          <div className="apartado">
            <h3>Temporalidad</h3>
            <p>
              {props.temporalidad}
            </p>
            
          </div>
          <div className="apartado">
              <h3>Lugar</h3>
              <p>
                {props.lugar}
              </p>
              
            </div>
            <div className="apartado">
              <h3>Organización</h3>
              <p>
                {props.organizacion}
              </p>
              
            </div>
            <div className="apartado">
              <h3>Riesgos</h3>
              <p>
                {props.riesgos}
              </p>
              
            </div>
            <div className="apartado">
              <h3>Preguntas</h3>
              <p>
                {props.preguntas}
              </p>
              
            </div>
            
        </div>
        
        <div className="archivos-multi">
          <img src={img} /> <img src={img} />{" "}
          <video src="https://www.youtube.com/watch?v=HFEK6esntTo">
            Click para ver el video{img}
          </video>
        </div>
      </div>
      <div className="info-adicional">
        <h3>Comentarios</h3>
        <p>
          {props.comentarios}
        </p>
        <button className="btn-caso">Asignar caso</button>
      </div>
    </div>
  );
};

export default VistaPreviaCaso;
