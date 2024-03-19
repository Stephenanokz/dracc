import React from "react";
import "./Error.scss";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorPage">
      <Navbar />
      <Banner title="Error 404!" subTitle="Oops something went wrong :(" />
      <div className="errorContainer">
        <h3>The page you requested cannot be found</h3>
        <p>
          Please, go back <Link to="/">Home</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Error;
