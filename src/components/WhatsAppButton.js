import React from 'react';
import whatsappIconUno from '../img/whatsApp.png'; // Asegúrate de corregir la ruta según la ubicación del ícono
import '../style/WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5493416541371" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
    >
      <img className='wtsDos' src={(whatsappIconUno)} alt="WhatsApp" style={styles.icon} />
    </a>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
    zIndex: 1000,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  icon: {
    width: '50px',
    height: '50px',
  },
};

export default WhatsAppButton;
