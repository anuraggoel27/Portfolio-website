import React from "react";
import ProjectAnimation from "../animations/ProjectAnimation";
import {
  FaReact,
  FaNode,
  FaPython,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import { GiPaperBoat } from "react-icons/gi";
import { SiFlask, SiAuth0 } from "react-icons/si";
import { DiJavascript, DiMongodb } from "react-icons/di";
const Projects = () => {
  return (
    <div className="project__container">
      <div className="project__heading">
        <p>PROJECTS</p>
      </div>
      <div className="project__content">
        <ProjectAnimation />
        <div className="project__projects">
          <div className="project__project">
            <p className="project__title">Kartavya Academy</p>
            <p className="project__description">
              Full-Stack website for a coaching insitute.
            </p>
            <div className="project__tech-used">
              <div className="project__tech" style={{ marginLeft: "0" }}>
                <FaReact size={40} />
              </div>
              <div className="project__tech">
                <FaNode size={40} />
              </div>
              <div className="project__tech">
                <FaDatabase size={40} />
              </div>
              <div className="project__tech">
                <DiMongodb size={40} />
              </div>
              <div className="project__tech">
                <SiAuth0 size={40} />
              </div>
            </div>
          </div>
          <div className="project__project">
            <p className="project__title">NoOne Chats</p>
            <p className="project__description">
              A realtime chatting web-application.
            </p>
            <div className="project__tech-used">
              <div className="project__tech">
                <FaReact size={40} />
              </div>
              <div className="project__tech">
                <FaNode size={40} />
              </div>
              <div className="project__tech">
                <GiPaperBoat size={40} />
              </div>
            </div>
          </div>
          <div className="project__project">
            <p className="project__title">NoOne Blogs</p>
            <p className="project__description">
              Get started with blogging and get to know what others are
              blogging.
            </p>
            <div className="project__tech-used">
              <div className="project__tech">
                <SiFlask size={40} />
              </div>
            </div>
          </div>
          <div className="project__project">
            <p className="project__title">Other mini-projects</p>
            <p className="project__description">
              I have also created various mini-projects using python like typing
              speed test app, various automation apps using Selenium and many
              more.
            </p>
            <div className="project__tech-used">
              <div className="project__tech">
                <FaPython size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
