import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {
  Navbar,
  Nav,
  Dropdown,
  Image,
  Form,
  FormControl,
  Button,
  Accordion,
  Card
} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Nav.Item>
        <Dropdown drop="down" className="mr-1">
          <Dropdown.Toggle variant="">
            <i class="fas fa-bars" id="burgermenu"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/">
              Your local voice
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/">
              Event
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/">
              About us
            </Dropdown.Item>
            <Dropdown.Divider />
            <div className="d-flex">
              <Login />
              <Register />
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav>
        <Nav.Item>
          <Dropdown drop="down" className="mr-1">
            <Dropdown.Toggle>
              <Image
                src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
                height={50}
                width={50}
                roundedCircle
              />
            </Dropdown.Toggle>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
