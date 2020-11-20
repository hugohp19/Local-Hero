import React from 'react';
import { Card, Button } from 'react-bootstrap';

const YvYv = () => {
  return (
    <div>
      <Card
        className="title"
        style={{
          lineHeight: '0.75em',
          backgroundColor: 'navy',
          height: '80px',
          color: 'white',
          padding: '20px'
        }}
      >
        <h1>Your Vote</h1>
        <h1>Your Voice</h1>
      </Card>
      <Card
        className="register"
        style={{
          display: 'flex',
          marginTop: '100px',
          backgroundColor: 'lightblue',
          padding: '15px',
          maxWidth: '400px',
          borderRadius: '2%'
        }}
      >
        <h4 id="text">First stop, are you registered? Find out!</h4>
        <button
          className="regbutton"
          style={{
            position: 'relative',
            maxHeight: '50px',
            minWidth: '150px',
            maxWidth: '150px',
            borderRadius: '8%',
            backgroundColor: 'lightblue',
            marginLeft: '20px',
            marginTop: '10px'
          }}
        >
          REGISTER
        </button>
      </Card>
      <div
        className="ballot"
        style={{
          display: 'flex',
          marginTop: '100px',
          backgroundColor: 'lightblue',
          padding: '15px',
          maxWidth: '400px',
          borderRadius: '2%'
        }}
      >
        <h4 id="text">What is on my ballot?</h4>
        <button
          className="ballotbutton"
          style={{
            position: 'relative',
            maxHeight: '50px',
            minWidth: '150px',
            maxWidth: '150px',
            borderRadius: '8%',
            backgroundColor: 'lightblue',
            marginLeft: '30px'
          }}
        >
          MY BALLOT
        </button>
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
