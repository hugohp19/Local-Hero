import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="body">
      <Card className="actiondiv">
        <h1>Think globally,</h1>
        <h1>ACT LOCALLY</h1>
        <p>
          Engaging with your local government can do more for you than you think
        </p>
        <Link to="./LocalVoice">
          <Button className="actionbutton">TAKE ACTION</Button>
        </Link>
      </Card>
      <Card className="lhdiv">
        <h3>Local heroes are born everyday.</h3>
        <h3>Get involved, get results.</h3>
      </Card>
      <Card className="buttons">
        <Button className="hpconnect">
          <h3> Connect With Representatives</h3>
        </Button>
        <Button className="hpsubmit">
          <h3>Submit Requests</h3>
        </Button>
        <Link to="./YvYv">
          <Button className="hpvoter">
            <h3>Voter Resources</h3>
          </Button>
        </Link>
        <Button className="hpcity">
          <h3>City Calendar</h3>
        </Button>
      </Card>

      <div className="quiz">
        <h2>How much do you know about local politics?</h2>
        <p>(Don't worry we won't judge)</p>
        <button className="quizbutton">Take the quiz</button>
      </div>
      <div className="lhtitle">
        <h2>Local Heroes</h2>
      </div>
    </div>
  );
};

export default Homepage;
