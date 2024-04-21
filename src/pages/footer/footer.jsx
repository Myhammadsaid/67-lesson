import React from "react";
import "./footer.css";
import logo from "../../assets/images/Logo2.svg";
import social from "../../assets/images/Social.png";

const footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-style">
            <div className="footer-links">
              <a href="#" className="footer-title">
                <img src={logo} alt="" />
              </a>
              <a href="#" className="footer-b-link">
                Bespoke software solutions
              </a>
              <img src={social} alt="" />
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Company
              </a>
              <a href="#" className="footer-link">
                About Us
              </a>
              <a href="#" className="footer-link">
                Careers{" "}
              </a>
              <a href="#" className="footer-link">
                Services
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Connect
              </a>
              <a href="#" className="footer-link">
                hi@finsweet.com
              </a>
              <a href="#" className="footer-link">
                +(123) 456-7890
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-title">
                Join Newsletter
              </a>
              <form action="">
                <input type="text" placeholder="Type email here" />
                <button className="footer-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
