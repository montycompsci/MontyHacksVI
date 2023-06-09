import "../assets/css/Header.scss";
import Logo from "../assets/imgs/montyhacks-transparent.png";

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
        <h1 className="title">MontyHacks VI</h1>
        <br />
        <h3 className="hackathon-date">May 13th</h3>
        <br />
        <div id="signup-btn-wrapper">
          <a href="https://forms.gle/ekNNm445dsrgb5SN8">
            {/* Change the form */}
            <button id="signup-btn">Sign up</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
