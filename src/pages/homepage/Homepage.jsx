import React from "react";
import "./homepage.css";
import ElementOne from "../../components/HomePageElements/ElementOne/ElementOne";
import ElementTwo from "../../components/HomePageElements/ElementTwo/ElementTwo";
import ElementThree from "../../components/HomePageElements/ElementThree/ElementThree";
import TechnicalSpecifications from "../../components/HomePageElements/TechnicalSpecifications/TechnicalSpecifications";
import videoSource from './video.mp4'; // Make sure to import the video correctly.

const Homepage = () => {
  return (
    <div className="fullscreen-video">
      <video autoPlay muted loop style={{ width: "100%", height: "80%" }}>
        <source src={videoSource} type="video/mp4" />
      </video>
      <ElementOne />
      <ElementThree />
      <ElementTwo />
      <TechnicalSpecifications />
    </div>
  );
};

export default Homepage;
