import React from "react";
import "../css/Theysay.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import maskgroup from "../images/Mask Group.png";
import group29 from "../images/Group 29.png";
export default function Theysay() {
  return (
    <div className="theysay_main_container">
      <div className="theysay_main_first">
        <p className="theysay_testinomial">
          <hr />
          TESTIMONIAL
        </p>
        <p className="theysay_say">What They Say?</p>
        <p className="theysay_skillin">
          Skilline has got more than 100k positive
          <br /> ratings from our users around the world.{" "}
        </p>
        <p className="theysay_skillin">
          Some of the students and teachers were
          <br /> greatly helped by the Skilline.
        </p>
        <p className="theysay_skillin">
          Are you too? Please give your assessment
        </p>
        <div className="theysay_icon">
          <button className="theysay_btn">
            write your assesment
            <FaRegArrowAltCircleRight className="theysay_icon_arrow" />
          </button>
        </div>
      </div>
      <div>
        <img className="theysay_imageone" src={maskgroup} alt="maskgroup" />
        <div className="theysay_imagediv">
          <p className="imagediv_text">
            "Thank you so much for your help. It's exactly what<br/> I've been
            looking for. You won't regret it. It really<br/> saves me time and
            effort. Skilline is exactly what<br/> our business has been lacking."
          </p>
          <span className="theysay_div">
          <p className="theysay_gloria">Gloria Rose</p>
          <img className="star_image"  src={group29} alt="group29" />
          </span>
          <p style={{color:"#80819A", marginLeft:"250px"}}>12 reviews at Yelp</p>
        </div>
      </div>
    </div>
  );
}
