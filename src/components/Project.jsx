import React from 'react';
import '../style/project.css';
import foot from '../assets/project/foot.png';
import git from '../assets/project/git.png';
import movie from '../assets/project/movie.png';
import para from '../assets/project/para.png';
import sleek from '../assets/project/sleekinn.png';
import survey from '../assets/project/survey.png';
import weather from '../assets/project/weather.png';
import stopw from '../assets/project/stopw.png';

function Project() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        
        <div className="project-item">
          <img src={weather} alt="WeatherWatch" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/WeatherWatch" target="_blank" rel="noopener noreferrer">WeatherWatch</a></h3>
          <p>A weather forecasting app that allows users to check the weather and get updates in real-time.</p>
        </div>

        <div className="project-item">
          <img src={movie} alt="MovieSphere-Frontend" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/MovieSphere-Frontend" target="_blank" rel="noopener noreferrer">MovieSphere</a></h3>
          <p>The frontend of a movie recommendation platform, allowing users to search and explore movies.</p>
        </div>

        <div className="project-item">
          <img src={sleek} alt="SleekInn-Front" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/SleekInn-front" target="_blank" rel="noopener noreferrer">SleekInn</a></h3>
          <p>The frontend of a tour booking website built using the MERN stack, featuring secure payment options.</p>
        </div>

        <div className="project-item">
          <img src={foot} alt="FootStore" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/FootStore" target="_blank" rel="noopener noreferrer">FootStore</a></h3>
          <p>An e-commerce website dedicated to selling footwear, offering a variety of products with dark and light themes.</p>
        </div>

        <div className="project-item">
          <img src={git} alt="Git-Along" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/Git-Along" target="_blank" rel="noopener noreferrer">Git-Along</a></h3>
          <p>A JavaScript project forked from ShyamaAgrawal, aimed at visualizing Git history in a user-friendly way.</p>
        </div>

        <div className="project-item">
          <img src={survey} alt="SurveyForm" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/SurveyForm" target="_blank" rel="noopener noreferrer">SurveyForm</a></h3>
          <p>A simple and responsive form to collect survey data, built using HTML and CSS.</p>
        </div>

        <div className="project-item">
          <img src={para} alt="ParaGenerator" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/ParaGenerator" target="_blank" rel="noopener noreferrer">ParaGenerator</a></h3>
          <p>A CSS project for generating random paragraphs, useful for placeholder text in web development.</p>
        </div>

        <div className="project-item">
          <img src={stopw} alt="StopWatch" className="project-img"/>
          <h3><a href="https://github.com/KASHISH-BANSAL-1/StopWatch" target="_blank" rel="noopener noreferrer">StopWatch</a></h3>
          <p>A JavaScript-based stopwatch application with start, stop, and reset functionalities.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;
