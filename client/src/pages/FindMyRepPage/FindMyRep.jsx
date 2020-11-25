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

  return (
    <div className="whoRepresentsMe-container">
      <h2>
        Who <br />
        <span>REPRESENTS</span>
        <br /> You?
      </h2>

      <form className="form-container" name="city" onSubmit={handleAddress}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Input Address"
            className="searchbar"
            onChange={handleSearch}
          />
          <img className="img" src={locationImage} alt="Location" />
        </div>
        <input type="submit" value="FIND MY REP" className="searchButton" />
      </form>
    </div>
  );
};

export default FindMyRep;
