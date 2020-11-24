import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ city, streetAddress, issueType, location }) => {
  return (
    <div className="serviceIssues">
      <Card id="serviceIssues" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="serviceIssuesBody">
          <Card.Title>{city}</Card.Title>
          <Card.Text>{streetAddress}</Card.Text>
          <Card.Text>{issueType}</Card.Text>
          <Card.Text>{location}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
