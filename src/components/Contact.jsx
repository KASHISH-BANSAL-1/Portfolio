// ContactUs.js
import React from 'react';
import '../style/contact.css';

function Contact() {
  return (
    <div className="mai">
      <section id="contact" className="contact">
      <h2>Contact Me</h2>
     <div className='div'>
     <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message..." required></textarea>
        <button type="submit">Send</button>
      </form>
     </div>
    </section>
    </div>
  );
}

export default Contact;
