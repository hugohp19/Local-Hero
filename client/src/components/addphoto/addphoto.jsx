import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const Addphoto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add an Image
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit a photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="light">Take Photo</Button>
          <Form>
            <Form.File id="custom-file" label="Select a photo" custom />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Accept</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addphoto;
