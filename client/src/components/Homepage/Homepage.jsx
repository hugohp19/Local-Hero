import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="body">
      <div className="actiondiv">
        <h1>Think globally,</h1>
        <h1>ACT LOCALLY</h1>
        <p>
          Engaging with your local government can do more for you than you think
        </p>
        <Link to="./LocalVoice">
          <button className="actionbutton">TAKE ACTION</button>
        </Link>
      </div>
      <div className="lhdiv">
        <p>Local heroes are born everyday.</p>
        <h3>Get involved, get results.</h3>
      </div>
      <div className="buttons">
        <button className="hpconnect">
          <h4>CONNECT</h4>
          <h5>With Representatives</h5>
        </button>
        <button className="hpsubmit">
          <h4>SUBMIT</h4>
          <h5>Requests</h5>
        </button>
        <Link to="./YvYv">
          <button className="hpvoter">
            <h4>VOTER</h4>
            <h5>Resources</h5>
          </button>
        </Link>
        <button className="hpcity">
          <h4>CITY</h4>
          <h5>Calendar</h5>
        </button>
      </div>
      <div className="quiz">
        <h3>How much do you know about local politics?</h3>
        <p>(Don't worry we won't judge)</p>
        <button className="quizbutton">Take the quiz</button>
      </div>
      <div className="lhtitle">
        <h3>Local</h3>
        <h3>Heroes</h3>
      </div>
    </div>
  );
};

export default Homepage;
