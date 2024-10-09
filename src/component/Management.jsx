import React from "react";
import "../css/Management.css";
import group124 from "../images/Group 124.png";

export default function Management() {
  return (
    <div className="management_main">
      <div className="management_first_div">
        Class Management <br />
        <span>Tools for Educators</span>
        <p className="management_text">
          Class provides tools to help run and manage the class
          <br /> such as Class Roster, Attendance, and more. With the
          <br /> Gradebook, teachers can review and grade tests and
          <br /> quizzes in real-time.
        </p>
      </div>
      <div className="management_second_div">
        <img className="management_image" src={group124} alt="management" />
      </div>
    </div>
  );
}
