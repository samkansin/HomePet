import React from 'react'
import '../../CSS/Hero.css'
import '../../CSS/BaseColor.css';
import heroImage from '../../images/hero-image.png'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="heading">
          <span>Adopt a Furry Friend and Change Their Life Forever</span>
        </h1>
        <span className="sub-heading">
          <span>Every pet deserves a second chance at happiness. Whether you're looking for a playful kitten or a loyal dog, Start your adoption journey today.</span>
        </span>
        <div className="btn-group">
          <NavLink to="/adopt" className="adopt-btn">Adopt a pet</NavLink>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
      <img alt="" src={heroImage} className="hero-image" />
    </div>
  )
}

export default Hero