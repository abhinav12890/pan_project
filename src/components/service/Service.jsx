import React from 'react';
import './service.scss';

const Service = ({ name, image, desc, onClick }) => {
  return (
    <div className='service' onClick={onClick}>
      <div className="profile-card">
        <div className="profile-image">
          <img src={image} alt={name} width="300" height="200" loading="lazy"/>
        </div>
        <div className="name-section">
          <h2 className="name">{name}</h2>
        </div>
        <div className="designation-section">
          <p className="designation">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Service);
