// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
      <Hero/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact />
      </div>
    </div>
  );
}

export default App;
