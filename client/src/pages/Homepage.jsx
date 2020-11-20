import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div
      style={{
        display: 'flex-column',
        position: 'relative',
        backgroundColor: 'blue'
      }}
    >
      <Card
        className="actiondiv"
        style={{
          backgroundColor: 'navy',
          color: 'white',
          padding: '15px',
          height: '18rem'
        }}
      >
        <h1>Think globally,</h1>
        <h1>ACT LOCALLY</h1>
        <p>
          Engaging with your local government can do more for you than you think
        </p>
        <Link to="./LocalVoice">
          <Button
            className="actionbutton"
            style={{
              backgroundColor: 'red',
              boxShadow: '5px 8px black',
              color: 'white',
              border: 'none',
              borderRadius: '8%',
              padding: '15px'
            }}
          >
            TAKE ACTION
          </Button>
        </Link>
      </Card>
      <Card
        className="lhdiv"
        style={{
          backgroundColor: 'lightblue',
          color: 'navy',
          maxWidth: '350px',
          borderRadius: '5%',
          boxShadow: '5px 10px',
          padding: '10px'
        }}
      >
        <h3>Local heroes are born everyday.</h3>
        <h3>Get involved, get results.</h3>
      </Card>
      <Card
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          alignContent: 'space-around',
          justifyContent: 'space-evenly'
        }}
      >
        <Button
          className="hpconnect"
          style={{
            position: 'relative',
            color: 'white',
            backgroundColor: 'navy',
            height: '150px',
            width: '160px',
            padding: '10px',
            boxShadow: '5px 10px navy',
            borderRadius: '5%',
            marginTop: '15px'
          }}
        >
          <h3> Connect With Representatives</h3>
        </Button>
        <Button
          className="hpsubmit"
          style={{
            position: 'relative',
            color: 'white',
            backgroundColor: 'navy',
            height: '150px',
            width: '160px',
            padding: '10px',
            boxShadow: '5px 10px navy',
            borderRadius: '5%',
            marginTop: '15px'
          }}
        >
          <h3>Submit Requests</h3>
        </Button>
        <Link to="./YvYv">
          <Button
            className="hpvoter"
            style={{
              position: 'relative',
              color: 'white',
              backgroundColor: 'navy',
              height: '150px',
              width: '160px',
              padding: '10px',
              boxShadow: '5px 10px navy',
              borderRadius: '5%',
              marginTop: '15px'
            }}
          >
            <h3>Voter Resources</h3>
          </Button>
        </Link>
        <Button
          className="hpcity"
          style={{
            position: 'relative',
            color: 'white',
            backgroundColor: 'navy',
            height: '150px',
            width: '160px',
            padding: '10px',
            boxShadow: '5px 10px darkblue',
            borderRadius: '5%',
            marginTop: '15px'
          }}
        >
          <h3>City Calendar</h3>
        </Button>
      </Card>

      <div
        className="quiz"
        style={{
          position: 'relative',
          backgroundColor: 'lightblue',
          color: 'navy',
          height: '160px',
          minWidth: '300px',
          maxWidth: '300px',
          boxShadow: '5px 10px',
          borderRadius: '5%',
          padding: '10px',
          marginTop: '15px'
        }}
      >
        <h2>How much do you know about local politics?</h2>
        <p>(Don't worry we won't judge)</p>
        <button
          className="quizbutton"
          style={{
            height: '30px',
            width: '160px',
            boxShadow: '3px 5px navy',
            backgroundColor: 'lightblue',
            border: '1px solid navy',
            borderRadius: '8%'
          }}
        >
          Take the quiz
        </button>
      </div>
      <div
        className="lhtitle"
        style={{ position: 'relative', color: 'white', padding: '10px' }}
      >
        <h2>Local Heroes</h2>
      </div>
    </div>
  );
};

export default Homepage;
