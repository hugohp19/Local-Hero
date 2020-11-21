import React from 'react';
import './YvYv.css';

const YvYv = () => {
  return (
    <div>
      <div className="title">
        <h1>Your Vote</h1>
        <h1>Your Voice</h1>
      </div>
      <div className="register">
        <h4 id="text">First stop, are you registered? Find out!</h4>
        <button className="regbutton">REGISTER</button>
      </div>
      <div className="ballot">
        <h4 id="text">What is on my ballot?</h4>
        <button className="ballotbutton">MY BALLOT</button>
      </div>
      <div className="resources">
        <h4>Voting</h4>
        <h4>Everything You Need To Know</h4>
      </div>
    </div>
  );
};

export default YvYv;
