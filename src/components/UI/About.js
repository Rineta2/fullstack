import React from "react";

import { AboutData, aboutText, dataLinks } from "../data/data";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about__container container grid">
        <div className="content">
          {AboutData.map((item) => {
            return (
              <div className="box" key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.img} alt="" />
              </div>
            );
          })}

          <div className="box__content">
            {aboutText.map((item) => {
              return (
                <div className="text" key={item.id}>
                  <p>{item.text}</p>
                </div>
              );
            })}

            <div className="data">
              {dataLinks.map((item) => {
                return (
                  <Link to={item.path} key={item.id}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
