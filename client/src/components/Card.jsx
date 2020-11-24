import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ city, issueType }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>{issueType}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
