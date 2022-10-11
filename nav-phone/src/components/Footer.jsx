import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import MercadoEnvio from "../img/mercado_envios.png";
import PagoOnline from "../img/logos-pago-online.png";

const Footer = () => {

        
  return (
    <>
      <footer>
        <hr />
        <div className="pago-envio">
          <h3>Medios de pago</h3>
          <img
            src={MercadoEnvio}
            alt="imagen de metodos de pago"
          />
          <h3>Métodos de envío</h3>
          <img
            src={PagoOnline}
            alt="imagen de metodos de envio"
          />
        </div>
        <div>
          <h3>Seguinos en nuestras redes sociales</h3>
          <ul className="redes">
            <li>
              <a href="https://www.instagram.com/?hl=es" target="_blank">
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li>
              <a href="https://es-la.facebook.com/" target="_blank">
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/?lang=es" target="_blank">
                <i className="bi bi-whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <nav className="nav2">
          <ul>
            {/*Profe aca utilice un href ya que no encontre alguna forma de hacerlo con Link u otra dependencia de React que me redirijiera a la pagina que yo queria, intente hacerlo con "navigate" pero tampoco puede. Seguro existe alguna forma si la sabe bienvenida sea je gracias profe!*/}
          <li><a href="https://www.samsung.com/ar/" className="Underline" target="_blank">Ir a la página oficial Samsung</a></li>
            <Link className="Underline" to="/">
                <li>Volver el Inicio</li>
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
