import React from 'react';
import Lottie from "react-lottie";
import * as skills from "./skills.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: skills.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const SkillsAnimation = () => {
    return (
        <div className="lottie-animation common">
            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default SkillsAnimation
