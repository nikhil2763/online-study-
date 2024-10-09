import React from "react";
import "../css/Discusion.css";
import group106 from "../images/Group 106.png";

export default function Discusion() {
  return (
    <div className="discusion_main_cotainer">
      <div className="discusion_container">
        <div className="discusion_first_div">
          <img className="discusion_image" src={group106} alt="discusion" />
        </div>
        <div className="discusion_second_div">
          One-on-One <br />
          <span> Discussions</span>
          <p className="discusion_text">
            Teachers and teacher assistants can talk with <br />
            students privately without leaving the Zoom
            <br /> environment.
          </p>
        </div>
        
      </div>
      <div className="discusion_btn_container">
          <button className="discusion_btn">see more features</button>
        </div>
    </div>
  );
}
