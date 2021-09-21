import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="scroll-button__container"
      style={{ display: visible ? "inline" : "none" }}
    >
      <HashLink to="#top">
        <button className="scroll-button">⬆</button>
      </HashLink>
    </div>
  );
};

export default ScrollToTop;
