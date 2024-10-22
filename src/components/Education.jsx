import React from 'react';
import '../style/edu.css'

function Education() {
  return (
    <section id='education'>
      <h1 className='h1'>Education</h1>
      <div  className='div'>
        <div className='sec'>
        <h3>Bachelor of Engineering in Computer Science</h3>
        <p>GLA University, Mathura</p>
        <p>CPI: 8.47 </p>
        </div>
        <p> Present</p>
      </div>
      <div className='div'>
      <div className='sec'>
        <h3>Intermediate</h3>
        <p>Kanha Makhan Public School, Mathura</p>
        <p>Percentage: 92%  </p>
      </div>
      <p>May 2021</p>
      </div>
      <div className='div'>
      <div className='sec'>
        <h3>High School</h3>
        <p>Kanha Makhan Public School, Mathura</p>
        <p>Percentage: 92%</p>
      </div>
      <p>  May 2019</p>
      </div>
    </section>
  );
}

export default Education;
