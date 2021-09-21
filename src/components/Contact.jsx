import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ContactAnimation from "../animations/ContactAnimation";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__heading">
        <p>Contact Me</p>
      </div>
      <div className="contact__content">
        <ContactAnimation />
        <div className="contact__para">
          <div className="contact__para-heading">
            <p>Want to be in touch?</p>
          </div>
          <div className="contact__para-content">
            <div className="contact__para-details">
              <p>Phone: +918840048405</p>
              <p>Email: anuraggoel27@gmail.com</p>
            </div>
            <div className="contact__para-icons">
              <button
                className="contact__content-icon phone"
                style={{ marginLeft: "0" }}
              >
                <a className="icon-link" href="tel:+918840048405">
                  <PhoneIcon />
                </a>
              </button>
              <button className="contact__content-icon mail">
                <a className="icon-link" href="mailto:anuraggoel27@gmail.com">
                  <MailIcon />
                </a>
              </button>
              <button className="contact__content-icon instagram">
                <a
                  className="icon-link"
                  href="https://www.instagram.com/_.no_one._27/"
                >
                  <InstagramIcon />
                </a>
              </button>
              <button className="contact__content-icon github">
                <a className="icon-link" href="https://github.com/anuraggoel27">
                  <GitHubIcon />
                </a>
              </button>
              <button className="contact__content-icon linkedin">
                <a
                  href="https://www.linkedin.com/in/anurag-goel-481894196/"
                  className="icon-link"
                >
                  <LinkedInIcon />
                </a>
              </button>
              <button className="contact__content-icon facebook">
                <a
                  href="https://www.facebook.com/anuragdgr8"
                  className="icon-link"
                >
                  <FacebookIcon />
                </a>
              </button>
              <button className="contact__content-icon twitter">
                <a href="https://twitter.com/anuragdgr8" className="icon-link">
                  <TwitterIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
