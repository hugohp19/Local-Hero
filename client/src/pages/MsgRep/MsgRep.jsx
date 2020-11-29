import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import './MsgRep.css';
import ThankYou from '../../components/MsgSentConf/ThankYou';
import backArrow from '../../assets/images/backArrow.svg';

const MessageYourRep = (props) => {
  const [formData, setFormData] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(true);
  const history = useHistory();
  console.log(props.location.state.pass);
  const Rep_name = props.location.state.pass;

  const handleChange = async (event) => {
    await setFormData({ ...formData, [event.target.name]: event.target.value });

    if (formData.email && formData.subject && formData.message) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const { email, subject, message } = formData;
      console.log(email, subject, message);
      let templateParams = {
        from_name: email,
        to_name: 'gazeva@gmail.com',
        subject: subject,
        message_html: message
      };
      emailjs.send(
        'service_5qmytps',
        'template_02134vh',
        templateParams,
        'user_XPfMxtvcHQbduQlG6X9HQ'
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  function resetForm() {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="msgrep">
      <div className="reptitle">
        <img src={backArrow} className="backArrow" onClick={goBack} />
        <h3 className="mr-title">
          {' '}
          Messaging Your <span>REP</span>
        </h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label id="label">Your email address</label>
        <input
          id="text"
          type="email"
          name="email"
          placeholder="Youremail@email.com"
          onChange={handleChange}
        ></input>
        <label id="label">Message recipient</label>
        <input
          id="text"
          type="text"
          name="subject"
          value={Rep_name}
          onChange={handleChange}
        ></input>
        {/* <p id="text" className="recipient">
          The Duke of Naboo
        </p> */}
        <label id="label">Subject</label>
        <input
          id="text"
          type="text"
          name="subject"
          placeholder="Give them a little peak into your message"
          onChange={handleChange}
        ></input>
        <div className="lrgtxt">
          <label id="label">Insert message</label>
          <textarea
            rows="9"
            cols="34"
            name="message"
            placeholder="Let them know what is on your mind"
            onChange={handleChange}
          ></textarea>
        </div>
        <ThankYou type="submit" disabled={btnDisabled} />
      </form>
    </div>
  );
};

export default MessageYourRep;
