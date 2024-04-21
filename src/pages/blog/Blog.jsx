import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const Blog = () => {
  const data = [
    {
      id: 1,
      img: blog1,
      text: "Why you have to digitalize in 2021",
      par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur sit amet eros blandit, hendrerit elit et.`,
      learn: "Learn More &gt;",
    },
    {
      id: 2,
      img: blog2,
      text: "Why you have to digitalize in 2021",
      par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sit amet eros blandit, hendrerit elit et.`,
      learn: "Learn More &gt;",
    },
    {
      id: 3,
      img: blog3,
      text: "Why you have to digitalize in 2021",
      par: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sit amet eros blandit, hendrerit elit et.`,
      learn: "Learn More &gt;",
    },
  ];
  let date = data?.map((val) => (
    <div key={val.id} className="blog-card">
      <img src={val.img} alt="" />
      <div className="blog-content">
        <p className="blog-text">{val.text}</p>
        <p className="blog-par">{val.par}</p>
        <p className="blog-l">{val.learn}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <section className="blog">
        <div className="container">
          <p className="blog-title">Latest Blog & News</p>
          <div className="blog-cards">{date}</div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
