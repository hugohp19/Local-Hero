import React from 'react';
// import { AppContextProvider } from './context/AppContext';
import Homepage from './components/Homepage/Homepage';
import LocalVoice from './components/LocalVoice/LocalVoice';
import MsgRep from './components/MsgRep/MsgRep';
import Navbar from './components/Navbar';
import ThankYou from './components/ThankYou/ThankYou';
import WhoRepYou from './components/WhoRepYou/WhoRepYou';
import YvYv from './components/YvYv/YvYv';
import RepProfile from './components/RepProfile/RepProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
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
