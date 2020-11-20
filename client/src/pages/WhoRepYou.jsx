import React from 'react';

const WhoRepYou = () => {
  return (
    <div className="page">
      <div className="title">
        <h1 className="who">Who</h1>
        <h1 className="rep">Represents</h1>
        <h1 className="you">You?</h1>
      </div>
      <div className="form">
        <label className="label">
          Enter your address to find your local representatives
        </label>
        <input className="inputbox" type="text" />
      </div>
      <button className="button">FIND MY REP</button>
    </div>
  );
};

export default WhoRepYou;
