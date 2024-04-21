import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/Hero";
import bg4 from "../../assets/images/hero-img4.png";
import Blog from "../blog/Blog";
import "./blogs.css";

const blogs = () => {
  return (
    <div>
      <Header />
      <Hero
        title={
          "We value human, organizational, and operational intelligence, not just artificial"
        }
        par={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        }
        img={bg4}
      />
      <Footer />
    </div>
  );
};

export default blogs;
