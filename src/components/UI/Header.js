import React from "react";

import { navLinks } from "../data/data";

import { Link } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";

import "../sass/Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="profile">
          <h2>Fase & Ruangan Tbk.</h2>
        </div>

        <ul>
          {navLinks.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="menu">
          <CiMenuFries className="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
