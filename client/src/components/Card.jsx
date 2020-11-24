import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({
  city,
  streetAddress,
  issueType,
  locationLat,
  locationLng
}) => {
  return (
    <div className="serviceIssues">
      <Card id="serviceIssues" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyBq7TpsUYTQJV9CqKwwDoFZgM-K4aHwMH8"
        />
        <Card.Body className="serviceIssuesBody">
          <Card.Title>{city}</Card.Title>
          <Card.Text>{streetAddress}</Card.Text>
          <Card.Text>{issueType}</Card.Text>
          <Card.Text>{locationLat}</Card.Text>
          <Card.Text>{locationLng}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
