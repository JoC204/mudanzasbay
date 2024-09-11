// src/components/Contacto.js
import React from "react";
import "../style/Contacto.css";
import Fondo from "../img/fondo-contacto.png";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <img src={Fondo} alt="Fondo Contacto" className="fondo" />

      <div className="medios-container">
        <h1>Contacto</h1>
        <p>Puedes contactarnos a través de los siguientes medios.</p>

        <ul className="medios-list">
          <li>Teléfono / Whatsapp: +5493416541371</li>
          <li>Email: mudanzabay@gmail.com</li>
          <li>Instagram: https://www.instagram.com/bay.mudanzas/</li>
          <li>Dirección: San José de Calasanz 8992 - Rosario, 2000</li>
        </ul>
      </div>
      <div className="map-container">
        <iframe
        title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.397763054011!2d-60.75572692386435!3d-32.940506271579274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b652ba64335cdb%3A0x7deb48c69a4930f1!2sAv.%20San%20Jos%C3%A9%20de%20Calasanz%208992%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1725930462630!5m2!1ses!2sar"
          width="300"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
