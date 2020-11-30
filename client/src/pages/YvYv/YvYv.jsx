import React from 'react';
import './YvYv.css';

const YvYv = () => {
  return (
    <div id="yvfullpage">
      <div id="yvtitle">
        <h3 className="yvpagetitle">Your</h3>
        <h3 className="yvpagetitle2">Vote</h3>
        <h3 className="yvpagetitle">, Your</h3>
        <h3 className="yvpagetitle2">Voice</h3>
      </div>
      <div id="yvboxes">
        <div className="yvbox">
          <h5 className="yvtext">First stop, are you registered?</h5>
          <button
            className="yvbutton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.usa.gov/register-to-vote');
            }}
          >
            Find out!
          </button>
        </div>
        <div className="yvbox" id="ballot">
          <h5 className="yvtext">What is on my ballot?</h5>
          <button
            className="yvbutton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.vote.org/ballot-information/');
            }}
          >
            My Ballot
          </button>
        </div>
        <div className="yvbox">
          <h5 className="yvtitle2">Want to learn more about voting?</h5>
          <button
            className="yvbutton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.usa.gov/voting');
            }}
          >
            Voting Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default YvYv;
