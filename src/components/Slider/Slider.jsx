import React, { useEffect, useState } from "react";
import "./Slider.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    const isFirstLside = currentIndex === 0;
    const newIndex = isFirstLside ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    const isLastLside = currentIndex === images.length - 1;
    const newIndex = isLastLside ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="leftArrow" onClick={goToPrevious}>
        <ArrowBackIosIcon className="icon" />
      </div>
      <div className="rightArrow" onClick={goToNext}>
        <ArrowForwardIosIcon className="icon" />
      </div>
      <div className="overlay"></div>
      <div
        className="image"
      >
        <img src={images[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default Slider;
