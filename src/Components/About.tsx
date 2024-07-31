import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    
    <div className='About'> 
    <Header/>
      <div className='about-content'>
      <h1 className='main-heading'> Web Developer</h1>
        <h2 className='sub-heading'>With experience in:</h2>
        <ul className='specialties-list'>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
        <h2>Also, a blockchain developer</h2>
        <a href="/contact" className='contact-button'>Contact Me</a>
      </div>
      <Footer />
    </div>
  );
}

