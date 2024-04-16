import React from "react";
import "../../../public/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="sec aboutus">
          <h2>Sobre Nosotros</h2>
          <p>
            Esta herramienta fue elaborada por los alumnos Luis Vega, Edwin
            Bernardo y David Baltazar como un sistema para entrega final sobre
            el trabajo terminal 24 con la ayuda del profesor
            Rubén Peredo Valderrama 
          </p>
          <ul className="sci">
            <li>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quicklinks">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sec quicklinks">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Us</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>
                <a href="">+1 234 567 890</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>
                <a href="">contact@email.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
