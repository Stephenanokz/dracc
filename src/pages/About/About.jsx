import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CTAButton from "../../components/CTAButton/CTAButton";

const About = () => {
  return (
    <div className="about">
      <div className="imageContainer" data-aos="fade-up" data-aos-duration="1000">
        <div className="backgroundColor"></div>
        <img src="img/customar1.png.webp" alt="about dracc" />
        <div className="imgDesc">15 Years of Service Experience</div>
      </div>
      <div className="textContainer" data-aos="fade-up" data-aos-duration="1000">
        <div className="aboutTitle">
          <span className="subtitle">About our institution</span>
          <span className="title">
            Learn all about us at DRACC
          </span>
        </div>
        <div className="aboutDetails">
          <p className="top">
            Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do
            eiusmod tempor inc.
          </p>
          <p className="bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <Link to="/about">
          <CTAButton>Learn more</CTAButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
