import React from "react";
import "./CTAButton.scss";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CTAButton = ({children}) => {
  return (
    <button className="CTAButton">
      {children}
      <ChevronRightIcon className="icon" />
    </button>
  );
};

export default CTAButton;
