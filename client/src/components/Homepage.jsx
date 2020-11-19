import React from 'react';
const Homepage = () => {
  return (
    <div>
      <div className="actiondiv">
        <h2>Think globally,</h2>
        <h1>ACT LOCALLY</h1>
        <p>
          Engaging with your local government can do more for you than you think
        </p>
        <button className="actionbutton">TAKE ACTION</button>
      </div>
      <div className="lhdiv">
        <p>Local heroes are born everyday.</p>
        <h3>Get involved, get results.</h3>
      </div>
      <div className="hpconnect">
        <h1>CONNECT</h1>
        <h3>with representatives</h3>
      </div>
      <div className="hpsubmit">
        <h1>SUBMIT</h1>
        <h3>requests</h3>
      </div>
      <div className="hpvoter">
        <h1>VOTER</h1>
        <h3>resources</h3>
      </div>
      <div className="hpcity">
        <h1>CITY</h1>
        <h3>calendar</h3>
      </div>
      <div className="quiz">
        <h2>How much do you know about local politics?</h2>
        <p>(Don't worry we won't judge)</p>
        <button className="quizbutton">Take the quiz</button>
      </div>
      <div className="lhtitle">
        <h2>LOCAL</h2>
        <h2>HEROES</h2>
      </div>
    </div>
  );
};

export default Homepage;
