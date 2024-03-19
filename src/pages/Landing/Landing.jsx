import React, { useEffect, useState } from "react";
import "./Landing.scss";
import Carousel from "../../components/Carousel/Carousel";

const Landing = ({carouselImages}) => {
  // const slides = [
  //   {
  //     url: "img/dracc21.jpg",
  //     title: "DRACC HOTEL",
  //     subtitle: "Hotel & Resort"
  //   },
  //   {
  //     url: "img/dracc19.jpg",
  //     title: "Top Hotel in the City",
  //     subtitle: "Hotel & Resort"
  //   },
  //   {
  //     url: "img/dracc7.jpg",
  //     title: "Live in Style",
  //     subtitle: "Hotel & Resort"
  //   },
  // ];

  return (
    <div className="landing" id="landing">
      <div className="container">
        <Carousel slides={carouselImages} />
      </div>
    </div>
  );
};

export default Landing;
