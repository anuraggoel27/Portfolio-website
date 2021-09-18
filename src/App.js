import React from "react";
import {
  Header,
  About,
  Education,
  Projects,
  Skills,
  Footer,
  Contact,
} from "./components/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <div className="body__container">
        <div className="content__container">
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <div className="footer">
            <Footer />
          </div>
    </div>
  );
};

export default App;
