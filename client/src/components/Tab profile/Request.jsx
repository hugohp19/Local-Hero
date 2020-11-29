import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Request = () => {
  const [page, setPage] = useState(0);
  const pagedown = () => {
    setPage(page - 1);
    return console.log(page);
  };

  const pageup = () => {
    setPage(page + 1);
    return console.log(page);
  };

  const onFirstPage = page === 0;
  const onLastPage = page === page.length - 1;

  return (
    <div>
      <h2>"Requests"</h2>
      <button onClick={pagedown} disabled={onFirstPage}>
        &gt;
      </button>
      <button onClick={pageup} disabled={onLastPage}>
        &lt;
      </button>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Request;
