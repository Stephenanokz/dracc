import React from "react";
import "./ContactInfo.scss";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Banner from "../../components/Banner/Banner";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <Banner title="Our Contact" subTitle="For enquiries and more info" />
      <div className="container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="contactDetails">
          <div className="contactDetailsContainer">
            <div className="contactDetailsTitle">
              <span className="title">Contact information</span>
              <span className="subtitle">
                Fill up the form and our team would get back to you within 24
                hours.
              </span>
            </div>
            <div className="contactDetailsInfo">
              <div className="phone">
                <CallIcon className="icon"/>
                <span>+23458785523</span>
              </div>
              <div className="mail">
                <MailOutlineIcon className="icon"/>
                Info@dracc.org.ng
              </div>
              <div className="address">
                <LocationOnIcon className="icon"/>
                No 13 St. Joseph Street, Emene, Enugu.
              </div>
              <div className="workingHours">
                <AccessTimeIcon className="icon"/>
                Everyday; 24/7
              </div>
            </div>
            <div className="contactDetailsSocials">
              <a href="https://facebook.com/verbumnet" target="_blank">
                <FacebookRoundedIcon className="icon"/>
              </a>
              <a
                href="https://www.instagram.com/verbumnetworksltd/"
                target="_blank"
              >
                <InstagramIcon className="icon"/>
              </a>
              <a
                href="https://twitter.com/verbumlimited?s=11&t=j6QsgBUMfWosrAorJOs-Pg"
                target="_blank"
              >
                <TwitterIcon className="icon"/>
              </a>
              <a href="https://wa.me/+2347049154690" target="_blank">
                <WhatsAppIcon className="icon"/>
              </a>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <div className="formInputs">
              <input type="text" name="name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="title" placeholder="Subject" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message here"
              ></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
