import React, { useState, useEffect } from 'react';
import Cards from './Card';

const LocalIssues = () => {
  const [apiData, setApiData] = useState([]);
  // const getData = () => {
  //   try {
  //     fetch(`/localissuespage`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setDataLi(data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    fetch(`/localissuespage`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
      });
  }, []);

  // getData();
  return (
    <div>
      {apiData.map((item) => (
        <Cards
          city={item.city}
          issueType={item.issue_type}
          streetAddress={item.street_address}
          location={item.location ? item.location.latitude : 0}
        />
      ))}
    </div>
  );
};
export default LocalIssues;