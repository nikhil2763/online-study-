import React from "react";
import "../css/Latest.css";
import group40 from "../images/Group 40.png";
import group42 from "../images/Group 42.png";
import group43 from "../images/Group 43.png";
import rectangle33 from "../images/Rectangle 33.png";
export default function Latest() {
  return (
    <div className="latest_main_container">
      {/* this is display the heading */}
      <div className="latest_first_container_div">
        <p className="latest_resources">Lastest News and Resources</p>
        <p className="latest_development">
          See the developments that have occurred to Skillines in the world
        </p>
      </div>
      {/* this is display the computer image */}
      <div className="latest_second_container_div">
        <div className="latest_second_container_first_div">
          <img
            className="latest_second_container_first_div_image"
            src={group40}
            alt="computer-image"
          />
          <div className="latest_btn_div">
            {" "}
            <button className="latest_btn">NEWS</button>
          </div>
          <div className="latest_text_first_div">
            {" "}
            Class adds $30 million to its balance sheet for
            <br /> a Zoom-friendly edtech solution
          </div>
          <p className="latest_para">
            Class, launched less than a year ago by Blackboard
            <br /> co-founder Michael Chasen, integrates exclusively...
          </p>
          <a
            className="latest_ancor"
            href="$"
            target="blank"
            rel="this-is-link"
          >
            {" "}
            read more
          </a>
        </div>
        <div className="latest_second_container_second_div">
          <div className="latest_second_container_second_first_div">
            <div>
              <img
                className="latest_rectangle_first"
                src={rectangle33}
                alt="rectangle33"
                style={{ zIndex: "-1" }}
              />
              <input
                className="_latest_input_first"
                type="text"
                value="Press Release"
                style={{
                  fontSize: "12px",
                  position: "absolute",
                  marginLeft: "-90px",
                  marginTop: "60px",
                  width: "80px",
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "30px",
                }}
              />
            </div>
            <span>
              <p
                className="latest_first_text"
                style={{ fontSize: "15px", marginTop: "-3px" }}
              >
                Class Technologies Inc. Closes $30 Million <br />
                Series A Financing to Meet High Demand
              </p>
              <p
                className="latest_second_text"
                style={{ fontSize: "13px", color: "#696984" }}
              >
                Class Technologies Inc., the company that
                <br /> created Class,...
              </p>
            </span>
          </div>
          <div
            className="latest_second_container_second_first_div"
            style={{ marginTop: "20px" }}
          >
            <div>
              <img
                className="latest_rectangle_first"
                src={group42}
                alt="group42"
                style={{ zIndex: "-1" }}
              />
              <input
                className="_latest_input_first"
                type="text"
                value="NEWS"
                style={{
                  fontSize: "12px",
                  position: "absolute",
                  marginLeft: "-50px",
                  marginTop: "60px",
                  width: "40px",
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "30px",
                }}
              />
            </div>
            <span>
              <p
                className="latest_first_text"
                style={{ fontSize: "15px", marginTop: "-3px" }}
              >
                Zoom’s earliest investors are betting
                <br /> millions on a better Zoom for schools
              </p>
              <p
                className="latest_second_text"
                style={{ fontSize: "13px", color: "#696984" }}
              >
                Zoom was never created to be a consumer
                <br /> product. Nonetheless, the...
              </p>
            </span>
          </div>
          <div
            className="latest_second_container_second_first_div"
            style={{ marginTop: "20px" }}
          >
            <div>
              <img
                className="latest_rectangle_first"
                src={group43}
                alt="group43"
                style={{ zIndex: "-1" }}
              />
              <input
                className="_latest_input_first"
                type="text"
                value="NEWS"
                style={{
                  fontSize: "12px",
                  position: "absolute",
                  marginLeft: "-50px",
                  marginTop: "60px",
                  width: "40px",
                  backgroundColor: "orange",
                  border: "none",
                  borderRadius: "30px",
                }}
              />
            </div>
            <span>
              <p
                className="latest_first_text"
                style={{ fontSize: "15px", marginTop: "-3px" }}
              >
                Former Blackboard CEO Raises $16M to
                <br /> Bring LMS Features to Zoom Classrooms
              </p>
              <p
                className="latest_second_text"
                style={{ fontSize: "13px", color: "#696984" }}
              >
                This year, investors have reaped big
                <br /> financial returns from betting on Zoom...
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
