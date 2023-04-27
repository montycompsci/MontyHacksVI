import "../assets/css/Header.scss";
import Logo from "../assets/imgs/logo.png";

function Header() {
  return (
    <div className="head">
      <div data-aos="flip-up" data-aos-duration="2000" data-aos-once="true">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            size="250"
            height="250"
            className="logo"
          ></img>
        </div>
        <h1 className="title">MontyHacks v</h1>
        <br />
        <h3 className="hackathon-date">june 11th</h3>
        <br />
        <div id="signup-btn-wrapper">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNDT4Dtgm7PB7v9xPtlmylRjVkhchQ0L5HWHdUb5CKPOKQFA/viewform?usp=sf_link">
            <button id="signup-btn">Sign up</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
