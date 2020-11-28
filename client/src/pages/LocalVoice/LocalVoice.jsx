import React from 'react';
import { Link } from 'react-router-dom';
import './LocalVoice.css';

const LocalVoice = () => {
  return (
    <div className="main">
      <div className="lvtitle">
        <h3>Your Local</h3>
        <h3 className="voice">VOICE</h3>
      </div>
      <div className="title2">
        <h5>The city can't fix what</h5>
        <h5>it doesn't know is</h5>
        <h5>broken...</h5>
      </div>
      <div className="buttons" id="findMyRepNtn">
        <Link to="/findmyreps">
          <button id="lvtitles">
            <h5 id="title">Find My Representatives</h5>
            <p>Make some noise and let the</p>
            <p>people who represent you hear it!</p>
          </button>
        </Link>
        <Link to="localissuespage">
          <button id="lvtitles">
            <h5 id="title">Submit Request</h5>
            <p>Pothole? Graffiti? Let the</p>
            <p>city know what needs attention.</p>
          </button>
        </Link>

        <Link to="./YvYv">
          <button id="lvtitles">
            <h5 id="title">The Voter Essentials</h5>
            <p>Ballots, poll sites, dates?</p>
            <p>Everything you need to know in</p>
            <p>one place.</p>
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
