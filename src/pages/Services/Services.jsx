import React, { useEffect, useState } from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import CTAButton from "../../components/CTAButton/CTAButton";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("services", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getServices();
  }, []);

  const filteredServices = services.slice(0, 2);

  return isLoading ? (
    <div className="loading__inline">Loading...</div>
  ) : (
    <div className="services">
      <div className="servicesTitle">
        <span className="titleBackground">Our Amenities</span>
        <span className="title">Our Amenities</span>
      </div>
      <div className="servicesContainer">
        {filteredServices.map((service) => (
          <div key={service?._id} className="top">
            <div className="imageContainer">
              <img src={service?.img} alt={service?.title} />
            </div>
            <div className="textContainer">
              <div className="modal" data-aos="fade-left" data-aos-duration="1000">
                <div className="title">
                  <span className="title">{service?.title}</span>
                  <span className="subtitle">{service?.subtitle}</span>
                </div>
                <p>
                {service?.desc}
                </p>
                <Link to="/">
                  <button>
                    Learn More
                    <ChevronRightIcon className="icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/services">
        <CTAButton>Learn more</CTAButton>
      </Link>
    </div>
  );
};

export default Services;
