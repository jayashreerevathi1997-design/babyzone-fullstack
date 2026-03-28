import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <img src="/logo.png" alt="BabyZone" className="footer-logo" />
          <p>4th street, pallavaram,<br />Near bus stand<br />Madurai-254567</p>
        </div>

        <div className="footer-section">
          <h3>Top categories</h3>
          <ul>
            <li><Link to="/category/girls-fashion">Baby Fashion</Link></li>
            <li><Link to="/category/toys">Toys</Link></li>
            <li><Link to="/category/footwear">Footwear & Accessories</Link></li>
            <li><Link to="/category/accessories">Moms & Baby care</Link></li>
            <li><Link to="/category/beds">Furniture & Bedding</Link></li>
            <li><Link to="/">Rental services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer support</h3>
          <ul>
            <li><Link to="/contact">Help & contact us</Link></li>
            <li><Link to="/">Delivery information</Link></li>
            <li><Link to="/">Track your order</Link></li>
            <li><Link to="/">Returns & exchange</Link></li>
            <li><Link to="/">Promotion Terms & conditions</Link></li>
            <li><Link to="/">Terms & conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Store finder</Link></li>
            <li><Link to="/">Sitemap</Link></li>
            <li><Link to="/">Fees and payments policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About BabyZone</h3>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms & conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
