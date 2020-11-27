import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import locationImage from '../../assets/images/location.svg';
import axios from 'axios';
import RepsCard from '../../components/RepsCard/RepsCard';
import './YourReps.css';

const YourReps = ({ history }) => {
  const { repData, setRepData } = useContext(AppContext);
  const { address, setAddress } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
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
      await setRepData(response.data);
      // console.log(repData);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <form className="form-container" name="city" onSubmit={handleAddress}>
          <div className="TopBar">
            <h2>
              Your <span>REPS</span>
            </h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="searchbar"
                id="zipcode"
                onChange={handleSearch}
              />
              <div className="right-image-container">
                <img src={locationImage} alt="Location" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div></div>
      <div>
        {repData &&
          repData.officials.map((rep, i) => {
            return (
              <RepsCard
                key={i}
                first_name={rep.first_name}
                last_name={rep.last_name}
                photo={rep.photo_origin_url}
                party={rep.party}
                position={rep.office.title}
                level={rep.office.chamber.government.type}
                rep={rep}
              />
            );
          })}
      </div>
    </div>
  );
};

export default YourReps;
