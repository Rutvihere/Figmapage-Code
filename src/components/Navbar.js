import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Header from './Header';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/products" className="navbar-link">Products</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/signup" className="navbar-link signup-link">Signup</Link>
      </div>
    </nav>
    <Header/>
    </>
    
  );
};

export default Navbar;
