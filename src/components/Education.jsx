import React from "react";
import EducationAnimation from "../animations/EducationAnimation";
const Education = () => {
  return (
    <div className="education__container" id="education">
      <div className="education__heading">
        <p>EDUCATION</p>
      </div>
      <div className="education__content">
        <EducationAnimation />
        <div className="education__para" style={{overflow:"hidden"}}>
          <div data-aos="fade-right" data-aos-duration="1000" className="education-class">
            <p className="education-school">
              Internation Institute Of Information Technology, Bhubaneswar.
            </p>
            <p className="education-year">2019-23</p>
            <p className="education-division">B.Tech in CSE</p>
            <p className="education-grades">CGPA - 8.06</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="education-class">
            <p className="education-school">Sri Raghukul Vidyapeeth, Gonda</p>
            <p className="education-year">2018</p>
            <p className="education-division">Class 12th</p>
            <p className="education-grades">Percentage - 86%</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="education-class">
            <p className="education-school">
              Fatima Senior Secondary School, Gonda
            </p>
            <p className="education-year">2016</p>
            <p className="education-division">Class 10th</p>
            <p className="education-grades">CGPA - 10 cgpa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
