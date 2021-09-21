import React from "react";
import {
  Header,
  About,
  Education,
  Projects,
  Skills,
  Footer,
  Contact,
  ScrollToTop,
} from "./components/index.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


AOS.init();
const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <div className="body__container">
        <div className="content__container">
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
