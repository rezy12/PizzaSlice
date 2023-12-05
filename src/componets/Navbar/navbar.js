import React from 'react';
import "../Navbar/navbar.css";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
        <div class="logo-container">
            <img class="LogoNav" src={Logo} alt="Logo"/>
        </div>
        <ul class="nav-links">
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/menu">Menu</Link></li>
        </ul>
    </nav>
  )
}

export default navbar
