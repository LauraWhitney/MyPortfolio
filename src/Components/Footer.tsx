import React from 'react';
import '../App.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://x.com/laurawhitney31"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/laura-whitney-6751a8258/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/LauraWhitney"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Laura. All rights reserved.</p>
      </div>
    </footer>
  )
}


