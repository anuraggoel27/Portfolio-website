import React from "react";
import SkillsAnimation from "../animations/SkillsAnimation.js";
const Skills = () => {
  return (
    <div className="skills__container">
    <h2 className="skills__heading">Skills</h2>
      <div className="skills__content">
        <div className="skills__para">
        <p>Frontend Development - 7/10</p>
        <p>Backend Development - 6/10</p>
        <p>Programming - 8/10 </p>
        <p>Python - 7/10</p>
        <p>C/C++ - 6/10</p>
        </div>
        <SkillsAnimation />
      </div>
      
    </div>
  );
};

export default Skills;
