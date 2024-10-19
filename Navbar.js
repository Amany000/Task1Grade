import React from 'react';
import './Navbar.css'; // Importing a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PHARMA</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Store</a></li>
        <li>
          <a href="#">Dropdown</a>
          <ul className="dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="cart-icon">
        <i className="fas fa-shopping-bag"></i>
        <span className="cart-count">2</span>
      </div>
    </nav>
  );
}

export default Navbar;
