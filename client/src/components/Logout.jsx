import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const Logout = () => {
  const { setLoginData } = useContext(AppContext);
  const history = useHistory();
  const handleSignOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setLoginData(null);
      swal(response.data.message, 'You have signed out!', 'success').then(() =>
        history.push('/')
      );
    } catch (error) {
      swal(error);
    }
  };
  return (
    <Dropdown.Item id="logoutB" onClick={handleSignOut}>
      Logout
    </Dropdown.Item>
  );
};

export default Logout;
