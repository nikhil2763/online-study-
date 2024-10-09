import React from "react";
import "../css/Tools.css";
import group122 from "../images/Group 122.png"

export default function Tools() {
  return (
    <div className="tools_main_container">
      <div className="tools_first_container">
        Tools <span>For Teachers<br/> And Learners</span>
        <p className="tools_text">Class has a dynamic set of teaching tools built to<br/> be deployed and used during class.
        Teachers can <br/>handout assignments in real-time for students to<br/> complete and submit.</p>
      </div>
      <div>
        <img className="tools_image_main" src={group122} alt="girlimage" />
      </div>
    </div>
  );
}
