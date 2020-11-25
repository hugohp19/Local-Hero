import React from 'react';
// import { AppContextProvider } from './context/AppContext';
import Homepage from './pages/Homepage/Homepage';
import LocalVoice from './pages/LocalVoice/LocalVoice';
import MsgRep from './pages/MsgRep/MsgRep';
import Navbar from './components/Navbar';
import WhoRepYou from './pages/WhoRepYou/WhoRepYou';
import YvYv from './pages/YvYv/YvYv';
import RepProfile from './pages/RepProfile/RepProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LocalIssuesPage from './pages/LocalIssuesPage/LocalIssuesPage';
import FindMyRep from './pages/FindMyRepPage/FindMyRep';
import YourReps from './pages/YourRepsPage/YourReps';
import { AppContextProvider } from './context/AppContext';
import MapContainer from './pages/MapContainer';
import Profile from './pages/Profile';
import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/LocalVoice" component={LocalVoice} />
          <Route exact path="/MsgRep" component={MsgRep} />
          {/* <Route exact path="/ThankYou" component={ThankYou} /> */}
          <Route exact path="/WhoRepYou" component={WhoRepYou} />
          <Route exact path="/YvYv" component={YvYv} />
          <Route exact path="/RepProfile" component={RepProfile} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Map" component={MapContainer} />
          <Route exact path="/LocalIssuesPage" component={LocalIssuesPage} />
          route
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
