import React from 'react';
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
          <h3>{party}</h3>
        </div>
      </div>
    </div>
  );
};

export default RepsCard;
