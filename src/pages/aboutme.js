import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import "./aboutme.css";

function About() {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} className="logo" alt="Logo" />
        </nav>
        <div className="header-text">
          <h1>My name is <span>Kenny Wu</span></h1>
          <p>I'm a high school student at Diamond Bar High.<br />I'm part of the Future Business Leader of America Club in school.</p>
          <p>Interests:</p>
          <ul>
            <li>Music</li>
            <li>Food</li>
            <li>Art</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;