import React from 'react';
import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2>Socials</h2>
          <div className="icons">
            <a href="https://www.facebook.com/panindia105" target={'_blank'} rel="noreferrer"><FacebookIcon className='icon1' /></a>
            <a href="https://www.linkedin.com/in/pan-india-consultants-1b57831a9/" target={'_blank'} rel="noreferrer"> <LinkedInIcon className='icon2' /></a>
          </div>
        </div>
        <div className="footer__right">
          <h2>Address</h2>
          <Link to="/address" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='location'>
              <LocationOnIcon className='locicon' />
              <div className='add'>105, Phase IV, Udyog Vihar, Gurugram - 122015, Haryana, India</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2023 Pan India Consultants Pvt. Ltd. - All Rights Reserved</p>
      </div>
    </footer>
  );
});

export default Footer;
