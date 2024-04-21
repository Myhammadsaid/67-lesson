import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import logo1 from "../../assets/images/hero-logo1.svg";
import logo2 from "../../assets/images/hero-logo2.svg";
import logo3 from "../../assets/images/hero-logo3.svg";
import hero from "../../assets/images/hero-img.png";
import "./Home.css";
import Blog from "../blog/Blog";

function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <div className="hero-content">
              <p className="hero-text">Prosper with our bespoke solutions</p>
              <p className="hero-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique
              </p>
              <div className="hero-btns">
                <button className="hero-btn1">See our services</button>
                <button className="hero-btn2">See our services</button>
              </div>
              <p className="hero-text2">See our services</p>
              <div className="images">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
              </div>
            </div>
            <img className="hero-img" src={hero} alt="" />
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
