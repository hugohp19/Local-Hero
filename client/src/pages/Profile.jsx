import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Image, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import UpdateUser from '../components/UpdateUser';
import Logout from '../components/Logout';

const Profile = () => {
  const { loginData, setLoginData, setLoading } = useContext(AppContext);

  console.log('login data object', loginData);

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
    setLoading(true);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoginData(updatedUser.data);
      console.log('after submit: ', updatedUser.data);
      swal('Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="profile">
        <Row className="profilePic">
          <Col xs={6} md={4}>
            <Image
              className="profilePicture"
              src={
                preview
                  ? preview
                  : loginData?.avatar
                  ? loginData?.avatar
                  : 'https://www.flaticon.com/svg/static/icons/svg/1946/1946429.svg'
              }
              alt="profile-pictures"
              roundedCircle
            />
          </Col>
        </Row>
        <Card className="userInfoCard" style={{ width: '18rem' }} key="1">
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
            <Card.Text>
              {loginData?.address}
              {loginData?.zipcode}
            </Card.Text>
            <Card.Text>{loginData?.city}</Card.Text>
            <Button type="submit" size="sm" className="mt-1">
              <UpdateUser />
            </Button>
            <Button type="submit" size="sm" className="mt-1">
              <Logout />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
