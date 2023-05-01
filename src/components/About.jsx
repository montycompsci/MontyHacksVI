import "../assets/css/About.scss";

import clock from "../assets/imgs/clock.svg";
import location from "../assets/imgs/location.svg";
import person from "../assets/imgs/person.svg";
import prizes from "../assets/imgs/prizes.svg";
import money from "../assets/imgs/money.svg";
import theme from "../assets/imgs/theme.svg";

function About() {
  return (
    <div id="about">
      <div style={{ height: "70px" }}></div>
      <h2 className="section-title">about</h2>
      <div className="about app-container">
        <p id="about-text">
          <img
            src={clock}
            alt="time"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">When:</strong> May 13th, 2023 <br />{" "}
          <br />
          <img
            src={location}
            alt="where"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Where:</strong> Montgomery High School
          (1016 Route 601, Skillman, NJ) <br /> <br />
          <img
            src={person}
            alt="who"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Who:</strong> Beginner and veteran
          programmers are welcome!
          <br />
          <br />
          <img
            src={prizes}
            alt="what"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">What:</strong> $15k+ in prizes, cool
          workshops, and free food and merch!
          <br />
          <br />
          <img
            src={money}
            alt="cost"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Cost:</strong> $0 — attending MontyHacks
          is completely free!
          <br />
          <br />
          <img
            src={theme}
            alt="theme"
            width="40"
            height="40"
            style={{ marginRight: "20px", marginTop: "-8px" }}
          />
          <strong class="about-section">Theme:</strong> The theme of MontyHacks
          VI is Accessibility.
          <br />
          <br />
        </p>
      </div>
      <div id="about-btn-wrapper">
        <a href="https://montyhacks-v.devpost.com/">
          <button id="about-btn">Devpost</button>
        </a>
        <a href="https://discord.gg/npnhqV6kYv">
          <button id="about-btn">Discord</button>
        </a>
      </div>
    </div>
  );
}

export default About;
