import React from 'react';
import Lottie from "react-lottie";
import * as contact from "./contact.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: contact.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const ContactAnimation = () => {
    return (
        <div className="lottie-animation">
            <Lottie options={defaultOptions} height={300} width={300}/>
        </div>
    )
}

export default ContactAnimation
