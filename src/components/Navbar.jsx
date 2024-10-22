import React from 'react';
import '../style/nav.css';
import a from '../assets/leet1.png';
import b from '../assets/social.png';
import c from '../assets/gmail.png';
import d from '../assets/linkedin.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">Kashish Bansal</div>
        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <div className="link">
          <div className="a">
            <a href="https://leetcode.com/u/Kashish_Bansal_30/" target="_blank" rel="noopener noreferrer">
              <img src={a} alt="LeetCode" />
            </a>
          </div>
          <div className="a">
            <a href="https://github.com/KASHISH-BANSAL-1" target="_blank" rel="noopener noreferrer">
              <img src={b} alt="GitHub" />
            </a>
          </div>
          <div className="a">
            <a href="mailto:kashishag303@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={c} alt="Gmail" />
            </a>
          </div>
          <div className="a">
            <a href="https://www.linkedin.com/in/kashish-bansal-108684243/" target="_blank" rel="noopener noreferrer">
              <img src={d} alt="LinkedInn" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
