import React, { useEffect, useState } from "react";
import ImgMudanza1 from "../img/mudanza1.png"; // Asegúrate de agregar las rutas correctas
import ImgMudanza2 from "../img/mudanza2.png"; // para tus imágenes
import "../style/Mudanzas.css"; // Asegúrate de crear este archivo para los estilos

const Mudanzas = () => {
  const [showFirstImage, setShowFirstImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFirstImage(true), 500); // Primera imagen aparece después de 0.5s
    setTimeout(() => setShowText(true), 1000); // Texto aparece 1 segundo después de la primera imagen
    setTimeout(() => setShowSecondImage(true), 1500); // Segunda imagen aparece 1 segundo después del texto
  }, []);

  return (
    <div className="mudanzas-container">
      <img
        className={`mudanza-image ${showFirstImage ? "show" : ""}`}
        src={ImgMudanza1}
        alt="Mudanza 1"
      />
      <p className={`mudanza-text ${showText ? "show" : ""}`}>
        Te tenes q mudar o trasladar objetos? Nosotros tenemos la solución más
        segura y confiable de la ciudad! 
      </p>
      <p className={`mudanza-text ${showText ? "show" : ""}`}>👉🏼No tenes que preocuparte por nada, nosotros realizamos todo por vos! .
      •Consultanos lo que necesites!</p>
      <img
        className={`mudanza-image ${showSecondImage ? "show" : ""}`}
        src={ImgMudanza2}
        alt="Mudanza 2"
      />
    </div>
  );
};

export default Mudanzas;
