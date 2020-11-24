import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Cards from './Card';

const LocalIssues = () => {
  const { apiData, setApiData } = useContext(AppContext);

  useEffect(() => {
    fetch(`/localissuespage`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
        console.log(data[1].location.longitude);
      });
  }, []);

  return (
    <div>
      {apiData.map(
        (item) =>
          Object.keys(item).length && (
            <Cards
              city={item.city}
              issueType={item.issue_type}
              streetAddress={item.street_address}
              locationLat={item.location ? item.location.latitude : 0}
              locationLng={item.location ? item.location.longitude : 0}
            />
          )
      )}
    </div>
  );
};
export default LocalIssues;
