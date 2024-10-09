import React from "react";
import group79 from '../images/group79.png'
import "../css/cloud.css";
export default function Cloud() {
  return (
    <div className="cloud_main">
      <div className="cloud_text_container">
        {/* <p className="text">All-In-One </p>&nbsp;
        <p className="text1">Cloud Software.</p> */}
        All In One <span className="cloud_text">Cloud Software</span>
      </div>
      <div className="cloud_para_main">
        {/* <img src={group79} alt="icon"/> */}
        <span className="cloud_para">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </span>
      </div>
<div>
  
      <div className="cloud_main_container">
      
        <div className="cloud_main_container_first">
        <img className="cloud_images" src={group79} alt="icon"/>
              

          <label className="cloud_content">
            Online Billing,
            <br /> Invoicing, & Contracts
          </label>
          <br />
          <span className="cloud_description">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </span>
        </div>
        <div className="cloud_main_container_second">
        <img className="cloud_images" src={group79} alt="icon"/>
          <label className="cloud_content">
          Easy Scheduling &<br/> Attendance Tracking
          </label>
          <br />
          <span className="cloud_description">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </span>
        </div>
        <div className="cloud_main_container_third">
        <img className="cloud_images" src={group79} alt="icon"/>
          <label className="cloud_content">
          Customer Tracking
          </label>
          <br />
          <span className="cloud_description">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}
