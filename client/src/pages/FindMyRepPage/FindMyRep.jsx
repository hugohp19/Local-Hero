import React, { useContext, useState } from 'react';
import axios from 'axios';
import locationImage from '../../assets/images/location.svg';
import { AppContext } from '../../context/AppContext';
import swal from 'sweetalert';
import warning from '../../assets/images/warning.svg';
import wrong from '../../assets/images/wrong.svg';
import './FindMyRep.css';

const FindMyRep = ({ history }) => {
  const { address, setAddress } = useContext(AppContext);
  const { repData, setRepData } = useContext(AppContext);
  const { setFilteredRep } = useContext(AppContext);
  const [zipcodePlaceholder, setZipcodeplaceholder] = useState(
    'Enter Zip Code'
  );
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    setZipcodeplaceholder('Enter Zip Code');
    setAddress(e.target.value);

    if (address.length < 3) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    if (!address) return;

    try {
      const response = await axios({
        method: 'GET',
        url: `/rep/representatives?address=${address}`,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await setFilteredRep(response.data.officials);
      await setRepData(response.data);

      if (!response.data) {
        swal({ text: 'Invalid Zip Code', icon: warning });
        return;
      }
      history.push('/your-reps');
    } catch (error) {
      swal({ text: 'Something Went Wrong', icon: wrong });
    }
  };
  //wrm = Who Represents Me
  return (
    <div className="whoRepresentsMe-container">
      <h2>
        Who <br />
        <span>REPRESENTS</span>
        <br /> You?
      </h2>

      <form className="wrm-form-container" name="city" onSubmit={handleAddress}>
        <div className="wrm-search">
          <p>Enter your Zip Code to find your local representatives</p>
          <div className="wrm-search-container">
            <input
              type="number"
              placeholder={zipcodePlaceholder}
              className="wrm-searchbar"
              value={address}
              onChange={handleSearch}
            />
            <div className="wrm-right-image-container">
              <img className="img" src={locationImage} alt="Location" />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="FIND MY REP"
          className="wrm-searchButton"
          disabled={btnDisabled}
        />
      </form>
    </div>
  );
};

export default FindMyRep;
