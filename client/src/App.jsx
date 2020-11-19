import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import Footer from './components/Footer';
// import Homepage from './components/Homepage';
import home from './pages/home';
import LocalVoice from './components/LocalVoice';
import MsgRep from './components/MsgRep';
import Navbar from './components/Navbar';
import ThankYou from './components/ThankYou';
import WhoRepYou from './components/WhoRepYou';
import YvYv from './components/YvYv';
import RepProfile from './components/RepProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/LocalVoice" component={LocalVoice} />
        <Route exact path="/MsgRep" component={MsgRep} />
        <Route exact path="/ThankYou" component={ThankYou} />
        <Route exact path="/WhoRepYou" component={WhoRepYou} />
        <Route exact path="/YvYv" component={YvYv} />
        <Route exact path="/RepProfile" component={RepProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
