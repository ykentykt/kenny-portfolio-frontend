import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import logo from '../images/logo.png';

function Projects() {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <img src={logo} className="logo" alt="Logo" />
                </nav>
                <div className="header-text">
                    <h1>My <span>Projects</span></h1>
                    <ul>
                        <li><Link to="/memory_project/memory.html" target="_blank">Memory Game</Link></li>
                        <li>I added the options to choose the gameboard size to be between 4x4 and 6x6.</li>
                        <li>I updated the card flipping animation to be slightly more unique.</li>
                    </ul>
                    <ul>
                        <li><Link to="/BOOTSTRAP PROJECT/painting1.html" target="_blank">Bootstrap Projects</Link></li>
                        <li>I used bootstrap to illustrate paintings.</li>
                        <li>I also made a second painting which you can view by using the navigation bar created.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;