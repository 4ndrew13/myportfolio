import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import AboutMe1 from "../assets/aboutme1.jpg";

import React from 'react';

export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>ABOUT ME</h1>
            <p>I'm a current freshman at Worcester Polytechnic Instisute
                pursuing two degrees in computer science and data science. 
                Creating this website with React and CSS serves as my first official project. 
                This website will hold all of my projects from my time at WPI and I hope these projects 
                will one day be seen by the world. Please enjoy and thank you so much for visiting.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={AboutMe1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;
