import React from "react";
import group92 from "../images/Group 92.png"
import "../css/Assisment.css"

export default function Assisment() {
  return (
    <div className="assisment_main">
      <div className="assisment_first_div">
        <img className="assismemt_image" src={group92} alt="one" />
      </div>
      <div className="assisment_second_div">
      Assessments,<br/> <span>Quizzes</span>, Tests
      <p className="assisment_text">Easily launch live assignments, quizzes, and<br/> tests.
      Student results are automatically entered in<br/> the online gradebook.</p>
      </div>
    </div>
  );
}
