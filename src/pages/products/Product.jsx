import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/Hero";
import axios from "../../api/index";
import bg4 from "../../assets/images/hero-img4.png";
import "./Prodduct.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => SetData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  let products = data?.slice(1, 7).map((val) => (
    <Link to={`/product/${val.id}`} style={{ textDecoration: "none" }}>
      <div className="blog-card">
        <img src={val.images[0]} height={230} alt="" />
        <div className="blog-content">
          <p className="blog-text">{val.title}</p>
          <p className="blog-par" title={val.description}>
            {val.description}
          </p>
          <p className="blog-l">{val.price}$</p>
        </div>
      </div>
    </Link>
  ));
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
      <section className="blog">
        <div className="container">
          <p className="blog-title">Latest Blog & News</p>
          <div className="blog-cards">{products}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
