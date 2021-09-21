import React from "react";
import { Navbar } from "./";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__heading">
        <a href="/">
          <p>NoOne Codes</p>
        </a>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
