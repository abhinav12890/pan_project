import React from 'react';
import './client.scss';
import { logo2 } from '../../formSource';

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        {logo2.map((logo, index) => (
          <img
            key={index}
            src={logo.imgsrc}
            alt="clients"
            className="form-image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Client;
