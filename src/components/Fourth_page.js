import React from "react";
import "./css/FourthPage.css";
import Edenlogo from "./images/eden-logo.png";
import CheckIcon from "@mui/icons-material/Check";

const Fourth_page = () => {
  return (
    <div className="container">
      <img src={Edenlogo} alt="Logo" />
      <span className="Done">
        <CheckIcon />
      </span>
      <div className="heading">
        <h2>Congratulations, Eren!</h2>
        <span>
          You have completed onboarding, you can start using the Eden!
        </span>
        <div className="button">
          <button>Launch Eden</button>
        </div>
      </div>
    </div>
  );
};

export default Fourth_page;
