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
        <div className="lottie-animation">
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default EducationAnimation
