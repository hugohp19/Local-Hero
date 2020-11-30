import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Cards from './Card';

const LocalIssues = () => {
  const { apiData, setApiData, filterData } = useContext(AppContext);

  useEffect(() => {
    fetch(`/localissuespage`)
      .then((res) => res.json())
      .then((data) => {
        let mapData = data.slice(1);
        setApiData(data.slice(1));
      });
  }, []);

  return (
    <div className="test">
      {filterData &&
        filterData.map(
          (item, i) =>
            Object.keys(item).length && (
              <Cards
                key={i}
                city={item.city.replaceAll('_', ' ')}
                issueType={item.issue_type}
                streetAddress={item.street_address}
                zipCode={item.zip_code}
                locationLat={item.location ? item.location.latitude : 0}
                locationLng={item.location ? item.location.longitude : 0}
              />
            )
        )}
    </div>
  );
};
export default LocalIssues;
