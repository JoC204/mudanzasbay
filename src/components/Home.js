import React, { useEffect, useState } from "react";
import PortadaMudanzaDesktop from "../img/mudanza-desktop.png";
import PortadaMudanzaMobile from "../img/mudanza-mobile.png";
import "../style/Home.css";

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 100); // Imagen aparece 2 segundos después del texto
  }, []);

  return (
    <div className="home-container">
      <img
        className={`home-image desktop ${showImage ? "show" : ""}`}
        src={PortadaMudanzaDesktop}
        alt="back"
      />
      <img
        className={`home-image mobile ${showImage ? "show" : ""}`}
        src={PortadaMudanzaMobile}
        alt="back"
      />
    </div>
  );
};

export default Home;
