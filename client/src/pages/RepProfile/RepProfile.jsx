import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/images/backArrow.svg';
import email from '../../assets/images/email.svg';
import phone from '../../assets/images/phone.svg';
import './RepProfile.css';

const RepProfile = (props) => {
  const { individualRep, setIndividualRep } = useContext(AppContext);
  const representative = props.location.state.pass;
  setIndividualRep(representative);
  console.log(props.location.state.pass);
  console.log(individualRep);

  return (
    <div className="rp-body">
      <div className="rp-repcard">
        <Link to="/your-reps">
          <img src={backArrow} className="backArrow" />
        </Link>
        <p className="rp-party">
          {representative.party
            ? representative.party.toUpperCase()
            : 'Independent'}
        </p>
        <div className="rp-profileinfo-container">
          <div className="rp-profilePhoto">
            <img src={representative.photo_origin_url} />
          </div>
          <div className="rp-namestack">
            <div className="rp-profileinfo">
              <h5 className="rp-name">
                {representative.first_name + ' ' + representative.last_name}
              </h5>
              <h6 className="rp-jobtitle">
                {representative.office.title +
                  ', ' +
                  (representative.office.representing_city
                    ? representative.office.representing_city
                    : representative.office.representing_state)}
              </h6>
            </div>
            <Link to="/MsgRep">
              <button className="rp-sendbutton">SEND MESSAGE</button>
            </Link>
          </div>
        </div>
        <div className="rp-footerinfo">
          <div>
            <img src={email} className="rp-icons" />
            <p className="rp-emailinfo">
              {representative.email_addresses[0]
                ? representative.email_addresses[0]
                : 'No-Email'}
            </p>
          </div>
          <div>
            <img src={phone} className="rp-icons" />
            <p className="rp-phoneinfo">
              {representative.addresses[0].phone_1
                ? representative.addresses[0].phone_1
                : representative.addresses[0].fax_1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepProfile;
