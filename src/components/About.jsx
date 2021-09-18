import React from "react";
import AboutAnimation from "../animations/AboutAnimation";
const About = () => {
  return (
    <div className="about__container">
    <h2 className="about__heading">About</h2>
      <div className="about__content">
        <div className="about__para">
        <p>
          Hello My name is <strong>Anurag Goel</strong>. I am currently persuing
          BTech from IIIT-Bh. I am a MERN-Stack web developer. I have also
          worked on data analysis, FLASK web development, Selenium etc. I also
          do problem solving.
        </p>
        </div>
        <AboutAnimation className="about__animation"/>
      </div>
    </div>
  );
};

export default About;
