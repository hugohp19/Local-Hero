import React from 'react';
import arrow from '../../assets/images/right-arrow.svg';
import NoImage from '../../assets/images/NoProfileImage.png';
import './RepsCard.css';

const RepsCard = ({ name, photo, party, position }) => {
  return (
    <div className="repCard-container">
      <div className="repName-container">
        <h3>{name}</h3>
      </div>
      <div className="repInfo-container">
        <div className="profile-photo">
          <img src={photo ? photo : NoImage} alt="Profile" />
        </div>
        <div className="right-container">
          <h3 className="title-name">{position}</h3>
          <h3 className="county-name">Miami-Dade County</h3>
          <h3 className="party-name">{party}</h3>
        </div>
        <div className="arrow">
          <img src={arrow} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default RepsCard;
