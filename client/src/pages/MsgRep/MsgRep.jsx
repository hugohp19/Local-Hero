import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import './MsgRep.css';
import ThankYou from '../../components/MsgSentConf/ThankYou';
import backArrow from '../../assets/images/backArrow.svg';
import swal from 'sweetalert';
import noEmail from '../../assets/images/noEmail.svg';
import warning from '../../assets/images/warning.svg';
import wrong from '../../assets/images/wrong.svg';

const MessageYourRep = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const [show, setShow] = useState(false);
  //console.log(props.location.state.pass);
  const Rep_name = props.location.state.pass;

  const handleChange = async (event) => {
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'subject') setSubject(event.target.value);
    if (event.target.name === 'message') setMessage(event.target.value);

    if (email && subject && message) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      swal({ text: 'Enter an Email', icon: noEmail });
      return;
    } else if (!validateEmail(email)) {
      swal({ text: 'Enter a valid Email', icon: noEmail });
      return;
    }

    if (!subject) {
      swal({ text: 'Subject is Required', icon: warning });
      return;
    }

    if (!message) {
      swal({ text: 'A Message is Required', icon: warning });
      return;
    }

    try {
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
      setShow(true);
      resetForm();
    } catch (error) {
      swal({ text: 'Something Went Wrong', icon: wrong });
    }
  };
  function resetForm() {
    setEmail('');
    setSubject('');
    setMessage('');
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="msgrep">
      <div className="reptitle">
        <img
          src={backArrow}
          className="backArrow"
          onClick={goBack}
          alt="backArrow"
        />
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
          value={email}
          onChange={handleChange}
        ></input>
        <label id="label">Message recipient</label>
        <input
          id="text"
          type="text"
          name="subject"
          value={Rep_name}
          onChange={handleChange}
          disabled
        ></input>
        {/* <p id="text" className="recipient">
          The Duke of Naboo
        </p> */}
        <label id="label">Subject</label>
        <input
          id="text"
          type="text"
          name="subject"
          value={subject}
          placeholder="Give them a little peak into your message"
          onChange={handleChange}
        ></input>
        <div className="lrgtxt">
          <label id="label">Insert message</label>
          <textarea
            rows="9"
            cols="34"
            name="message"
            value={message}
            placeholder="Let them know what is on your mind"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <input value="Submit" type="submit" /> */}
        <ThankYou
          type="submit"
          disabled={btnDisabled}
          show={show}
          setShow={setShow}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default MessageYourRep;
