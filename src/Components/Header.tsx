
import '../App.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.pdf';


export default function Header() {
    return (
        <header className='header'>
        <nav className='navbar'>
          <ul className='navbar-menu'>
           
          <img src={logo} className='logo-image' alt='logo'/>
          
            <li className='navbar-item'><Link to="/">Home</Link></li>
            <li className='navbar-item'><Link to="/about">About</Link></li>
            <li className='navbar-item'><a href={Resume}>Resume</a></li>
            <li className='navbar-item'><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
} 
