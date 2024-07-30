import React from 'react';
import '../App.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='header'>
        <nav className='navbar'>
          <ul className='navbar-menu'>
          <img src={logo} className='logo-image' alt='logo'/>
            <li className='navbar-item'><a href='#home'>Home</a></li>
            <li className='navbar-item'><Link to="about">About</Link></li>
            <li className='navbar-item'><a href='#portfolio'>Portfolio</a></li>
            <li className='navbar-item'><Link to="Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
} 
