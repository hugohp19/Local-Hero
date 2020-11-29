import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fixed="bottom">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/localvoice">Local Voice</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/localissuespage">Submit an issue</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/home">
            <i className="fab fa-facebook"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <i className="fab fa-twitter"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Footer;
