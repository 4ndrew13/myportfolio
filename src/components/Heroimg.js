import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/tech2.jpg";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Heroimg = () => {
  return (
     <div className="hero">
  <div className="mask">
  <img className="intro-img" src={IntroImg} alt="IntroImg"/>
  </div>
  <div className="content">
    <div className="typewriter">
    <Typewriter 
    onInit={(typewriter) => {
      typewriter.typeString("<span style='font-weight:200'><span style='font-family:Russo One'><span style='font-size:1.4rem'><span style='color:#fff'>HI, MY NAME IS ANDREW.<span/><span/><span/><span/>").start();
    }}
    />
    </div>
    <div className="fade-in">
        <h1>FUTURE DEVELOPER</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
  </div>
  </div>
  );
};

export default Heroimg;
