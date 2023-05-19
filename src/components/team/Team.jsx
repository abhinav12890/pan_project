import React from "react";
import './team.scss';

const Team = React.memo(({ name, image, designation, onClick }) => {
  return (
    <div className='team' onClick={onClick}>
      <span className="borderline"></span>
      <div className="profile-card">
        <div className="profile-image">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="name-section">
          <h2 className="name">{name}</h2>
        </div>
        <div className="designation-section">
          <p className="designation">{designation}</p>
        </div>
      </div>
    </div>
  )
});

export default Team;
