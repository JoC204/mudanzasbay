// src/components/Guardamuebles.js
import React, { useEffect, useState } from 'react';
import ImgGuardamuebles from '../img/guarda1.png';
import ImgGuardamuebles2 from '../img/guarda2.png';
import '../style/GuardaMuebles.css'; 

const Guardamuebles = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowTitle(true), 500); // Título aparece después de 0.3s
        setTimeout(() => setShowText(true), 1000); // Texto aparece 0.9 segundos después del título
        setTimeout(() => setShowImage(true), 1500); // Imagen aparece 0.8 segundos después del texto
    }, []);

    return (
        <div className="guardamuebles-container">
            <h1 className={`title-guarda ${showTitle ? 'show' : ''}`}>GUARDAMUEBLES</h1>
            <p className={`description-guarda ${showText ? 'show' : ''}`}>
                Ofrecemos el mejor servicio de guardamuebles para mantener tus pertenencias seguras.
            </p>
            <img 
                className={`guardamuebles-image ${showImage ? 'show' : ''}`} 
                src={ImgGuardamuebles}
                alt="Guardamuebles"
            />
            <img 
                className={`guardamuebles2-image ${showImage ? 'show' : ''}`} 
                src={ImgGuardamuebles2}
                alt="Guardamuebles"
            />
        </div>
    );
};

export default Guardamuebles;
