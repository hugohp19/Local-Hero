import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="body">
      <div className="actiondiv">
        <h1>Think globally,</h1>
        <h1 id="boldtitle">ACT LOCALLY</h1>
        <p>
          Engaging with your local government can do more for you than you think
        </p>
        <Link to="/LocalVoice">
          <button className="actionbutton">TAKE ACTION</button>
        </Link>
      </div>
      <div className="lhdiv">
        <p>Local heroes are born everyday.</p>
        <h3 id="boldtitle">Get involved, get results.</h3>
      </div>
      <div className="buttons">
        <button id="buttons" className="connect">
          <h4 id="bttntitle">CONNECT</h4>
          <h5>With Representatives</h5>
        </button>
        <Link to="/localissuespage">
          <button id="buttons" className="submit">
            <h4 id="bttntitle">SUBMIT</h4>
            <h5>Requests</h5>
          </button>
        </Link>
        <Link to="/YvYv">
          <button id="buttons" className="voter">
            <h4 id="bttntitle">VOTER</h4>
            <h5>Resources</h5>
          </button>
        </Link>
        {/* <button id="buttons">
          <h4 id="bttntitle">CITY</h4>
          <h5>Calendar</h5>
        </button> */}
      </div>
      <div className="quiz" id="quizBox">
        <h3 id="boldtitle">How much do you know about local politics?</h3>
        <p>(Don't worry we won't judge)</p>

        <a
          target="_blank"
          href="https://www.benjerry.com/whats-new/2018/09/local-government-quiz"
        >
          <button className="quizbutton">Take the quiz</button>
        </a>
      </div>
      <div className="lhtitle">
        <h3 id="boldtitle">Local</h3>
        <h3 id="boldtitle">Heroes</h3>
      </div>
    </div>
  );
};

export default Homepage;
