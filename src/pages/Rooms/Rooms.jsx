import React, { useEffect, useState } from "react";
import "./Rooms.scss";
import { Link } from "react-router-dom";
import CTAButton from "../../components/CTAButton/CTAButton";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    const getRooms = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("rooms", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setRooms(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getRooms();
  }, []);

  const filteredRooms = rooms.slice(0, 3);

  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openRoomModal = (room) => {
    setIsOpen(!isOpen);
    setSelectedCard(room);
  };

  return isLoading ? (
    <div className="loading__inline">Loading...</div>
  ) : (
    <div className="rooms">
      <div
        className={!isOpen ? "roomModalOverlay" : "roomModalOverlay open"}
        onClick={() => setIsOpen(false)}
      >
        <div className="roomModal">
          <div className="top">
            <img src={selectedCard?.img} alt={selectedCard?.title} />
            <span>{selectedCard?.title}</span>
          </div>
          <div className="bottom">
            <span className="price">
              {" "}
              <sup>$</sup> <span>{selectedCard?.price}</span> per night
            </span>
            <p>{selectedCard?.desc}</p>
          </div>
        </div>
      </div>
      <div className="roomsTitle">
        <span className="titleBackground">Our Rooms</span>
        <span className="title">Our Rooms</span>
      </div>
      <div className="roomsContainer">
        <div className="roomsItems">
          {filteredRooms.map((room) => (
            <div
              key={room?._id}
              className="roomsCard"
              onClick={() => openRoomModal(room)}
              data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="roomsImg">
                <img src={room?.img} alt={room?.title} />
              </div>
              <div className="roomsDetails">
                <span className="title">{room?.title}</span>
                <span className="price">
                  {" "}
                  <sup>$</sup> <span>{room?.price}</span> per night
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/rooms">
          <CTAButton>Learn more</CTAButton>
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
