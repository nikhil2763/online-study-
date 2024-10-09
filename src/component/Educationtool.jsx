import React from "react";
import "../css/Educationtool.css";
import image5 from "../images/image 5.png";
import image3 from "../images/image 3.png";
import image6 from "../images/image 6.png";
import { GrOnedrive } from "react-icons/gr";

export default function Educationtool() {
  return (
    <div className="education_main_container">
      <div className="education_main_first">
        <div className="education_first_div">
          <div>
            <GrOnedrive className="education_iconone" />

            <img src={image5} alt="asitis" />
          </div>
        </div>
        <p className="education_onedrive">One Drive</p>

        <div className="education_drive">
          <img src={image3} alt="drive" />
          <img src={image6} alt="teams" />
        </div>
      </div>

      <div className="education_main_second">
        <span className="education_integration">
          {" "}
          <hr />
          integration
        </span>
        <p className="education_platform">
          200+ educational tools and<br/> platform integrations
        </p>
        <span className="education_text">
          Schoology has every tool your classroom needs and comes<br/> pre-integrated
          with more than 200+ tools, student information<br/> systems (SIS), and
          education platforms.
        </span>
        <div className="education_button"><button className="education_btn">see all integration</button></div>
      </div>
    </div>
  );
}
