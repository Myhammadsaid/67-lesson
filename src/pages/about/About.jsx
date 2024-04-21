import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./About.css";
import Blog from "../blog/Blog";
import Hero from "../hero/Hero";
import bg from "../../assets/images/hero-img1.png";

function About() {
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
        img={bg}
      />
      <section className="contact">
        <div className="container">
          <div className="contact-pars">
            <p className="contact-text">
              The energy of a start-up combined with 30 years of experience
            </p>
            <p className="contact-par">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <p className="contact-stock">15+</p>
              <p className="contact-text2">Awards received</p>
              <p className="contact-par2">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
            <div className="contact-card">
              <p className="contact-stock">500+</p>
              <p className="contact-text2">Clients served</p>
              <p className="contact-par2">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
            <div className="contact-card">
              <p className="contact-stock">34</p>
              <p className="contact-text2">Employees</p>
              <p className="contact-par2">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
            <div className="contact-card">
              <p className="contact-stock">130+</p>
              <p className="contact-text2">Custom solutions</p>
              <p className="contact-par2">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default About;
