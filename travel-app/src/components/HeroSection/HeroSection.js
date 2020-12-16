import React from "react";
import Button from "../Button/Button";
import './HeroSection.css';
import '../../App.css';

import videoTest from "../../videos/travel.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={videoTest} autoPlay loop muted />
      
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
