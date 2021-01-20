import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { AppContext } from '../context/AppContext';
import { Navbar, Nav, Dropdown, Image, Button } from 'react-bootstrap';
import localHero from '../assets/images/localHero.svg';

const Navigation = () => {
  const { loginData } = useContext(AppContext);

  return (
    <Navbar bg="light" variant="light" expand="xxl" sticky="top">
      <Nav.Item>
        <Dropdown drop="down" className="mr-1">
          <Dropdown.Toggle variant="">
            <i
              className="fas fa-bars"
              id="burgermenu"
              style={{ fontSize: '2rem' }}
            ></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/LocalVoice">
              Your local voice
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/localissuespage">
              Local Issues
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/YourVoteYourVoice">
              Voter Resources
            </Dropdown.Item>
            <Dropdown.Divider />
            <div className="d-flex">
              <Login />
              <Register />
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <img src={localHero} alt="localHero"></img>

      <Nav>
        <Nav.Item>
          <Button variant="link" as={Link} to="/Profile">
            <Image
              src={
                loginData?.avatar
                  ? loginData.avatar
                  : 'https://www.flaticon.com/svg/static/icons/svg/1946/1946429.svg'
              }
              height={40}
              width={45}
              roundedCircle
            />
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
