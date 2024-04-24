import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "../../api/index";
import "./Single.css";

const Single = () => {
  const { id } = useParams();

  const [product, SetProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => SetProduct(res.data))
      .catch((res) => console.log(res));
  }, []);
  return (
    <div>
      <Header />
      {/* <img src={product?.images[0]} alt="" /> */}
      <section className="single">
        <div className="container">
          <div className="single-style">
            <img src={product?.images[0]} width={500} height={400} alt="" />
            <div className="single-content">
              <h1>{product?.title}</h1>
              <h3>{product?.price}$</h3>
              <p>{product?.description}</p>
              <p>Stock({product?.stock})</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Single;
