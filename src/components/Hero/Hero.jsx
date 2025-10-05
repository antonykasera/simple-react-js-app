import React from "react";
import "./Hero.css";
import dark_arrow  from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Ensuring better education for a better world</h1>
        <p>
          Welcome to Strathmore University, where innovation meets excellence. We nurture future
          leaders through world-class education and values-driven learning. Join us and shape a
          brighter tomorrow.
        </p>
        <button className="btn"> Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
