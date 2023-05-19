import { useState } from "react";
import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from 'react';

const Navbar = React.memo(() => {
  const [showProgressLine, setShowProgressLine] = useState(false);

  const handleLinkClick = () => {
    setShowProgressLine(true);
  };

  const handleProgressLineComplete = () => {
    setShowProgressLine(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const screenWidth = window.innerWidth;
    if (!isMenuOpen && screenWidth < 1060) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  const handleClick = () => {
    toggleMenu();
  };
  const [activeMenu, setActiveMenu] = useState(null);
  const handleIconClick = (iconName) => {
    setActiveMenu(prevActiveMenu => prevActiveMenu === iconName ? null : iconName);
  };

  const { darkMode, dispatch } = useContext(DarkModeContext);
  const handleModeToggle = () => {
    dispatch({ type: darkMode ? 'LIGHT' : 'DARK' });
  };

  return (
    <motion.nav className="navbar">
      <div className="navbar__left">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} onMouseDown={handleLinkClick}>
          {darkMode ? (<img src="/assets/PIClogo2.png" alt="Company Logo dark" width="150" height="39" />) : (<img src="/assets/PIClogo.png" alt="Company Logo" width="150" height="39" />)}
          {darkMode ? (<img src="/assets/make2.png" alt="Partner Logo dark" width="67" height="27" />) : (<img src="/assets/make1.png" alt="Partner Logo" width="67" height="27" />)}
        </Link>
      </div>
      <div className="navbar__right">
        <div className={`navigation-icons ${isMenuOpen ? 'open' : ''}`}>
          <div className="navigation-icon">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Home" onMouseDown={handleLinkClick}>
              <HomeIcon className='icon' />
            </Link>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Home" onClick={handleClick} onMouseDown={handleLinkClick} >
              <p className="icon-name">Home</p>
            </Link>
          </div>
          <div className="navigation-icon" aria-haspopup="true" aria-expanded={activeMenu === 'Corporate'} onClick={() => handleIconClick('Corporate')} aria-label="Corporate" role="button" tabIndex={0}>
            <CorporateFareIcon className='icon' />
            <p className="icon-name" aria-label="Corporate">Corporate</p>
            {activeMenu === 'Corporate' && (
              <ul className="dropdown">
                <HashLink to="/about#about" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="About" onClick={handleClick} onMouseDown={handleLinkClick}>
                  <li>About</li>
                </HashLink>
                <HashLink to="/about#accolades" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Accolades" onClick={handleClick} onMouseDown={handleLinkClick}>
                  <li>Accolades</li>
                </HashLink>
                <Link to="/clients" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Clients" onClick={handleClick} onMouseDown={handleLinkClick}>
                  <li>Clients</li>
                </Link>
                <Link to="/partner" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Partners" onClick={handleClick} onMouseDown={handleLinkClick}>
                  <li>Partners</li>
                </Link>
                <Link to="/network" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Pan India Network" onClick={handleClick} onMouseDown={handleLinkClick}>
                  <li>Pan India Network</li>
                </Link>
              </ul>
            )}
          </div>
          <div className="navigation-icon" aria-haspopup="true" aria-expanded={activeMenu === 'services'} onClick={() => handleIconClick('services')} aria-label="services">
            <MiscellaneousServicesIcon className='icon' />
            <p className="icon-name" aria-label="services">Services</p>
            {activeMenu === 'services' && (
              <ul className="dropdown">
                < HashLink to="/services#kpo" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="KPO Services">
                  <li>KPO Services</li>
                </ HashLink>
                <HashLink to="/services#geoinformatics" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Geoinformatics">
                  <li>Geoinformatics</li>
                </HashLink>
                <HashLink to="/services#software" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Software Solutions">
                  <li>Software Solutions</li>
                </HashLink>
                <HashLink to="/services#exploration" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Exploration & Production">
                  <li>Exploration &amp; Production</li>
                </HashLink>
                <HashLink to="/services#repair" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Specialized Repair Services">
                  <li>Specialized Repair Services</li>
                </HashLink>
              </ul>
            )}
          </div>
          <div className="navigation-icon" onClick={() => handleIconClick('sales')} aria-label="sales" role="button" tabIndex={0} aria-haspopup="true" aria-expanded={activeMenu === 'sales'}>
            <LoyaltyIcon className='icon' />
            <p className="icon-name" aria-label="sales">Sales</p>
            {activeMenu === 'sales' && (
              <ul className="dropdown">
                <Link to="/land" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Geospatial Solutions">
                  <li>Geospatial Solutions</li>
                </Link>
                <Link to="marine" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Oceanography Solutions">
                  <li>Oceanography Solutions</li>
                </Link>
                <Link to="/construction" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Construction Solutions">
                  <li>Construction Solutions</li>
                </Link>
                <Link to="/geophysical" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Geophysical Solutions">
                  <li>Geophysical Solutions</li>
                </Link>
                <Link to="/engineering" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Engineering Solutions">
                  <li>Engineering Solutions</li>
                </Link>
                <Link to="/scanning" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Scanning Solutions">
                  <li>Scanning Solutions</li>
                </Link>
                <Link to="/security" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Security Solutions">
                  <li>Security Solutions</li>
                </Link>
                <Link to="/seismic" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Seismic Solutions">
                  <li>Seismic Solutions</li>
                </Link>
                <Link to="/mining" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Mining Solutions">
                  <li>Mining Solutions</li>
                </Link>
                <Link to="/dismonitoring" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Discharge Monitoring Solutions">
                  <li>Discharge Monitoring Solutions</li>
                </Link>
                <Link to="/monitoring" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Monitoring Solutions">
                  <li>Monitoring Solutions</li>
                </Link>
                <Link to="/bathymetric" smooth="true" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Bathymetric Solutions">
                  <li>Bathymetric Solutions</li>
                </Link>
              </ul>
            )}
          </div>
          <div className="navigation-icon" onClick={() => handleIconClick('news')} aria-label="news" role="button" tabIndex={0} aria-haspopup="true" aria-expanded={activeMenu === 'news'} >
            <NewspaperIcon className='icon' />
            <p className="icon-name" aria-label="news">News&Events</p>
            {activeMenu === 'news' && (
              <ul className="dropdown">
                <Link to="/news" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="news">
                  <li>News</li>
                </Link>
                <Link to="/events" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="events">
                  <li>Events</li>
                </Link>
                <Link to="/case" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Case Studies">
                  <li>Case Studies</li>
                </Link>
              </ul>
            )}
          </div>
          <div className="navigation-icon">
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }} aria-label="Contact" role="button" aria-haspopup="true" >
              < ContactPageIcon className='icon' onMouseDown={handleLinkClick} />
            </Link>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={handleClick} onMouseDown={handleLinkClick} aria-label="Contact">
              <p className="icon-name">Contact</p>
            </Link>
          </div>
          <button className={darkMode ? 'sun' : 'moon'} onClick={handleModeToggle} aria-label="theme">
            {darkMode ? <LightModeIcon className='theme' /> : <DarkModeIcon className='theme' />}
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMenu} aria-label="menu">
          {isMenuOpen ? <CloseIcon className='icon' /> : <MenuIcon className='icon' />}
        </div>
      </div>
      {showProgressLine && (
        <motion.div
          className="progress-line"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={handleProgressLineComplete}
        />
      )}
    </motion.nav >
  );
});

export default Navbar;
