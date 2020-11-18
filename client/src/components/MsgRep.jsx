import React from 'react';
import './MsgRep.css';

const MessageYourRep = () => {
  return (
    <div className="msgrep">
      <div className="reptitle">
        <h1>Messaging Your Rep</h1>
      </div>
      <form>
        <label id="label">Your email address</label>
        <input type="email"></input>
        <label id="label">Message recipient</label>
        <p className="recipient">The Duke of Naboo</p>
        <label id="label">Subject</label>
        <input type="text"></input>
        <label id="label">Insert message</label>
        <input type="text"></input>
        <button className="send">SEND</button>
      </form>
    </div>
  );
};

export default MessageYourRep;
