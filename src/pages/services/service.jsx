import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Blog from "../blog/Blog";
import Hero from "../hero/Hero";
import "./service.css";
import bg2 from "../../assets/images/hero-img2.png";

const service = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"We serve clients with ground breaking solutions"}
        par={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        }
        img={bg2}
      />
      <Blog />
      <Footer />
    </div>
  );
};

export default service;
