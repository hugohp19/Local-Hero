import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
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
    <Navbar bg="light" expand="lg">
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
              <Dropdown.Item href="#action/3.4">Register</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Item>
          <Dropdown drop="down" className="mr-1">
            <Dropdown.Toggle variant="">
              <Image
                src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
                height={50}
                width={50}
                roundedCircle
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">
                Profile
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <i class="fas fa-search" id="search"></i>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Nav.Item>
        </Nav.Item>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Navigation;
