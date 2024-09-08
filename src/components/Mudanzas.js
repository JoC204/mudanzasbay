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
import "../style/Mudanzas.css";
import LazyImage from "../components/LazyImage";

const Mudanzas = () => {
  const [showSection, setShowSection] = useState({
    section1: true,
    section2: true,
    section3: true,
    section4: true,
    section5: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".mudanza-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setShowSection((prev) => ({
            ...prev,
            [`section${index + 1}`]: true,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderSection = (index, imgSrc, videoSrc, text) => {
    const isEvenSection = index % 2 === 0;

    return (
      
      <section
        className={`mudanza-section ${
          showSection[`section${index}`] ? "show" : ""
        }`}
        id={`section${index}`}
      >
        <div className="section-content">
          <div className={`image-text-container ${isEvenSection ? "order-2" : "order-1"}`}>
            <LazyImage src={imgSrc} alt={`Mudanza ${index}`} className="mudanza-image" />
            <p className="description">{text}</p>
          </div>
          <div className={`video-container ${isEvenSection ? "order-1" : "order-2"}`}>
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
        Video2,
        "Te tenes que mudar o trasladar objetos? Nosotros tenemos la solución más segura y confiable de la ciudad!"
      )}
      {renderSection(
        2,
        ImgMudanza2,
        Video3,
        "No tenes que preocuparte por nada, nosotros realizamos todo por vos!"
      )}
      {renderSection(
        
        3,
        ImgMudanza3,
        Video4,
        "Ofrecemos servicios de mudanza de alta calidad, adaptados a tus necesidades."
      )}
      {renderSection(
        4,
        ImgMudanza4,
        Video1,
        "Consultanos lo que necesites! Estamos aquí para ayudarte en cada paso."
      )}
    </div>
  );
};

export default Mudanzas;
