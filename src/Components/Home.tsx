import React from 'react';
import '../App.css';
import Me from '../assets/me3.jpg';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='Portfolio'>
       <Header /> 
      <img src={Me} className='me-image' alt='me'/>
      <div className='container'></div>
      
      <h1> Hello , I'm Laura  </h1>
      <h2>Dive in and explore my creativity !!!</h2>
      <div className='Button'>
        <Link to="/about">
     <button type="button"><span></span>About me</button>
        </Link>
        <Link to="/contact">
     <button type="button"><span></span>Contact Me</button>
       </Link>
      </div>
    </div>

  )
}


