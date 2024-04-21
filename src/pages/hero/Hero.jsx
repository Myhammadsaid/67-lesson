import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div>
      <section className="heros">
        <div className="container">
          <div className="hero-style2">
            <div className="hero-content2">
              <p className="hero-text3">{props.title}</p>
              <p className="hero-par2">{props.par}</p>
              <button className="hero-btn2">Work With Us</button>
            </div>
            <img src={props.img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
