import React from 'react';
import Lottie from "react-lottie";
import * as education from "./education.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: education.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const EducationAnimation = () => {
    return (
        <div className="lottie-animation common">
            <Lottie options={defaultOptions}/>
        </div>
    )
}

export default EducationAnimation
