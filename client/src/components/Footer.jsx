import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="fixed-bottom">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/home">
            <i class="fab fa-facebook"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <i class="fab fa-twitter"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <i class="fab fa-instagram"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Footer;
