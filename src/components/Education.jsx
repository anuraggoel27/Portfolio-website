import React from "react";
import EducationAnimation from "../animations/EducationAnimation";
const Education = () => {
  return (
    <div className="education__container">
    <h2 className="education__heading">Education</h2>
      <div className="education__content">
        <EducationAnimation />
        <div className="education__para">
        <p>Internation Institute Of Information Technology, Bhubaneswar.</p>
        <p>Sri Raghukul Vidyapeeth, Gonda</p>
        <p>Fatima Senior Secondary School, Gonda</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Education;
