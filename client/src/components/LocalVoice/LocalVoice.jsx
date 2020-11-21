import React from 'react';
import { Link } from 'react-router-dom';
import './LocalVoice.css';

const LocalVoice = () => {
  return (
    <div className="body">
      <div className="lvtitle">
        <h1>Your Local</h1>
        <h1>Voice</h1>
      </div>
      <div className="title2">
        <h4>The city can't fix what</h4>
        <h4>it doesn't know is</h4>
        <h4>broken...</h4>
      </div>
      <div className="buttons">
        <button className="findrepbutton">
          <h3>Find My Representatives</h3>
          <p>Make some noise and let the</p>
          <p>people who represent you hear it!</p>
        </button>
        <button className="submitreqbutton">
          <h3>Submit Request</h3>
          <p>Pothole? Graffiti? Let the</p>
          <p>city know what needs attention.</p>
        </button>
        <Link to="./YvYv">
          <button className="essentialsbutton">
            <h3>The Voter Essentials</h3>
            <p>Ballots, poll sites, dates?</p>
            <p>Everything you need to know in</p>
            <p>one place.</p>
          </button>
        </Link>
        <button className="calendarbutton">
          <h3>City Calendar</h3>
          <p>Upcoming elections, city</p>
          <p>meetings, town halls...You</p>
          <p>can't go if you don't know.</p>
        </button>
      </div>
    </div>
  );
};

export default LocalVoice;
