// Skills.js
import React from 'react';
import '../style/skill.css';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/java-script.png';
import react from '../assets/physics.png';
import github from '../assets/code.png';
import sql from '../assets/database.png';
import node from '../assets/node.png';
import mongo from '../assets/OIP.jpg';
import tailwindcss from '../assets/tcss.jpg';
import dsa from '../assets/dsa.webp';
import express from '../assets/express.jpg';


function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>
          <img src={java} alt="Java" className="skill-icon" />
          <h1>Java </h1> <span>Strong in Object-Oriented Programming and Java development.</span>
        </li>
        <li>
          <img src={js} alt="JavaScript" className="skill-icon" />
          <h1>JavaScript </h1> <span>Proficient in ES6+ syntax and dynamic web applications.</span>
        </li>
        <li>
          <img src={react} alt="React" className="skill-icon" />
          <h1>React </h1> <span>Experience in building interactive UIs with React.js.</span>
        </li>
        <li>
          <img src={node} alt="Node.js" className="skill-icon" />
          <h1>Node.js</h1> <span> Backend development and API creation using Node.js.</span>
        </li>
        <li>
          <img src={mongo} alt="MongoDB" className="skill-icon" />
          <h1>MongoDB </h1>  <span>Proficient in handling NoSQL databases with MongoDB.</span>
        </li>
        <li>
          <img src={express} alt="Express.js" className="skill-icon" />
          <h1>Express.js</h1>
          <span>Experience in building robust and scalable server-side applications with Express.js.</span>
        </li>

        <li>
          <img src={html} alt="HTML" className="skill-icon" />
          <h1>HTML</h1>  <span> Expertise in creating well-structured web content.</span>
        </li>
        <li>
          <img src={css} alt="CSS" className="skill-icon" />
          <h1>CSS</h1>  <span> Strong knowledge of responsive and adaptive design using CSS.</span>
        </li>
        <li>
          <img src={dsa} alt="Data Structures and Algorithms" className="skill-icon" />
          <h1>DSA</h1> <span> Solid understanding of Data Structures and Algorithms for problem-solving.</span>
        </li>
        <li>
          <img src={sql} alt="SQL" className="skill-icon" />
          <h1>MySQL</h1>  <span> Skilled in writing SQL queries and managing relational databases.</span>
        </li>
        <li>
          <img src={tailwindcss} alt="Tailwind CSS" className="skill-icon" />
          <h1>Tailwind CSS </h1>  <span>Experience in creating custom, responsive designs with Tailwind CSS.</span>
        </li>
        <li>
          <img src={github} alt="GitHub" className="skill-icon" />
          <h1>Git</h1> <span> Proficient in version control and collaboration using Git and GitHub.</span>
        </li>

      </ul>
    </section>
  );
}

export default Skills;
