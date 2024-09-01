// src/components/Contacto.js
import React from "react";
import "../style/Contacto.css";
import Fondo from "../img/fondo-contacto.png";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <img src={Fondo} alt="Fondo Contacto" className="fondo"/> 

      <div className="medios-container">
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de los siguientes medios.</p>

        <ul className="medios-list">
          <li>Teléfono: +5493416541371</li>
          <li>Email: fletebay@gmail.com</li>
          <li>Horario de atención: Lunes a viernes de 9:00 a 18:00</li>
          <li>Whatsapp: +5493416541371</li>
          <li>Instagram: https://www.instagram.com/bay.mudanzas/</li>
          <li>Dirección: Cochabamba 3948, Rosario 2000</li>
        </ul>
      </div>
      <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13391.957825312918!2d-60.690462136141214!3d-32.951287777457686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca18294a529%3A0x8b4e90f514e6341b!2sCochabamba%203948%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1725202987795!5m2!1ses!2sar"
            width="300"
            height="300"
            style={{ border: 2 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default Contacto;
