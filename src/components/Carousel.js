// src/components/Carousel.js
import React, { useState } from "react";
import "../style/Carousel.css";
import VideoPlayer from "./VideoPlayer";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`Slide ${index}`} />
            ) : (
                
              <video src={item.src} poster={item.poster} muted controls />
            )}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
