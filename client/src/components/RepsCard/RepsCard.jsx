import React from 'react';
import arrow from '../../assets/images/right-arrow.svg';
import './RepsCard.css';

const RepsCard = ({ name, photo, party, position }) => {
  return (
    <div className="repCard-container">
      <div className="repName-container">
        <h3>{name}</h3>
      </div>
      <div className="repInfo-conatiner">
        <img src={photo} alt="Profile" />
        <div className="right-conatiner">
          <h3>{position}</h3>
          <h3>Miami-Dade County</h3>
          <h3>{party}</h3>
        </div>
        <div className="arrow">
          <img src={arrow} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default RepsCard;
