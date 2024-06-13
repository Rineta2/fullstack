import React from "react";

import { homeData, homeImg } from "../data/data";

import { Link } from "react-router-dom";

import "../sass/Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container container grid">
        <div className="content">
          {homeData.map((item) => {
            return (
              <div className="title" key={item.id}>
                <h1>{item.title}</h1>
                <h3>{item.text}</h3>

                <Link to={item.path} className="btn">
                  {item.name}
                </Link>
              </div>
            );
          })}

          {homeImg.map((item) => {
            return (
              <div className="img">
                <img src={item.img} alt="Home" loading="lazy" quality="100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
