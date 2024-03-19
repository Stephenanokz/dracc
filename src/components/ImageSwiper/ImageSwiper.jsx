import React, { useState } from 'react';
import './ImageSwiper.scss';

const ImageSwiper = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex === 0? images.length - 1 : currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1? 0 : currentImageIndex + 1);
  };

  return (
    <div className="image-swiper">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt="Swiper" />
      </div>
      <div className="button-container">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ImageSwiper;