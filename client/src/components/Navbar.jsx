import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { AppContext } from '../context/AppContext';
import { Navbar, Nav, Dropdown, Image, Button } from 'react-bootstrap';

const Navigation = () => {
  const { loginData } = useContext(AppContext);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Nav.Item>
        <Dropdown drop="down" className="mr-1">
          <Dropdown.Toggle variant="">
            <i className="fas fa-bars" id="burgermenu"></i>
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
          <Button variant="link" as={Link} to="/Profile">
            <Image
              src={
                loginData?.avatar
                  ? loginData.avatar
                  : 'https://files.willkennedy.dev/wyncode/wyncode.png'
              }
              height={50}
              width={50}
              roundedCircle
            />
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
