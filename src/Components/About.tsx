import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <div className='About'>
      <Header />
      <div className='about-content'>
    <h1>Get to know me more</h1>
      </div>
      <Footer />
    </div>
  );
}

