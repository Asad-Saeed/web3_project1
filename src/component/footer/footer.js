import React from "react";
import EstrellaLogo from "../../assets/images/EstrellaTera_logo_light.svg";
// import InstagramIcon from "../../assets/images/Group50.svg"
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 ">
          <div className="text-center">
            <img src={EstrellaLogo} className="img-fluid" alt="" />
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-2 col-6">
              <div className="d-flex justify-content-between bd-highlight mb-2">
                <div className="icon_circle">
                  <FaFacebookF />
                </div>
                <div className="icon_circle">
                  <FaTelegramPlane />
                </div>
                <div className="icon_circle">
                  <FaTwitter />
                </div>
                <div className="icon_circle">
                  <FiInstagram />
                </div>
              </div>
            </div>
          </div>
          <hr style={{color:"#ffae02", width:"100%"}}/>
          <div className="text-allRight m-3">
          © 2022 All Rights Reserved Estrella Tera
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
