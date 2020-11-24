import React, { useState } from 'react';
import Cards from './Card';

const LocalIssues = () => {
  const [dataLi, setDataLi] = useState([]);
  const getData = () => {
    try {
      fetch(`/localissuespage`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDataLi(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  getData();
  return (
    <div>
      {dataLi.map((item) => (
        <Cards city={item.city} issueType={item.issue_type} />
      ))}
    </div>
  );
};
export default LocalIssues;
