import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FindMyRepIcon from '../../assets/images/FindRepICON.svg';
import SubmitIcon from '../../assets/images/Submit_ICON.svg';
import VoterIcon from '../../assets/images/Voter_ICON.svg';
import './LocalVoice.css';

const LocalVoice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="localVoice-buttons-text">
              <h5 id="localVoice-title">Find My Representatives</h5>
              <p>
                Make some noise and let the people who represent you hear it!
              </p>
            </div>
            <div className="localVoice-buttons-image">
              <img src={FindMyRepIcon} />
            </div>
          </button>
        </Link>
        <Link to="localissuespage">
          <button id="localVoice-buttons">
            <div className="localVoice-buttons-text">
              <h5 id="localVoice-title">Submit Request</h5>
              <p>Pothole? Graffiti?</p>
              <p>Let the city know what needs attention.</p>
            </div>
            <div className="localVoice-buttons-image">
              <img src={SubmitIcon} />
            </div>
          </button>
        </Link>

        <Link to="./YourVoteYourVoice">
          <button id="localVoice-buttons">
            <div className="localVoice-buttons-text">
              <h5 id="localVoice-title">The Voter Essentials</h5>
              <p>Ballots, poll sites, dates?</p>
              <p>Everything you need to know in one place.</p>
            </div>
            <div className="localVoice-buttons-image">
              <img src={VoterIcon} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LocalVoice;
