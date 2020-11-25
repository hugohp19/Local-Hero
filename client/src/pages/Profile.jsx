import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Image, Row, Col, Card, Button } from 'react-bootstrap';
import Favorites from '../components/Favorites';
import { set } from 'mongoose';

const Profile = () => {
  const { loginData } = useContext(AppContext);
  console.log(loginData);

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
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            <Button type="submit" size="sm" className="mt-4">
              Save Image
            </Button>
          </form>
          <Card.Title>{loginData.name}</Card.Title>
          <Card.Text>{loginData.email}</Card.Text>
          <Button variant="primary">change password</Button>
        </Card.Body>
      </Card>
      <Favorites />
    </div>
  );
};

export default Profile;
