import React from "react";
import "../css/Whatisskillin.css";
import skillinimage1 from '../images/skillinimage1.png'
import skillinimage2 from '../images/skillinimage2.png'


export default function Whatsskillin() {
  return (
    <div className="skillin_main_container">
        {/* this is first div that display the heading */}
      <div className="skillin_first_div">
        What is <span>Skilline?</span>
      </div>
      {/* this is a seconddiv that display paragraph */}
      <div className="skillin_second_div">
        Skilline is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </div>

      {/* this is third div that diplay the images */}
      <div className="skillin_third_div">
        <div >
            <img src={skillinimage1} alt="firstimage" className="skillin_image_one"/>
        </div>
        <div >
        <img  className="skillin_image_two" src={skillinimage2} alt="secondimage"/>
        </div>

      </div>
    </div>
  );
}
