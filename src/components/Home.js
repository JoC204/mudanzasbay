import React, { useEffect, useState } from 'react';
import ImgCamion from '../img/camion.png';
import '../style/Home.css'; // Asegúrate de crear este archivo para los estilos

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
            <h1 className={`title ${showTitle ? 'show' : ''}`}>BAY MUDANZAS</h1>
            <p className={`subtitle ${showText ? 'show' : ''}`}>
                Mudanzas a tu medida y Guardamuebles
            </p>
            <img 
                className={`home-image ${showImage ? 'show' : ''}`} 
                src={ImgCamion}
                alt="Camion"
            />
        </div>
    );
};

export default Home;
