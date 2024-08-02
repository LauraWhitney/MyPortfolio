
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import LauImage from '../assets/Lau.jpg';

export default function Contact() {
  return (
    
    <div className="Contact">
      <Header />
      
      <div className="contact-content">
   <img src={LauImage}  className="contact-image"  />     
        <h1>Get In Touch with Me</h1>
        <p>Hey, I'd love to hear from you, feel free to reach out.</p>
      <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: <a href="laurawhitney31@gmail.com">laurawhitney31@gmail.com</a></p>
          <p>Phone: +254115449927</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
        <div className="social-media-links">
          <h2>Connect with me</h2>
          <a href="https://x.com/laurawhitney31"><i className="fab fa-twitter"></i>Twitter</a>
          <a href="https://www.linkedin.com/in/laura-whitney-6751a8258/"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/LauraWhitney"><i className="fab fa-github"></i> GitHub</a>
        </div>
        
      </div>  
      <Footer />
    </div>
  );
}
