import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import './RepProfile.css';

const RepProfile = (props) => {
  const { individualRep, setIndividualRep } = useContext(AppContext);
  setIndividualRep(props.location.state.pass);
  console.log(props.location.state.pass);

  return (
    <div className="body">
      <div className="repcard">
        <button className="back">
          <h3>&lt;</h3>
        </button>
        <p className="party">DEMOCRAT</p>
        <div>
          <span className="profilepic"></span>
        </div>
        <div className="namestack">
          <h5 className="name">Daniela Levine-Cava</h5>
          <h6 className="jobtitle">Mayor Miami-Dade County</h6>
          <Link to="/MsgRep">
            <button className="sendbutton">SEND MESSAGE</button>
          </Link>
        </div>
        <div className="footerinfo">
          <p className="emailinfo">Daniellac@gov.com</p>
          <p className="phoneinfo">(202) 225-2778</p>
        </div>
      </div>
    </div>
  );
};

export default RepProfile;
