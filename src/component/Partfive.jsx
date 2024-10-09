import React from "react";
import "../css/Partfive.css";
import { FaRegCircle } from "react-icons/fa";
import confidentteacher from "../images/confident-teacher.png"
import { FaSquare } from "react-icons/fa";

export default function Partfive() {
  return (
    <div className="partfive_main_container">
      <FaRegCircle className="partfive_first_icon" />
      <div className="partfive_div_first">
        <div className="partfive_div_first_first">
          Everything you can do in a physical<br /> classroom,
           <span>you can do with Skilline</span>
        </div>
        <div className="partfive_div_first_second">
          Skilline’s school management software helps traditional <br/>and online
          schools manage scheduling, attendance, <br/>payments and virtual classrooms
          all in one secure cloud-based system.
        </div>

        <div className="partfive_div_first_third">Learn more</div>
      </div>
      

      <div className="partfive_div_second">
     <div
     ><FaSquare  className="partfive_second_icon"/>
        <img className="partfive_div_second_image" src={confidentteacher} alt="teacher" />
        </div> 
        <FaSquare  className="partfive_third_icon"/>
      </div>
    </div>
  );
}
