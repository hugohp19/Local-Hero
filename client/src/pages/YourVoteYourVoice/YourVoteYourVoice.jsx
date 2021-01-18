import React from 'react';
import './YourVoteYourVoice.css';

const YourVoteYourVoice = () => {
  return (
    <div id="yvyv-fullpage">
      <div id="yvyv-title">
        <h3 className="yvyv-pagetitle">Your</h3>
        <h3 className="yvyv-pagetitle2">Vote</h3>
        <h3 className="yvyv-pagetitle">, Your</h3>
        <h3 className="yvyv-pagetitle2">Voice</h3>
      </div>
      <div id="yvyv-boxes">
        <div className="yvyv-box">
          <h5 className="yvyv-text">First stop, are you registered?</h5>
          <button
            className="yvyv-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.usa.gov/register-to-vote');
            }}
          >
            Find out!
          </button>
        </div>
        <div className="yvyv-box" id="ballot">
          <h5 className="yvyv-text">What is on my ballot?</h5>
          <button
            className="yvyv-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.vote.org/ballot-information/');
            }}
          >
            My Ballot
          </button>
        </div>
        <div className="yvyv-box">
          <h5 className="yvyv-title2">Want to learn more about voting?</h5>
          <button
            className="yvyv-button"
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

export default YourVoteYourVoice;
