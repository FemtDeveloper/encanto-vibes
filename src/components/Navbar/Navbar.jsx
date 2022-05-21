import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/imgs/palm-logo.svg";
import "./Navbar.css";
import { useClickOutside } from "./useClickOutside";
// import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleMobileMenu = (e) => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavbarBackground = () => {
    if (window.scrollY > 600) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };
  window.addEventListener("scroll", handleNavbarBackground);

  const clickHandler = useClickOutside(() => {
    setIsMobileMenuOpen(false);
  });

  return (
    <>
      <nav className={navbarBackground ? "navbar active" : "navbar"}>
        <Link to="/" href="#home">
          <img src={logo} alt="logo" className="filter-svg" />
        </Link>
        <h3>Encanto</h3>
        <div
          className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}
          onClick={handleMobileMenu}
          ref={clickHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-list--container">
          {/* <div className="input-container">
            <form action="">
              <input
                type="text"
                className={isSearching ? "search-input active" : "search-input"}
              />
            </form>
            <BsSearch onClick={handleInput} />
          </div> */}
          <ul className="nav-list--desktop">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropDown}
              >
                Enjoy
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu-dark ${
                  isDropdownOpen ? "notShow" : ""
                }`}
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/beaches">
                    Beaches
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mountains">
                    Mountains
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/rivers">
                    Rivers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#contact">
                {" "}
                Contact
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#aboutUs">
                {" "}
                About us
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={isMobileMenuOpen ? "sidemenu active" : "sidemenu"}
        onMouseLeave={handleDropDown}
      >
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/beaches">Beaches</Link>
          </li>
          <li className="nav-item">
            <Link to="/mountains">Mountains</Link>
          </li>
          <li className="nav-item">
            <Link to="/rivers">Rivers</Link>
          </li>

          <li className="nav-item">
            <HashLink smooth to="/#contact">
              {" "}
              Contact
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#aboutUs">
              {" "}
              About us
            </HashLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
