import React from "react";
import "../../../public/styles/vistapreviacaso.css";
import img from "../../../public/assets/alumnos.png";

const VistaPreviaCaso = () => {
  return (
    <div className="vista-previa">
      <h1>Titulo del caso</h1>
      <div className="content-caso">
        <h2>Introducción</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi
          natus, ipsam suscipit eius blanditiis illo corporis voluptates, et
          numquam cupiditate ea esse consequatur nesciunt harum fugiat cum
          recusandae iusto!
        </p>
        <h2>Resumen</h2>
        <p className="resumencaso">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          itaque recusandae magni ea atque totam veniam, animi, alias laboriosam
          debitis assumenda veritatis, accusantium natus dolore commodi quos
          nemo deleniti sunt.
        </p>
        <div className="apartados-caso">
          <div className="apartado">
            <h3>Protagonistas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorum maxime necessitatibus consequatur corporis et facilis adx
            </p>
          </div>
          <div className="apartado">
            <h3>Temporalidad</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorum maxime necessitatibus consequatur corporis et facilis adx
            </p>
            
          </div>
          <div className="apartado">
              <h3>Localizacion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                dolorum maxime necessitatibus consequatur corporis et facilis
                adx
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          maxime quas repellendus et fuga temporibus ratione, nobis dolore eos
          laboriosam rerum officia illo voluptate voluptatum. Distinctio veniam
          quo perferendis nulla?
        </p>
        <button className="btn-caso">Asignar caso</button>
      </div>
    </div>
  );
};

export default VistaPreviaCaso;
