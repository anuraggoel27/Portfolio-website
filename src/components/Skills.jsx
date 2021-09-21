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

import { DiJavascript, DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills__container" id="skills">
      <div className="skills__heading">
        <p>SKILLS</p>
      </div>
      <div className="skills__content">
        <SkillsAnimation />
        <div className="skills__content-inner" style={{overflow:"hidden"}}>
          <div data-aos="fade-right" data-aos-duration="1000" className="skills__para">
            <p>Frontend Development</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  backgroundColor: "#52616B",
                  height: "100%",
                  width: "70%",
                  borderRadius: "10px",
                }}
              >
              <span style={{backgroundColor:"#52616B" ,marginLeft:"85%",position: "relative",top:"0.1rem"}}>7/10</span>
            </div>
            
            </div>
            <p>Backend Development</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  backgroundColor: "#52616B",
                  height: "100%",
                  width: "60%",
                  borderRadius: "10px",
                }}
              >
                <span style={{backgroundColor:"#52616B" ,marginLeft:"80%",position: "relative",top:"0.1rem"}}>6/10</span>
              </div>
            </div>
            <p>Programming</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  backgroundColor: "#52616B",
                  height: "100%",
                  width: "80%",
                  borderRadius: "10px",
                }}
              >
                <span style={{backgroundColor:"#52616B" ,marginLeft:"85%",position: "relative",top:"0.1rem"}}>8/10</span>
              </div>
            </div>
            <p>Python</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  backgroundColor: "#52616B",
                  height: "100%",
                  width: "80%",
                  borderRadius: "10px",
                }}
              >
                <span style={{backgroundColor:"#52616B" ,marginLeft:"85%",position: "relative",top:"0.1rem"}}>8/10</span>
              </div>
            </div>
            <p>C/C++</p>
            <div className="skill-progress">
              <div
                className="progress"
                style={{
                  backgroundColor: "#52616B",
                  height: "100%",
                  width: "70%",
                  borderRadius: "10px",
                }}
              >
                <span style={{backgroundColor:"#52616B" ,marginLeft:"85%",position: "relative",top:"0.1rem"}}>7/10</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="skills__language">
            <div className="language-heading">
              <p>TECHNOLOGIES</p>
            </div>
            <div className="skills__language-inner">
              <div className="skill-trio">
                <div className="skill">
                  <FaReact size={60} />
                  <span>ReactJS</span>
                </div>
                <div className="skill">
                  <FaNode size={60} />
                  <span>NodeJS</span>
                </div>
                <div className="skill">
                  <FaPython size={60} />
                  <span>Python</span>
                </div>
              </div>
              <div className="skill-trio">
                <div className="skill">
                  <DiMongodb size={60} />
                  <span>MongoDB</span>
                </div>
                <div className="skill">
                  <FaHtml5 size={60} />
                  <span>HTML5</span>
                </div>
                <div className="skill">
                  <DiJavascript size={60} />
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="skill-trio">
                <div className="skill">
                  <FaCss3Alt size={60} />
                  <span>CSS3</span>
                </div>
                <div className="skill">
                  <FaDatabase size={60} />
                  <div>
                  <span>FireBase</span>
                  </div>
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
