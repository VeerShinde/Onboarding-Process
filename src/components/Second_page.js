import React from "react";
import "./css/SecondPage.css";
import Edenlogo from "./images/eden-logo.png";

const Second_page = () => {
  return (
    <div className="container">
      <img src={Edenlogo} alt="Logo" />
      <main className="heading">
        <h2>Let's set up a home for all your work</h2>
        <span>
          <h5>You can always create another workspace later.</h5>
        </span>
      </main>
      <section className="form">
        <div className="input1">
          <label>Workspace Name</label>
          <br />
          <input type="text" placeholder="Eden" />
        </div>

        <div className="inputURL">
          <label className="workspace">
            Workspace URL<span>(optional)</span>
          </label>
          <div>
            <span>
              <p>www.eden.com/</p>
              <input type="email" placeholder="Example" />
            </span>
          </div>
        </div>

        <div className="btn">
          <button>Create Workspace</button>
        </div>
      </section>
    </div>
  );
};

export default Second_page;
