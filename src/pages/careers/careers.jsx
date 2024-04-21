import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Blog from "../blog/Blog";
import bg3 from "../../assets/images/hero-img3.png";
import Hero from "../hero/Hero";
import "./careers.css";

const careers = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"We hired people who are very passionate about what they do"}
        par={
          "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw."
        }
        img={bg3}
      />
      <Blog />
      <Footer />
    </div>
  );
};

export default careers;
