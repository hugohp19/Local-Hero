import React from 'react';

const LocalVoice = () => {
  return (
    <div>
      <div className="lvtitle">
        <h1>Your Local Voice</h1>
      </div>
      <div>
        <h2>The city can't fix what</h2>
        <h2>it doesn't know is</h2>
        <h2>broken...</h2>
      </div>
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
      <button className="essentialsbutton">
        <h3>The Voter Essentials</h3>
        <p>Ballots, poll sites, dates?</p>
        <p>Everything you need to know in</p>
        <p>one place.</p>
      </button>
      <button className="calendarbutton">
        <h3>City Calendar</h3>
        <p>Upcoming elections, city</p>
        <p>meetings, town halls...You</p>
        <p>can't go if you don't know.</p>
      </button>
    </div>
  );
};

export default LocalVoice;
