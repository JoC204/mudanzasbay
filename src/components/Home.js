import React, { useEffect, useState } from "react";
import PortadaMudanzaDesktop from "../img/mudanza-desktop-uno.png";
import Especialista from "../img/espesialistas.png";
import Ok from "../img/ok.png";
import PortadaMudanzaMobile from "../img/mudanza-mobile-uno.png";
import PortadaGuardaDesktop from "../img/guarda-desk-uno.png";
import PortadaGuardaMobile from "../img/guardamuebles-mobile-uno.png";
import "../style/Home.css";

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 100);
  }, []);

  return (
    <div className="home-container">
      <div className="mudanzaBanners">
        <a
          className="link"
          href="https://wa.me/+5493416541371?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20MudanzasBay%0A%0A%20--"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>
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
        <a
          className="link"
          href="https://wa.me/+5493416541371?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20MudanzasBay%0A%0A%20--"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>
      </div>
    </div>
  );
};

export default Home;
