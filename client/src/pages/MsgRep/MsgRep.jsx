import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import './MsgRep.css';
import ThankYou from '../../components/MsgSentConf/ThankYou';

const MessageYourRep = () => {
  const [formData, setFormData] = useState(null);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
  return (
    <div className="msgrep">
      <div className="reptitle">
        <Link to="./repprofile">
          <button className="back">
            <h1>&lt;</h1>
          </button>
        </Link>
        <h3 className="title"> Messaging Your </h3>
        <h3 className="rep"> REP </h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label id="label">Your email address</label>
        <input
          id="text"
          type="email"
          name="email"
          onChange={handleChange}
        ></input>
        <label id="label">Message recipient</label>
        <p id="text" className="recipient">
          The Duke of Naboo
        </p>
        <label id="label">Subject</label>
        <input
          id="text"
          type="text"
          name="subject"
          onChange={handleChange}
        ></input>
        <div className="lrgtxt">
          <label id="label">Insert message</label>
          <textarea
            rows="10"
            cols="34"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        <ThankYou type="submit" />
      </form>
    </div>
  );
};

export default MessageYourRep;
