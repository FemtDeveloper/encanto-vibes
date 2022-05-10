import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/palm-logo.svg";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleNavMenu = () => {
    setIsNavMenuActive(!isNavMenuActive);
  };

  const handleInput = () => {
    setIsSearching(!isSearching);
  };

  const handleNavbarBackground = () => {
    if (window.scrollY > 40) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  window.addEventListener("scroll", handleNavbarBackground);

  return (
    <>
      <nav className={navbarBackground ? "navbar active" : "navbar"}>
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
        <div className="nav-list--container">
          <div
            className="input-container"

            // onMouseOver={handleInputHover}
            // onMouseLeave={handleInputHover}
          >
            <form action="">
              <input
                type="text"
                className={isSearching ? "search-input active" : "search-input"}
              />
            </form>
            <BsSearch onClick={handleInput} />
          </div>
          <ul className="nav-list--desktop">
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
      </nav>
      <div
        className={isNavMenuActive ? "sidemenu active" : "sidemenu"}
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
