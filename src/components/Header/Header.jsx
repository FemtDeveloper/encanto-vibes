import React from "react";
import "./Header.css";
import { VscFoldDown } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="header">
      <div className="cover"></div>
      <h1>Encanto</h1>
      <a href="#main" className="scroll-enjoy">
        <h2>Enjoy the experience</h2>
        <VscFoldDown />
      </a>
    </div>
  );
};

export default Header;
