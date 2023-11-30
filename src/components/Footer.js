import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaHandshake, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
            <div>
                <p>100 Institute Road</p>
                <p>Worcester, MA</p>
            </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
          508-831-5000</h4>
          </div>
          <div className="email">
            <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
          atmelton@wpi.edu</h4>
          </div>
        </div>
        <div className="right">
            <h4>About this page</h4>
            <p>
                This page was made from scratch using React JS and CSS. For more 
                information please visit react.dev.
            </p>
            <div className="social">
            <FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}} />
            <FaHandshake size={20} style={{color: "#fff", marginRight: "1rem"}} />
            <FaInstagram size={20} style={{color: "#fff", marginRight: "1rem"}} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
