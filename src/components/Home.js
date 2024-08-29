import React, { useEffect, useState } from "react";
import PortadaMudanzaDesktop from "../img/mudanza-desktop.png";
import PortadaMudanzaMobile from "../img/mudanza-mobile.png";
// import PortadaGuardaDesktop from "../img/guardamuebles-desktop.png";
import PortadaGuardaMobile from "../img/guardamuebles-mobile.png";
import "../style/Home.css";

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 100);
  }, []);

  return (
    <div className="home-container">
      <div className="mudanza-section">
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
      </div>
      <div className="guarda-section">
        <img
          className={`home-image desktop ${showImage ? "show" : ""}`}
          // src={PortadaGuardaDesktop}
          alt="Guardamuebles"
        />
        <img
          className={`home-image mobile ${showImage ? "show" : ""}`}
          src={PortadaGuardaMobile}
          alt="Guardamuebles"
        />
      </div>
    </div>
  );
};

export default Home;
