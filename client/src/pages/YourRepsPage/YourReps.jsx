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
    //console.log(e.target.value);
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    //console.log('click', address);
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
      console.log(response.data);
      history.push('/your-reps');
    } catch (error) {
      console.log(error);
    }
  };

  const ShowCard = (render, rep, i) => {
    if (render !== 'VACANT') {
      return (
        <RepsCard
          key={i}
          name={rep.name}
          photo={rep.photo}
          party={rep.party}
          position={rep.position}
        />
      );
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
          repData.map((rep, i) => {
            return ShowCard(rep.name, rep, i);
            // return (
            //   <RepsCard
            //     key={i}
            //     name={rep.name}
            //     photo={rep.photo}
            //     party={rep.party}
            //     position={rep.position}
            //   />
            // );
          })}
      </div>
    </div>
  );
};

export default YourReps;
