import React from 'react';
import './MsgRep.css';

const MessageYourRep = () => {
  return (
    <div className="msgrep">
      <div className="reptitle">
        <button className="back">
          <h1>&lt;</h1>
        </button>
        <h3 className="title"> Messaging Your </h3>
        <h3 className="rep"> REP </h3>
      </div>
      <div className="form">
        <label id="label">Your email address</label>
        <input id="text" type="email"></input>
        <label id="label">Message recipient</label>
        <p id="text" className="recipient">
          The Duke of Naboo
        </p>
        <label id="label">Subject</label>
        <input id="text" type="text"></input>
        <label id="label">Insert message</label>
        <textarea rows="10" cols="34"></textarea>
        <button className="send">SEND</button>
      </div>
    </div>
  );
};

export default MessageYourRep;
