import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import BookingDetails from '../BookingDetails/BookingDetails'; // Import your BookingDetails component
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBooking, setShowBooking] = useState(false); // State to manage booking component visibility

  const handleBookTableClick = (event) => {
    event.preventDefault();
    setShowBooking(!showBooking);
  };

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Log In</a>
          <div />
          <a href="/" className="p__opensans" onClick={handleBookTableClick}>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      {showBooking && <BookingDetails />} {/* Conditionally render BookingDetails */}
    </>
  );
};

export default Navbar;
