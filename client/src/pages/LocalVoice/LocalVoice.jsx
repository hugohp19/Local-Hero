import React from 'react';
import { Link } from 'react-router-dom';
import './LocalVoice.css';

const LocalVoice = () => {
  return (
    <div className="localVoice-main">
      <div className="localVoice-title">
        <h3>
          Your Local <span className="localVoice-voice">VOICE</span>
        </h3>
      </div>
      <div className="localVoice-title2">
        <h5>The city can't fix what it doesn't know is broken...</h5>
      </div>
      <div className="localVoice-buttons-container">
        <Link to="/findmyreps">
          <button id="localVoice-buttons">
            <h5 id="localVoice-title">Find My Representatives</h5>
            <p>Make some noise and let the people who represent you hear it!</p>
          </button>
        </Link>
        <Link to="localissuespage">
          <button id="localVoice-buttons">
            <h5 id="localVoice-title">Submit Request</h5>
            <p>Pothole? Graffiti?</p>
            <p>Let the city know what needs attention.</p>
          </button>
        </Link>

        <Link to="./YourVoteYourVoice">
          <button id="localVoice-buttons">
            <h5 id="localVoice-title">The Voter Essentials</h5>
            <p>Ballots, poll sites, dates?</p>
            <p>Everything you need to know in one place.</p>
          </button>
        </Link>
        {/* <button id="lvtitles">
          <h5 id="title">City Calendar</h5>
          <p>Upcoming elections, city</p>
          <p>meetings, town halls...You</p>
          <p>can't go if you don't know.</p>
        </button> */}
      </div>
    </div>
  );
};

export default LocalVoice;
