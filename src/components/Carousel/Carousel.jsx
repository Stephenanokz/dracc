import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  return (
    <div className="carousel">
      <div
        className="image"
        style={{ backgroundImage: `url(${slides[currentIndex]?.img})` }}
      >
        <div className="overlay">
          <div data-aos="fade-up" data-aos-duration="1000" className="text">{slides[currentIndex]?.title}</div>
          <div data-aos="fade-up" data-aos-duration="1000" className="subText">
            <span></span>
            {slides[currentIndex]?.subtitle}
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
