import React from "react";
import SkillsAnimation from "../animations/SkillsAnimation.js";
import {
  FaReact,
  FaNode,
  FaPython,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import { DiJavascript, DiMongodb} from "react-icons/di";
const Skills = () => {
  return (
    <div className="skills__container">
      <div className="skills__heading">
        <p>SKILLS</p>
      </div>
      <div className="skills__content">
        <SkillsAnimation />
        <div className="skills__content-inner">
          <div className="skills__para">
            <p>Frontend Development</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  "backgroundColor": "#52616B",
                  height: "100%",
                  width: "70%",
                  "borderRadius": "10px",
                }}
              ></div>
            </div>
            <p>Backend Development</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  "backgroundColor": "#52616B",
                  height: "100%",
                  width: "60%",
                  "borderRadius": "10px",
                }}
              ></div>
            </div>
            <p>Programming</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  "backgroundColor": "#52616B",
                  height: "100%",
                  width: "80%",
                  "borderRadius": "10px",
                }}
              ></div>
            </div>
            <p>Python</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  "backgroundColor": "#52616B",
                  height: "100%",
                  width: "80%",
                  "borderRadius": "10px",
                }}
              ></div>
            </div>
            <p>C/C++</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  "backgroundColor": "#52616B",
                  height: "100%",
                  width: "70%",
                  "borderRadius": "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="skills__language">
            <div className="language-heading"><p>TECHNOLOGIES</p></div>
            <div className="skills__language-inner">
            <div className="skill-trio">
              <div className="skill">
                <FaReact size={60} />
              </div>
              <div className="skill">
                <FaNode size={60} />
              </div>
              <div className="skill">
                <FaPython size={60} />
              </div>
            </div>
            <div className="skill-trio">
              <div className="skill">
                <DiMongodb size={60} />
              </div>
              <div className="skill">
                <FaHtml5 size={60} />
              </div>
              <div className="skill">
                <DiJavascript size={60} />
              </div>
            </div>
            <div className="skill-trio">
              <div className="skill">
                <FaCss3Alt size={60} />
              </div>
              <div className="skill">
                <FaDatabase size={60} />
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
