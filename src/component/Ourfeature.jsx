import React from "react";
import "../css/Ourfeature.css";
import group71 from "../images/Group71.png";
import group73 from "../images/group73.png";
import group72 from "../images/group72.png";
import user from "../images/user.png";
import { FaRegCircle } from "react-icons/fa";

export default function Ourfeature() {
  return (
    <div className="ourfeature_main_container">
      <div className="ourfeature_first_container">
        Our<span> Features</span><br/>
        <p className="ourfeature_text">This very extraordinary feature, can make learning activities more efficient</p>
      </div>
      <div className="ourfeature_second_container">
        <div className="ourfeature_second_first_container">
        <FaRegCircle className="ourfeature_icon_one" />
          <img className="ourfeature_imageone" src={group71} alt="person" />
          <FaRegCircle className="ourfeature_icon_two" />
        </div>
       

        <div className="ourfeature_second_second_container">
          <div className="ourfeature_second_second_first_container">A <span>user interface</span> designed <br/>for the classroom</div>
          <div className="ourfeature_second_second_second_container"><img className="ourfeature_second_second_second_container_imageone" src={group72} alt="first" /><span>Teachers don’t get lost in the grid view<br/> and have a dedicated Podium space.</span>
          </div>
          <div className="ourfeature_second_second_third_container"><img className="ourfeature_second_second_third_container_imagetwo" src={group73} alt="second" /><span>TA’s and presenters can be moved to <br/>the front of the class.</span>
          </div>
          <div className="ourfeature_second_second_fourth_container"><img className="ourfeature_second_second_fourth_container_imageuser" src={user} alt="user" /><span>Teachers can easily see all students <br/>and class data at one time.</span></div>
        </div>
      </div>
    </div>
  );
}
