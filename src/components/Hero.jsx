import React from 'react';
import '../style/Hero.css'; // Assuming you'll style it in a separate CSS file
import developerImg from '../assets/my.jpg'; // Add the path to your developer image

function Hero() {
  const openResume = () => {
    window.open('/KASHISH_BANSAL_FinalResume.pdf', '_blank');
  };

  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>Software Developer</h1>
        <p>
        Passionate about building scalable web applications and improving user experience.
          Proficient in the MERN stack and Java, with a focus on creating innovative full-stack solutions.
          Always eager to learn and explore new technologies.  </p>
        <button onClick={openResume} className="resume-btn">View Resume</button>
      </div>
      <div className="hero-right">
        <img src={developerImg} alt="Developer" />
      </div>
    </div>
  );
}

export default Hero;
