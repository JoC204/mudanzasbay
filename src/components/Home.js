import React, { useEffect, useState } from "react";
import ImgCamion from "../img/camion.png";
import "../style/Home.css";

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500); // Título aparece después de 0.5s
    setTimeout(() => setShowText(true), 1000); // Texto aparece 2 segundos después del título
    setTimeout(() => setShowImage(true), 1500); // Imagen aparece 2 segundos después del texto
  }, []);

  return (
    <div className="home-container">
      <h1 className={`title ${showTitle ? "show" : ""}`}>MUDANZAS BAY</h1>
      <img
        className={`home-image ${showImage ? "show" : ""}`}
        src={ImgCamion}
        alt="Camion"
      />
      <p className={`subtitle ${showText ? "show" : ""}`}>MUDANZA A MEDIDA</p>
      <p className={`subtitle2 ${showText ? "show" : ""}`}>GUARDAMUEBLES</p>
    </div>
  );
};

export default Home;
