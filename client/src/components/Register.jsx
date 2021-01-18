import React, { useState } from 'react';
import { Form, Button, Modal, Dropdown, Col } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', formData);
    } catch (error) {
      swal(error);
    }
  };
  return (
    <>
      <Dropdown.Item variant="primary" onClick={handleShow}>
        Register
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Local Hero registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>Credentials</Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridConfirmEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 Main St"
                name="address"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Miami"
                  name="city"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="33125"
                  name="zipcode"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;
