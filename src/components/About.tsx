import React from "react";

function About() {
  return (
    <div className="container">
      <img
        className="about-image"
        src="./pictures/AboutMain.png"
        width="490"
        height="790"
      />
      <div className="main-text-container">
        <h2 className="page-title">About</h2>
        <h1 className="logo-title">Tony's Coffee</h1>
        <p className="body-text">Coffee Shop in Vancouver</p>
        <p className="sub-title">We're still here at Broadway!</p>
        <ul className="body-list">
          <li className="body-text">Call for pick up</li>
          <li className="body-text">Drop by for take away</li>
          <li className="body-text">Available for Eat-In & Free Wi-Fi</li>
          <li className="body-text">Breakfast, Lunch, or Coffee break</li>
        </ul>
        <div className="open-hour-texts">
          <p className="sub-title">Open</p>
          <p className="body-text">Monday - Friday</p>
          <p className="body-text">7:00 am - 3:30 pm</p>
        </div>
      </div>
    </div>
  );
}

export default About;
