import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/Laura.png';
import { Link } from 'react-router-dom';


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <img src={logo} className='logo-image' alt='logo'/>
        </div>
        <button className='navbar-toggle' onClick={handleToggle}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
          <li className='navbar-item'><Link to="/" onClick={handleToggle}>Home</Link></li>
          <li className='navbar-item'><Link to="/about" onClick={handleToggle}>About</Link></li>
          <li className='navbar-item'><Link to='/resume' onClick={handleToggle}>Resume</Link></li>
          <li className='navbar-item'><Link to="/contact" onClick={handleToggle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 
