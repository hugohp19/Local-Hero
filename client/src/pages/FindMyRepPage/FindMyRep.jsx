import React, { useContext } from 'react';
import axios from 'axios';
import locationImage from '../../assets/images/location.svg';
import { AppContext } from '../../context/AppContext';
import './FindMyRep.css';

const FindMyRep = ({ history }) => {
  const { address, setAddress } = useContext(AppContext);
  const { repData, setRepData } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    //console.log(e.target.value);
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    //console.log('click', address)
    if (!address) return;

    try {
      // const representatives = await axios.get('/rep/representatives/', {address});

      const response = await axios({
        method: 'GET',
        url: `/rep/representatives?address=${address}`,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await setRepData(response.data);
      console.log(repData);
      console.log(response.data);
      history.push('/your-reps');
    } catch (error) {
      console.log(error);
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
              placeholder="Enter Zip Code"
              className="wrm-searchbar"
              onChange={handleSearch}
            />
            <div className="wrm-right-image-container">
              <img className="img" src={locationImage} alt="Location" />
            </div>
          </div>
        </div>
        <input type="submit" value="FIND MY REP" className="wrm-searchButton" />
      </form>
    </div>
  );
};

export default FindMyRep;
