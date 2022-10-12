import React from "react";
import "./css/FirstPage.css";
import Edenlogo from "./images/eden-logo.png";

const First_page = () => {
  return (
    <div className="container">
      <img src={Edenlogo} alt="Logo" />
      <main className="heading">
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </main>
      <section className="form">
        <div className="input1">
          <label className="name">Full Name</label>
          <br />
          <input type="text" placeholder="Steve Jobs" />
        </div>

        <div className="input2">
          <label className="name">Display Name</label>
          <br />
          <input type="text" placeholder="Steve" />
        </div>

        <div className="btn">
          <button>Create Workspace</button>
        </div>
      </section>
    </div>
  );
};

export default First_page;
