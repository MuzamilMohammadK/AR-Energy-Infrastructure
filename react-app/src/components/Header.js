import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src="/assets/LOGO.png" alt="AR Energy Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="active">Home Page</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><a href="#partners">Partners</a></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
