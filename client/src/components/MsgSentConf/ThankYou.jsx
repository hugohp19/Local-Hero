import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './ThankYou.css';

function ThankYou({ disabled, handleSubmit, show, setShow }) {
  //const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button
        id="sendbtn"
        variant="primary"
        onClick={handleSubmit}
        disabled={disabled}
      >
        SEND
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Message Has Been Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A response to your message will be sent to the email address your
          provided.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="./your-reps">
            <Button variant="primary">Back to Profile</Button>
          </Link>
          <Link to="./">
            <Button variant="primary">Home</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ThankYou;
