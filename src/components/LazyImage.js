import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../style/LazyImage.css";

const LazyImage = ({ src, alt, ...props }) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect="blur"  // Efecto de carga (puedes usar otros efectos como 'opacity' o 'black-and-white')
      {...props}
    />
  );
};

export default LazyImage;
