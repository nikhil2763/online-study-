import "../css/Header.css";
// import bgimg from "../images/Rectangle 5.jpg";
import girl from "../images/girl.png";
import polygon from "../images/polygon.png";
import logo from "../images/logo.png";
import group9 from "../images/Group9.png";

import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div>
      <div className="header_main_container">
        {/* <img src={bgimg} alt="background"/> */}
        <div className="header_first_container">
          <div className="header_polygon_container">
            <img className="header_polygon" src={polygon} alt="polygon" />
            <label className="header_skyline">Skilline</label>
          </div>

          <div className="header_link">
            <Link />
          </div>
          <div className="header_button">
            <Button />
          </div>
        </div>


        <div>
          <div className="header_text_container">
            Studying <span className="header_text" >Online is Now<br/><span className="header_text_second"> Much Easier</span></span>
          </div>
          <div>
            <span className="header_info">
              Skilline is an interesting platform that will teach <br />
              you in more an interactive way
            </span>
          </div>
          <div>
            <button className="header_join_for_free">Join For Free</button>
            <img className="header_logo" src={logo} alt="logo" />
            <p className="header_how_it_work"> Watch how it works</p>
          </div>
        </div>


        <div>
        <img className="header_girl" src={girl} alt="girl" />
        <img className="header_group9" src={group9} alt="group9" />
      </div>
    </div>
    </div>
  );
}

function Button() {
  return (
    <div className="header_button-container">
      <button className="btn1">Login</button>
      <button className="btn2">Sign-Up</button>
    </div>
  );
}

function Link() {
  return (
    <div>
      <ul className="links">
        <li>
          <a href="https://photos.google.com/?pli=1" target="blank" rel="links">
            home
          </a>
        </li>
        <li>
          <a href="$" rel="links">
            Careers
          </a>
        </li>

        <li>
          <a href="#" rel="links">
            Blog
          </a>
        </li>
        <li>
          <a href="$" rel="links">
            About-us
          </a>
        </li>
      </ul>
    </div>
  );
}
