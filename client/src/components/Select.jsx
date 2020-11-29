import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Image } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import Addphoto from '../components/addphoto/addphoto';
import './Select.css';
import confirm from '../components/confirm/confirm';

const Select = () => {
  const [required, setRequired] = useState();
  const [isOpen, setIsopen] = useState(false);

  const handleSubmit = async () => {
    // setRequired(true);
    // try {
    //     await axios ({
    //         method: 'POST',
    //         url:
    //     })
    // }
  };

  return (
    <Form className="page">
      <fieldset>
        <div className="text">
          <h6>Step 1</h6>
          <h3>Select a Request Category</h3>
        </div>
        <Form.Group
          as={Row}
          name="required"
          value={required}
          onChange={(e) => setRequired(e.target.value)}
        >
          <Form.Label as="legend"></Form.Label>
          <Col sm={10} className="group">
            <Form.Check
              type="radio"
              label="Code Enforcement"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Parking Division"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Parks & Recreation"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Public Works"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Other"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <div class="text">
        <h6>Step 2</h6>
        <h3>Add Photo</h3>
        <p>Please add a photo to help us better identify your request</p>
        {/* <Container>
            <Row>
            <Col xs={6} md={4}>
                <Image src="holder.js/100px250" fluid  />
                <input id="profilePic" type="file" onChange={onChangePicture}/>

            </Col>
            </Row>
        </Container> */}

        <Addphoto type="submit" />
      </div>
      <div class="text">
        <svg
          width="5em"
          height="3em"
          viewBox="0 0 16 16"
          class="bi bi-camera2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 0 1 4-4v1z" />
          <path
            fill-rule="evenodd"
            d="M14.333 3h-2.015A5.97 5.97 0 0 0 9 2a5.972 5.972 0 0 0-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 0 0 3.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9 13A5 5 0 1 0 9 3a5 5 0 0 0 0 10z"
          />
          <path d="M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z" />
        </svg>

        <div>
          <h6>Step 3</h6>
          <h3>Add Description</h3>
          <p>Use no more 160 words to decsribe to us this request and submit</p>
          <textarea rows="5" cols="25" name="message"></textarea>
        </div>
        <div>
          <button
            id="confbutton"
            name="required"
            onClick={() => setIsopen(true)}
          >
            Confirm Details
          </button>

          <confirm open={isOpen} onClose={() => setIsopen(false)} />
        </div>
      </div>

      {/* onSubmit={handleSubmit}  */}
    </Form>
  );
};
export default Select;
