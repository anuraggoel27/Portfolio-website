import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMinus } from "react-icons/ai";
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div>
      <div
        className={
          collapsed
            ? "custom-navbar navbar-collapsed"
            : "custom-navbar navbar-expanded"
        }
      >
        <h1 className="navbar__heading">Navbar</h1>
      </div>

      <button className="toggler-button" onClick={handleClick}>
        <AiOutlineMinus className={collapsed ? "top" : "top top-expanded"} />
        <AiOutlineMinus
          className={collapsed ? "middle" : "middle middle-expanded"}
        />
        <AiOutlineMinus
          className={collapsed ? "bottom" : "bottom bottom-expanded"}
        />
      </button>
    </div>
  );
};

export default Navbar;
