import React from "react";
import ProjectAnimation from "../animations/ProjectAnimation";
const Projects = () => {
  return (
    <div className="project__container">
    <h2 className="project__heading">Projects</h2>
      <div className="project__content">
      <ProjectAnimation />
        <div className="project__para">
        <p>Kartavya Academy</p>
        <p>NoOne Chats</p>
        <p>Blogging website</p>
        <p>Minor projects using Python</p>
        </div>
        
      </div>

      
    </div>
  );
};

export default Projects;
