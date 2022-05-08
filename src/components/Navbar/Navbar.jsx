import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/palm-logo.svg";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);

  const handleNavMenu = () => {
    setIsNavMenuActive(!isNavMenuActive);
  };

  const handleInputHover = () => {
    setIsSearching(!isSearching);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" href="#home">
          <img src={logo} alt="logo" className="filter-svg" />
        </Link>
        <div
          className={isNavMenuActive ? "nav-menu active" : "nav-menu"}
          onClick={handleNavMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="text"
            className={isSearching ? "navbar-input-active" : "navbar-input"}
          />
          <BsSearch
            onMouseOver={handleInputHover}
            onMouseLeave={handleInputHover}
          />
        </div>
      </nav>
      <div
        className={isNavMenuActive ? "mobile-navbar active" : "mobile-navbar"}
        onMouseLeave={handleNavMenu}
      >
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home"> Home</a>
          </li>
          <li className="nav-item">
            <a href="#contact"> Contact</a>
          </li>
          <li className="nav-item">
            <a href="#aboutUs"> About us</a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
