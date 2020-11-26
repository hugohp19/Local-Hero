import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Image, Row, Col, Card, Button } from 'react-bootstrap';
import Favorites from '../components/Favorites';
import { set } from 'mongoose';
import axios from 'axios';

const Profile = () => {
  const { loginData, setLoginData } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoginData({ ...setLoginData, avatar: updatedUser.data.secure_url });
      // setLoginData((loginData) => [
      //   ...loginData,
      //   {avatar: updatedUser.data.secure_url}
      // ]);
      console.log('Sweet!', 'Your image has been updated!', 'success');
      console.log('this is avatar', avatar);
    } catch (error) {
      console.log('Errsor', 'Oops, something went wrong.');
    }
  };

  console.log(loginData);
  return (
    <>
      <div className="profile">
        <Row className="profilePic">
          <Col xs={6} md={4}>
            <Image
              src={
                // loginData.avatar
                //   ? preview
                //   : 'https://files.willkennedy.dev/wyncode/wyncode.png'
                preview
                  ? preview
                  : loginData?.avatar
                  ? loginData?.avatar
                  : 'https://files.willkennedy.dev/wyncode/wyncode.png'
              }
              roundedCircle
              fluid
            />
          </Col>
        </Row>
        <Card style={{ width: '18rem' }}>
          <Card.Body align="center">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageSelect(e)}
              />
              <Button type="submit" size="sm" className="mt-4">
                Save Image
              </Button>
            </form>
            <Card.Title>{loginData?.name}</Card.Title>
            <Card.Text>{loginData?.email}</Card.Text>
            <Button variant="primary">change password</Button>
          </Card.Body>
        </Card>
        <Favorites />
      </div>
    </>
  );
};

export default Profile;
