import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({
  city,
  streetAddress,
  issueType,
  locationLat,
  locationLng,
  zipCode
}) => {
  return (
    <div className="serviceIssues">
      <Card id="serviceIssues">
        <Card.Img
          id="imgGmaps"
          variant="top"
          src={`https://maps.googleapis.com/maps/api/streetview?size=374x200&location=${locationLat},${locationLng}&fov=80&heading=70&pitch=0&key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}`}
        />
        <Card.Body className="serviceIssuesBody">
          <Card.Title>{city}</Card.Title>
          <Card.Title>location:</Card.Title>
          <Card.Text>
            {streetAddress}, {zipCode}
          </Card.Text>
          <Card.Title>Issue Description:</Card.Title>
          <Card.Text>{issueType.toLowerCase()}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
