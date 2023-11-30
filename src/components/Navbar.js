import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color, setColor] = useState(false);
const changeColor = () => {
  if(window.scrollY >= 100) {
    setColor(true);
  }
  else {
    setColor(false);
  }
}

window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>AMJ</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="textLink">Home</Link>
          </li>
          <li>
            <Link to="/project" className="textLink">Projects</Link>
          </li>
          <li>
            <Link to="/about" className="textLink">About</Link>
          </li>
          <li>
            <Link to="/contact" className="textLink">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick = {handleClick}>
          {click ? (<FaTimes size={20} style={{color: "#fff"}} /> ) : (<FaBars size={20} style={{color: "#fff"}} />)}
        </div>
    </div>
  );
};

export default Navbar;