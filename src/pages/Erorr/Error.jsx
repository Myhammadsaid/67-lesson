import React from "react";
import notfound from "../../assets/images/404.png";
import Header from "../header/header";
import Footer from "../footer/footer";
const Error = () => {
  return (
    <div>
      <Header />
      <img style={{ width: "1340px" }} src={notfound} alt="" />
      <Footer />
    </div>
  );
};

export default Error;
