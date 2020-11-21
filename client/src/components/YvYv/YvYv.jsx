import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './YvYv.css';

const YvYv = () => {
  return (
    <div>
      <Card className="title">
        <h1>Your Vote</h1>
        <h1>Your Voice</h1>
      </Card>
      <Card className="register">
        <h4 id="text">First stop, are you registered? Find out!</h4>
        <button className="regbutton">REGISTER</button>
      </Card>
      <div className="ballot">
        <h4 id="text">What is on my ballot?</h4>
        <button className="ballotbutton">MY BALLOT</button>
      </div>
      <div
        className="resources"
        style={{
          backgroundColor: 'navy',
          color: 'white',
          lineHeight: '0.5em',
          padding: '10px'
        }}
      >
        <h4>Voting</h4>
        <h4>Everything You Need To Know</h4>
      </div>
    </div>
  );
};

export default YvYv;
