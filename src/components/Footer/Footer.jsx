import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="title">
            <img src="/img/logoLight.png" alt="logo" />
          </div>
          <div className="newsletter">
            <span>Subscribe to our Newsletter to get more of our updates</span>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <div className="title">
              <span>Quick Links</span>
            </div>
            <ul className="items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/blog">Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="info">
            <div className="title">
              <span>Contact Info</span>
            </div>
            <div className="items">
              <div className="item">
                <span className="title">Address:</span>
                <span className="desc">
                  No 13 St. Joseph Street, Emene, Enugu.
                </span>
              </div>
              <div className="item">
                <span className="title">Email:</span>
                <span className="desc">Info@dracc.org.ng</span>
              </div>
              <div className="item">
                <span className="title">Contact Us:</span>
                <span className="desc">07088887333, 08066665777</span>
              </div>
            </div>
            <div className="socials">
              <Link to="/">
                <FacebookRoundedIcon className="icon" />
              </Link>
              <Link to="/">
                <TwitterIcon className="icon" />
              </Link>
              <Link to="/">
                <LinkedInIcon className="icon" />
              </Link>
              <Link to="/">
                <InstagramIcon className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span> &copy; 2023 DRACC . All Right Reserved</span>
        <span>Developed by Verbum Networks, Enugu.</span>
      </div>
    </div>
  );
};

export default Footer;
