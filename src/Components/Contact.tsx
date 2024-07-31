import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  return (
    <div className="Contact">
      <Header />
      <div className='contact-content'>
        <h1>Contact me</h1>
      </div>
      <Footer />
    </div>
  );
}
