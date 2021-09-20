import React from 'react';
import Lottie from "react-lottie";
import * as project from "./project_final.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: project.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const ProjectAnimation = () => {
    return (
        <div className="lottie-animation common">
            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default ProjectAnimation;