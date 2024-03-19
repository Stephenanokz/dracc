import React, { useEffect, useState } from "react";
import "./RoomsInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import WarningIcon from "@mui/icons-material/Warning";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";

const RoomsInfo = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage, setRoomsPerPage] = useState(9);

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

  const lastRoomIndex = currentPage * roomsPerPage;
  const firstRoomIndex = lastRoomIndex - roomsPerPage;

  const currentRooms = rooms.slice(firstRoomIndex, lastRoomIndex);

  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openRoomModal = (room) => {
    setIsOpen(!isOpen);
    setSelectedCard(room);
  };

  return (
    <div className="roomsInfo">
      <Banner title="Our Rooms" subTitle="Browse through our rooms & suites" />
      <div className="note">
        <WarningIcon className="icon" />
        <span>
          Please note: Online room booking is unavailable at the moment. To make
          reservations, please reach out to us via our{" "}
          <Link to="/contact">contact page</Link>
        </span>
      </div>
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
      <div className="roomsContainer">
        {isLoading ? (
          <div className="loading__inline">Loading...</div>
        ) : (
          <div className="roomsItems">
            {currentRooms.map((room) => (
              <div
                key={room?._id}
                className="roomsCard"
                onClick={() => openRoomModal(room)}
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
        )}
      </div>
      <Pagination
        totalItems={rooms.length}
        itemsPerPage={roomsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default RoomsInfo;
