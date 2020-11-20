import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LocalVoice = () => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <Card
        className="lvtitle"
        style={{ backgroundColor: 'navy', color: 'white', padding: '10px' }}
      >
        <h1>Your Local</h1>
        <h1>Voice</h1>
      </Card>
      <Card style={{ padding: '10px' }}>
        <h4>The city can't fix what</h4>
        <h4>it doesn't know is</h4>
        <h4>broken...</h4>
      </Card>
      <Card
        style={{
          display: 'flex-wrap',
          justifyContent: 'space-evenly',
          padding: '10px'
        }}
      >
        <Button
          className="findrepbutton"
          style={{
            position: 'relative',
            minHeight: '130px',
            maxHeight: '130px',
            minWidth: '350px',
            maxWidth: '350px',
            borderRadius: '5%',
            backgroundColor: 'lightblue'
          }}
        >
          <h3>Find My Representatives</h3>
          <p>Make some noise and let the</p>
          <p>people who represent you hear it!</p>
        </Button>
        <Button
          className="submitreqbutton"
          style={{
            position: 'relative',
            minHeight: '130px',
            maxHeight: '130px',
            minWidth: '350px',
            maxWidth: '350px',
            borderRadius: '5%',
            backgroundColor: 'lightblue'
          }}
        >
          <h3>Submit Request</h3>
          <p>Pothole? Graffiti? Let the</p>
          <p>city know what needs attention.</p>
        </Button>
        <Link to="./YvYv">
          <Button
            className="essentialsbutton"
            style={{
              position: 'relative',
              minHeight: '130px',
              maxHeight: '130px',
              minWidth: '350px',
              maxWidth: '350px',
              borderRadius: '5%',
              backgroundColor: 'lightblue'
            }}
          >
            <h3>The Voter Essentials</h3>
            <p>Ballots, poll sites, dates?</p>
            <p>Everything you need to know in</p>
            <p>one place.</p>
          </Button>
        </Link>
        <Button
          className="calendarbutton"
          style={{
            position: 'relative',
            minHeight: '130px',
            maxHeight: '130px',
            minWidth: '350px',
            maxWidth: '350px',
            borderRadius: '5%',
            backgroundColor: 'lightblue'
          }}
        >
          <h3>City Calendar</h3>
          <p>Upcoming elections, city</p>
          <p>meetings, town halls...You</p>
          <p>can't go if you don't know.</p>
        </Button>
      </Card>
    </div>
  );
};

export default LocalVoice;
