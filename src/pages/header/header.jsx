import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const header = () => {
  const [toggle, setToggle] = useState(false);
  const toggles = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <img src={Logo} alt="" />
            </a>
            <div
              className={`nav-links ${toggle ? "open" : ""}`}
              id="navbar-responsive"
            >
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              <Link className="nav-link" to={"/service"}>
                Service
              </Link>
              <Link className="nav-link" to={"/careers"}>
                Careers
              </Link>
              <Link className="nav-link" to={"/blog"}>
                Blog
              </Link>
              <button className="nav-btn">Clone project</button>
            </div>
            <button onClick={toggles} class="menu-btn" id="menu-btn">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default header;
