import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import locationImage from '../../assets/images/location.svg';
import axios from 'axios';
import RepsCard from '../../components/RepsCard/RepsCard';

const YourReps = ({ history }) => {
  const { repData, setRepData } = useContext(AppContext);
  const { address, setAddress } = useContext(AppContext);
  console.log(repData);

  const handleSearch = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    //console.log(e.target.value);
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    console.log('click', address);
    if (!address) return;

    try {
      const response = await axios({
        method: 'GET',
        url: `/rep/representatives?address=${address}`,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await setRepData(response.data);
      // console.log(repData);
      // console.log(response.data);
      history.push('/your-reps');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>
          Your <span>REPS</span>
        </h2>
        <form className="form-container" name="city" onSubmit={handleAddress}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Input Address"
              className="searchbar"
              onChange={handleSearch}
            />
            <img src={locationImage} alt="Location" />
          </div>
        </form>
      </div>
      <div>filters</div>
      <div>
        {repData &&
          repData.map((rep, i) => {
            return (
              <RepsCard
                key={i}
                name={rep.name}
                photo={rep.photo}
                party={rep.party}
                position={rep.position}
              />
            );
          })}
      </div>
    </div>
  );
};

export default YourReps;
