import React from 'react';
import Lottie from "react-lottie";
import * as about from "./about.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: about.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const AboutAnimation = () => {
    return (
        <div className="lottie-animation">
            <Lottie options={defaultOptions} height={300} width={305}/>
        </div>
    )
}

export default AboutAnimation
