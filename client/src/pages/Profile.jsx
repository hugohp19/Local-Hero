import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Image, Row, Col, Card, Button } from 'react-bootstrap';
import Favorites from '../components/Favorites';

const Profile = () => {
  const setCurrentUser = useContext(AppContext);

  return (
    <div className="profile">
      <Row className="profilePic">
        <Col xs={6} md={4}>
          <Image
            src="https://files.willkennedy.dev/wyncode/wyncode.png"
            roundedCircle
            fluid
          />
        </Col>
      </Row>
      <Card style={{ width: '18rem' }}>
        <Card.Body align="center">
          <Card.Title>Pablo Escobar</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content
          </Card.Text>
          <Button variant="primary">change password</Button>
        </Card.Body>
      </Card>
      <Favorites />
    </div>
  );
};

export default Profile;
