import { Link } from 'react-router-dom';
import logo from '../../assets/logo-BfNap0Pe.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
           <Link to='/'>
           <img src={logo} alt="Recipe Logo" className="logo" />
           </Link> 
           <span className="brand-name">Recipe</span>

        </div>
        <div className="footer-right">
          <span className="route-text">Route</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Amira Thrwat™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;