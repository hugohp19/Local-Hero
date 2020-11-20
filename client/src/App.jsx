import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import Homepage from './pages/Homepage';
import LocalVoice from './pages/LocalVoice';
import MsgRep from './pages/MsgRep';
import Navbar from './components/Navbar';
import ThankYou from './pages/ThankYou';
import WhoRepYou from './pages/WhoRepYou';
import YvYv from './pages/YvYv';
import RepProfile from './pages/RepProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/LocalVoice" component={LocalVoice} />
        <Route exact path="/MsgRep" component={MsgRep} />
        <Route exact path="/ThankYou" component={ThankYou} />
        <Route exact path="/WhoRepYou" component={WhoRepYou} />
        <Route exact path="/YvYv" component={YvYv} />
        <Route exact path="/RepProfile" component={RepProfile} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
