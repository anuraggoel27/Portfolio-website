import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMinus } from "react-icons/ai";
import { NavHashLink } from "react-router-hash-link";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 1250,
});

const OnAtMostTablet = layout.isAtMost("tablet");
const OnDesktop = layout.is("desktop");
const Navbar = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
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
        <div className="navbar__content">
          <NavHashLink
            smooth
            to="/page#about"
            scroll={(el) => scrollWithOffset(el)}
            onClick={handleClick}
          >
            <div className="navbar__navlink">Home</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#skills"
            scroll={(el) => scrollWithOffset(el)}
            onClick={handleClick}
          >
            <div className="navbar__navlink">Skills</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#education"
            scroll={(el) => scrollWithOffset(el)}
            onClick={handleClick}
          >
            <div className="navbar__navlink">Education</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#projects"
            scroll={(el) => scrollWithOffset(el)}
            onClick={handleClick}
          >
            <div className="navbar__navlink">Projects</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#contact"
            scroll={(el) => scrollWithOffset(el)}
            onClick={handleClick}
          >
            <div className="navbar__navlink">Contact Me</div>
          </NavHashLink>
        </div>
      </div>
      <OnAtMostTablet>
        <button className="toggler-button" onClick={handleClick}>
          <AiOutlineMinus className={collapsed ? "top" : "top top-expanded"} />
          <AiOutlineMinus
            className={collapsed ? "middle" : "middle middle-expanded"}
          />
          <AiOutlineMinus
            className={collapsed ? "bottom" : "bottom bottom-expanded"}
          />
        </button>
      </OnAtMostTablet>

      <OnDesktop>
        <div className="desktop-navbar">
          <NavHashLink
            smooth
            to="/page#about"
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className="desktop-navbar__link">Home</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#skills"
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className="desktop-navbar__link">Skills</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#education"
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className="desktop-navbar__link">Education</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#projects"
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className="desktop-navbar__link">Projects</div>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/page#contact"
            scroll={(el) => scrollWithOffset(el)}
          >
            <div className="desktop-navbar__link">Contact</div>
          </NavHashLink>
        </div>
      </OnDesktop>
    </div>
  );
};

export default Navbar;
