import React from 'react';
import './RepProfile.css';

const RepProfile = () => {
  return (
    <div>
      <div className="repcontainer">
        <h2 className="name">Daniella Levine-Cava</h2>
        <h3 className="title">Miami Dade County Mayor</h3>
        <p className="email">Daniellalc@gov.com</p>
        <p className="phone">202-225-2778</p>
        <button className="msgbutton">SEND MESSAGE</button>
      </div>
      <div id="repstats">
        <div id="repstat">
          <h2>4</h2>
          <p>Committee</p>
          <p>Assignments</p>
        </div>
        <div id="repstat">
          <h2>1</h2>
          <p>Years of</p>
          <p>Experience</p>
        </div>
        <div id="repstat">
          <h2>21</h2>
          <p>Items</p>
          <p>Voted On</p>
        </div>
      </div>
      <div className="tabs">
        <ul>
          <li>About</li>
          <li>Votes</li>
          <li>Positions</li>
        </ul>
      </div>
      <div className="tweets">
        <h3 className="tweettitle">What They're Saying</h3>
      </div>
    </div>
  );
};

export default RepProfile;
