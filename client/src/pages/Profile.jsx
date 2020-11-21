import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const Profile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
