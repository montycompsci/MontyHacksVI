import "./assets/css/App.scss";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Wave from "./components/Wave";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div><Header></Header></div>
      <div className="about-container react-container" data-aos="fade-left" data-aos-once="true"><About></About></div>
      <Wave type="1" />
      <div className="faq-container react-container" data-aos="fade-right" data-aos-once="true"><FAQ></FAQ></div>
      <Wave type="2" />
      <div className="schedule-container react-container" data-aos="fade-left" data-aos-once="true"><Schedule></Schedule></div>
      <Wave type="3" />
      <div className="sponsors-container react-container" data-aos="fade-right" data-aos-once="true"><Sponsors></Sponsors></div>
    </div>
  );
}

export default App;
