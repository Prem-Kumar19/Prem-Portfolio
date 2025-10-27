import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Prem-logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add('menu-open'); // prevent scrolling
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const handleLinkClick = (section) => {
    setMenu(section);
    closeMenu(); // close the menu when a link is clicked
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />

     {/* Mobile hamburger / close icons */}
{!isMenuOpen && (
  <img
    src={menu_open}
    onClick={openMenu}
    alt="open menu"
    className="nav-mob-open"
  />
)}

{isMenuOpen && (
  <img
    src={menu_close}
    onClick={closeMenu}
    alt="close menu"
    className="nav-mob-close"
  />
)}

{/* Menu */}
<ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>


        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => handleLinkClick('home')}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => handleLinkClick('about')}
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => handleLinkClick('services')}
          >
            <p>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => handleLinkClick('work')}
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => handleLinkClick('contact')}
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect button (hidden on mobile) */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
