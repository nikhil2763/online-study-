import React from "react";
// import "../css/Footer.css";
import { GiSquare } from "react-icons/gi";

export default function Footer() {
  return (
    <div
      className="footer_main_container"
      style={{
        backgroundColor: "#252641",
        marginTop: "20px",
        marginBottom: "20px",
        zIndex: "-1",
        position: "relative",
        height: "50vh",
        paddingTop: "20px",
      }}
    >
      <div
        className="footer_first_div"
        style={{
          display: "flex",
          //   justifyContent: "center",
          position: "relative",
          alignItems: "center",
          margin: "auto",
          padding: "30px",

          width: "fit-content",
          //   height: "50%",
        //   border: "5px solid red",
        }}
      >
        <GiSquare
          className="footer_icon"
          style={{
            color: "#26C1F2",
            width: "40px",
            height: "40px",
            borderWidth: "50px",
            // marginTop: "40px",
            rotate: "50deg",
            borderRadius: "1px",
            // position: "absolute",
            zIndex: "-2",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "centre",
          }}
        />
        <label
          className="footer_first_div_label"
          style={{
            fontSize: "20px",
            // position: "absolute",
            color: "white",
            fontFamily: "poppins,serif",
            marginLeft: "-20px",
            marginTop: "4px",
            zIndex: "-1",
            paddingRight: "10px",
            // gap:"1rem",
            borderRight: "solid",
          }}
        >
          Skilline
        </label>
        <span style={{ color: "white", marginLeft: "20px", fontSize: "20px" }}>
          Virtual Class
          <br /> for Zoom
        </span>
      </div>
      <p style={{ color: "#B2B3CF", textAlign: "center", marginTop: "10px" }}>
        Subscribe to get our Newsletter
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <input
          type="text"
          value="Your Email"
          style={{
            width: "200px",
            borderRadius: "30px",
            padding: "10px",
            color: "#B2B3CF",
            border: "1px solid #B2B3CF",
            backgroundColor: "#252641",
          }}
        />
        <button
          style={{
            width: "100px",
            borderRadius: "30px",
            padding: "10px",
            backgroundColor: "#393FCF",
            border: "none",
            color: "white",
          }}
        >
          Subscribe
        </button>
        
      </div>
      <div style={{color:"#B2B3CF",gap:"2rem",marginTop:"35px",textAlign:"center"}}>Careers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions</div>
      <p style={{color:"#B2B3CF",textAlign:"center"}}>© 2021 Class Technologies Inc. </p>
    </div>
  );
}
