import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ping.png'

const Navbar = () => (
    <div className="Navbar">
    <div className="container-fluid">
        <Link to='/' className="Navbar__brand">
           <img className="Navbar__brand-logo" alt="Logo" src={logo} />
            <span className="font-weight-light">Github Api</span>
            <span className="font-weight-bold">Challenge</span>
        </Link>
    </div>
  </div>

);

export default Navbar;