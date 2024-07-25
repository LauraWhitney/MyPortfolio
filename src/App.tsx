import React from 'react'
import './App.css'
import Me from './assets/me3.jpg'
import logo from './assets/logo.jpg'

function App() {

  return (
    <div className='Portfolio'>
       <header className='header'>
        <nav className='navbar'>
          <ul className='navbar-menu'>
          <img src={logo} className='logo-image' alt='logo'/>
            <li className='navbar-item'><a href='#home'>Home</a></li>
            <li className='navbar-item'><a href='#about'>About</a></li>
            <li className='navbar-item'><a href='#portfolio'>Portfolio</a></li>
            <li className='navbar-item'><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <img src={Me} className='me-image' alt='me'/>
      <div className='container'></div>
      
      <h1> Hello , I'm Laura  </h1>
      <h2>Dive in and explore my creativity !!!</h2>
      <div className='Button'>
     <button type="button"><span></span>About me</button>
     <button type="button"><span></span>Contact Me</button>
      </div>
    </div>
  )
}

export default App
