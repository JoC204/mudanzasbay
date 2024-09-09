import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortadaMudanzaDesktop from "../img/mudanza-desktop.png";
import Especialista from "../img/espesialistas.png";
import Ok from "../img/ok.png";
import PortadaMudanzaMobile from "../img/mudanza-mobile-new.png";
import PortadaGuardaDesktop from "../img/guarda-desk.png";
import PortadaGuardaMobile from "../img/guardamuebles-mobile.png";
import "../style/Home.css";

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 100);
  }, []);

  return (
    <div className="home-container">
      <div className="mudanzaBanners">
        <Link className="link" to="/contacto">
          <img
            className={`home-image desktop ${showImage ? "show" : ""}`}
            src={PortadaMudanzaDesktop}
            alt="Mudanza"
          />

          <img
            className={`home-image mobile ${showImage ? "show" : ""}`}
            src={PortadaMudanzaMobile}
            alt="Mudanza"
          />
        </Link>
      </div>
      <div className="cardsBanners">
        <div className="card">
          <img src={Especialista} alt="Especialista"></img>
          <h2>Somos especialistas</h2>
          <p>Contamos con un equipo de expertos en mudanzas</p>
        </div>
        <div className="card">
          <img src={Ok} alt="responsabilidad"></img>
          <h2>Responsabilidad</h2>
          <p>
            Entregamos todos los bienes en las mismas condiciones que los
            recibimos
          </p>
        </div>
      </div>
      <div className="guardaBanners">
        <Link className="link" to="/contacto">
          <img
            className={`home-image desktop ${showImage ? "show" : ""}`}
            src={PortadaGuardaDesktop}
            alt="Guardamuebles"
          />
          <img
            className={`home-image mobile ${showImage ? "show" : ""}`}
            src={PortadaGuardaMobile}
            alt="Guardamuebles"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
