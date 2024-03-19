import React from "react";
import "./AboutInfo.scss";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupIcon from "@mui/icons-material/Group";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Accordion from "../../components/Accordion/Accordion";

const policyData = [
  {
    title: "Policy 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.",
  },
  {
    title: "Policy 2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.",
  },
  {
    title: "Policy 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati. . Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum?",
  },
  {
    title: "Policy 4",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati. . Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum?",
  },
];

const AboutInfo = () => {
  return (
    <div className="aboutInfo">
      <Banner title="About Us" subTitle="Learn all about DRACC" />
      <div className="about">
        <div className="imageContainer">
          <div className="backgroundColor"></div>
          <img src="img/customar1.png.webp" alt="about dracc" />
          <div className="imgDesc">15 Years of Service Experience</div>
        </div>
        <div className="textContainer">
          <div className="aboutTitle">
            <span className="subtitle">About our institution</span>
            <span className="title">Learn all about us at DRACC</span>
          </div>
          <div className="aboutDetails">
            <p className="top">
              Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do
              eiusmod tempor inc.
            </p>
            <p className="bottom">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>
      </div>
      <div className="mishVish">
        <div className="item">
          <img src="img/mission.png" alt="mission" />
          <span className="title">Mission</span>
          <span className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            eveniet incidunt excepturi in, vitae perferendis voluptate repellat,
            quis fuga aut atque, praesentium vel aspernatur! Assumenda ratione
            saepe exercitationem nobis veniam!
          </span>
        </div>
        <span className="rule"></span>
        <div className="item">
          <img src="img/vision1.png" alt="vision" />
          <span className="title">Vision</span>
          <span className="desc">
            Lorem ipsum dolor, Lorem, ipsum dolor. atque, praesentium vel
            aspernatur! Assumenda ratione saepe exercitationem nobis veniam!
          </span>
        </div>
        <span className="rule"></span>
        <div className="item">
          <img src="img/values.png" alt="values" />
          <span className="title">Values</span>
          <span className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            eveniet incidunt excepturi in, vitae perferendis voluptate repellat,
            quis fuga aut atque, praesentium vel Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
      <div className="amenities">
        <div className="title">Our amenities</div>
        <div className="container">
          <div className="item">
            <RestaurantMenuIcon className="icon" />
            <div className="details">
              <span className="amenName">Dining</span>
              <ul className="amenList">
                <li>On-site resturant</li>
                <li>Room service</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <FitnessCenterIcon className="icon" />
            <div className="details">
              <span className="amenName">Fitness & Recreation</span>
              <ul className="amenList">
                <li>Outdoor pool</li>
                <li>Fitness center</li>
                <li>Tennis</li>
                <li>Casino</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <BusinessCenterIcon className="icon" />
            <div className="details">
              <span className="amenName">Business & Work</span>
              <ul className="amenList">
                <li>Executive lounge</li>
                <li>Business Center</li>
                <li>Meeting rooms</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <GroupIcon className="icon" />
            <div className="details">
              <span className="amenName">Guest services</span>
              <ul className="amenList">
                <li>Concierge</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <SentimentSatisfiedAltIcon className="icon" />
            <div className="details">
              <span className="amenName">Conviniences</span>
              <ul className="amenList">
                <li>Free parking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Accordion sections={policyData} />
    </div>
  );
};

export default AboutInfo;
