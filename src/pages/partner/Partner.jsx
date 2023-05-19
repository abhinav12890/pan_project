import React from 'react';
import './partner.scss';
import { logo } from '../../formSource';

const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
        {logo.map((logo, index) => (
          <img
            key={index}
            src={logo.imgsrc}
            alt="partners"
            className="form-image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
