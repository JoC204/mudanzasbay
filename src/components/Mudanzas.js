import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Video1 from "../videos/video1.mp4";
import Video2 from "../videos/video2.mp4";
import Video3 from "../videos/video3.mp4";
import Video4 from "../videos/video4.mp4";
import ImgMudanza1 from "../img/img-mudanza1.png";
import ImgMudanza2 from "../img/img-embalaje1.png";
import ImgMudanza3 from "../img/img-soga1.png";
import ImgMudanza4 from "../img/img-equipo.png";
import ImgMudanza1Mobile from "../img/img-mudanza-movile.png";
import ImgMudanza2Mobile from "../img/img-embalaje1-movile.png";
import ImgMudanza3Mobile from "../img/img-soga1-movile.png";
import ImgMudanza4Mobile from "../img/img-equipo-movile.png";
import "../style/Mudanzas.css";

const Mudanzas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateView(); // Check on mount
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  const renderSection = (index, imgSrc, imgSrcMobile, videoSrc, text) => {
    const isEvenSection = index % 2 === 0;
    const imgToShow = isMobile ? imgSrcMobile : imgSrc;

    return (
      <section
        className={`mudanza-section ${[`section${index}`] ? "show" : ""}`}
        id={`section${index}`}
      >
        <div className="section-content">
          <div
            className={`image-text-container ${
              isEvenSection ? "order-2" : "order-1"
            }`}
          >
            <img
              src={imgToShow}
              alt={`Mudanza ${index}`}
              className="mudanza-image"
            />
            <p className="description">{text}</p>
          </div>
          <div
            className={`video-container ${
              isEvenSection ? "order-1" : "order-2"
            } ${isMobile ? "hide-video" : ""}`}
          >
            <VideoPlayer className="custom-video" src={videoSrc} />
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="mudanzas-scroll-container">
      {renderSection(
        1,
        ImgMudanza1,
        ImgMudanza1Mobile,
        Video2,
        "Te tenes que mudar o trasladar objetos? Nosotros tenemos la solución más segura y confiable de la ciudad!"
      )}
      {renderSection(
        2,
        ImgMudanza2,
        ImgMudanza2Mobile,
        Video3,
        "No tenes que preocuparte por nada, nosotros realizamos todo por vos!"
      )}
      {renderSection(
        3,
        ImgMudanza3,
        ImgMudanza3Mobile,
        Video4,
        "Ofrecemos servicios de mudanza de alta calidad, adaptadas a tus necesidades."
      )}
      {renderSection(
        4,
        ImgMudanza4,
        ImgMudanza4Mobile,
        Video1,
        "Consultanos lo que necesites! Estamos aquí para ayudarte en cada paso."
      )}
    </div>
  );
};

export default Mudanzas;
