import React from "react";
import whatsappIconUno from "../img/whatsApp.png";
import "../style/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5493416541371?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20MudanzasBay%0A%0A%20--"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
    >
      <img
        className="wtsDos"
        src={whatsappIconUno}
        alt="WhatsApp"
        style={styles.icon}
      />
    </a>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: 1000,
    backgroundColor: "transparent",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
};

export default WhatsAppButton;
