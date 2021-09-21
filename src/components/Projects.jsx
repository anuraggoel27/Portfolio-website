import React from "react";
import ProjectAnimation from "../animations/ProjectAnimation";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import { FaReact, FaNode, FaPython, FaDatabase } from "react-icons/fa";
import { GiPaperBoat } from "react-icons/gi";
import { SiFlask, SiAuth0 } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const Projects = () => {
  return (
    <div className="project__container" id="projects">
      <div className="project__heading">
        <p>PROJECTS</p>
      </div>
      <div className="project__content">
        <ProjectAnimation />
        <div className="project__projects">
          <div className="project__project">
            <a
              href="https://kartavya-academy-777bf.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__title"
            >
              Kartavya Academy
            </a>
            <p className="project__description">
              Full-Stack website for a coaching insitute.
            </p>
            <div className="project__tech-used">
              <LightTooltip title="ReactJS" placement="bottom">
                <div className="project__tech" style={{ marginLeft: "0" }}>
                  <FaReact size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="NodeJS" placement="bottom">
                <div className="project__tech">
                  <FaNode size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="FireBase" placement="bottom">
                <div className="project__tech">
                  <FaDatabase size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="MongoDB" placement="bottom">
                <div className="project__tech">
                  <DiMongodb size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="Auth0" placement="bottom">
                <div className="project__tech">
                  <SiAuth0 size={40} />
                </div>
              </LightTooltip>
            </div>
          </div>
          <div className="project__project">
            <a
              href="http://noone-chats.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__title"
            >
              NoOne Chats
            </a>
            <p className="project__description">
              A realtime chatting web-application.
            </p>
            <div className="project__tech-used">
              <LightTooltip title="ReactJS" placement="bottom">
                <div className="project__tech" style={{ marginLeft: "0" }}>
                  <FaReact size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="NodeJS" placement="bottom">
                <div className="project__tech">
                  <FaNode size={40} />
                </div>
              </LightTooltip>
              <LightTooltip title="Stream.io" placement="bottom">
                <div className="project__tech">
                  <GiPaperBoat size={40} />
                </div>
              </LightTooltip>
            </div>
          </div>
          <div className="project__project">
            <a
              href="http://no-one-blogs.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project__title"
            >
              NoOne Blogs
            </a>
            <p className="project__description">
              Get started with blogging and get to know what others are
              blogging.
            </p>
            <div className="project__tech-used">
              <LightTooltip title="Flask" placement="bottom">
                <div className="project__tech" style={{ marginLeft: "0" }}>
                  <SiFlask size={40} />
                </div>
              </LightTooltip>
            </div>
          </div>
          <div className="project__project">
            <a
              href="https://github.com/anuraggoel27?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="project__title"
            >
              Other mini-projects
            </a>
            <p className="project__description">
              I have made various mini-projects using Python like typing speed
              test and automations applications usign Selenium and many more.
            </p>
            <div className="project__tech-used">
              <LightTooltip title="Python" placement="bottom">
                <div className="project__tech" style={{ marginLeft: "0" }}>
                  <FaPython size={40} />
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
