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
          src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${locationLat},${locationLng}&fov=80&heading=70&pitch=0&key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}`}
        />
        <Card.Body className="serviceIssuesBody">
          <Card.Title>{city}</Card.Title>
          <Card.Text>{streetAddress}</Card.Text>
          <Card.Text>{issueType}</Card.Text>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
