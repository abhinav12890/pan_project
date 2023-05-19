import React from 'react';
import './slider.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { logo } from '../../formSource';

const Slider = React.memo(() => {
  return (
    <motion.div className="slider" variants={fadeIn('left', 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
      <Link to="/partner" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="slide-track-1">
          {logo.map((logo, index) => (
            <div key={index} className="slide">
              <img
                src={logo.imgsrc}
                alt={`${index + 1}`}
                width="200"
                height="150"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}, () => true);

export default Slider;
