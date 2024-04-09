import React from 'react';
import "./landing.css";
import logo from '../images/logo.png';

function Home() {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} className="logo" alt="Logo" />
        </nav>
        <div className="header-text">
          <h1>Hi, I'm <span>Kenny</span></h1>
          <p>I'm a 16 years old high school student<br />hoping to major in some part of the CS branch.<br />I'm capable of coding in Python and c++.</p>
          <p>Hobbies:</p>
          <ul>
            <li>Basketball</li>
            <li>Snowboarding</li>
            <li>Piano</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;