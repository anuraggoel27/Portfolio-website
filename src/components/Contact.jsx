import React from "react";
import ContactAnimation from "../animations/ContactAnimation";
const Contact = () => {
  return (
    <div className="contact__container">
<h2 className="contact__heading">Contact Me</h2>
      <div className="contact__content">
      <ContactAnimation />
        <div className="contact__para">
        <p>Phone: 8840048405</p>
        <p>Email: anuraggoel27@gmail.com</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Contact;
