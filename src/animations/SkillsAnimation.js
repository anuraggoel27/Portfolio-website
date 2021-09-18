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
        <div className="lottie-animation">
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default SkillsAnimation
