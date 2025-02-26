import React, { useEffect, useState } from "react";
import "./Home.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Rooms from "../Rooms/Rooms";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";
import axios from "axios";
import ShortGallery from "../../components/ShortGallery/ShortGallery";

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    //Fetch Carousel Images
    const getCarouselImages = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("carouselimages", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setCarouselImages(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getCarouselImages();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="home">
      <Landing carouselImages={carouselImages} />
      <About />
      <Rooms />
      <Services />
      <Blog />
      {/* <ShortGallery /> */}
    </div>
  );
};

export default Home;
