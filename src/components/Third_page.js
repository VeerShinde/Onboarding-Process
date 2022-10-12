import React from "react";
import "./css/ThirdPage.css";
import Edenlogo from "./images/eden-logo.png";
import { useState } from "react";
import { IconContext } from "react-icons";
import { HiUserGroup, HiUser } from "react-icons/hi";

const Third_page = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="container">
      <img src={Edenlogo} alt="Logo" />
      <main className="heading">
        <h2>How are you planning to use Eden?</h2>
        <span>
          <h5>We'll streamline your setup experience accordingly.</h5>
        </span>
      </main>
      <div className="card">
        <input type="radio" name="option" id="option1" />
        <label htmlFor="option1">
          <h5>For myself</h5>
          <p>Write better. Think more clearly. Stay organized.</p>
        </label>
      </div>
      <div className="card card1">
        <input type="radio" name="option2" id="option2" className="option2" />
        <label htmlFor="option2">
          <h5>For team</h5>
          <p>Write better. Think more clearly. Stay organized.</p>
        </label>
      </div>

      <section className="select">
        <div className="button">
          <button>Create Workspace</button>
        </div>
      </section>
    </div>
  );
};

export default Third_page;
