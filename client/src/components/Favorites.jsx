import React from 'react';
import { Col, Image, Container, Row } from 'react-bootstrap';

const Favorites = () => {
  return (
    <div>
      <Container>
        <Row className="favorites">
          <Col>
            <Image
              className="repFav"
              src="https://files.willkennedy.dev/wyncode/wyncode.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Image
              className="repFav"
              src="https://files.willkennedy.dev/wyncode/wyncode.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Image
              className="repFav"
              src="https://files.willkennedy.dev/wyncode/wyncode.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Image
              className="repFav"
              src="https://files.willkennedy.dev/wyncode/wyncode.png"
              roundedCircle
            />
          </Col>
          <Col>
            <Image
              className="repFav"
              src="https://files.willkennedy.dev/wyncode/wyncode.png"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Favorites;
